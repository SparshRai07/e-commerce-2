import {defineStore} from "pinia";

export const useCartStore = defineStore('cart',{
   state:()=>({
      message:null,
      items: [],
      loading: false,
      

   }),

getters: {
   orderData() {
      return {
         total: this.items
         .map((i) => i.amount)
         .reduce((p, a) => p + a, 0),
         orderlines:this.items.map((i) => {
            return {
               product_id: i.product_id,
               qty: i.qty,
               amount: i.amount,
            };
         }),
      };
   },
},

   actions:{
      async addToCart(cartData){
try{
   var token = localStorage.getItem("token");
   var response = await axiosApi.post("cart", cartData, {
      headers:{'Authorization': 'Bearer token'}
   });
  if(response.status == 200 ){
   this.message = response.data.data.message;
   alert(this.message);
   this.getCartItems();
  }


}catch(e) { 
   console.warn("$e");

}finally {
  this.loading = false;
}
     },


     async getCartItems(){
      try{
         this.loading = true;
         var token = localStorage.getItem("token");
         var response = await axiosApi.get("cart",{
            headers:{ Authorization: 'Bearer ${token}'},
         });
        if(response.status == 200 ){
         this.items = response.data.data;
         
        }
      
      
      }catch(e) { 
         console.warn("$e");
      
      }finally {
        this.loading = false;
      }
           },

      async placeOrder(orderData){
         try{ 
            var token = localStorage.getItem("token");
          var response = await axiosApi.post("order", orderData, {
            headers:{'Authorization': `Bearer${token}` }});
          if(response.status == 200) {
            alert ("your order has been placed...");
          }
         }catch(e){

         }finally{

         }
      }
   },
});