import { definestore } from "pinia";
import axiosApi from "~/config/axios";

export const useAuthStore = defineStore ("auth", {
state:() =>({
   isLoggedIn: null,
   loading: false,

}),

actions:{
   async login(userData){
      try{
         toPlainHandler.loading = true
         var response = await axiosApi.post("login", userData)
         if(response.status == 200){
            this.isLoggedIn = true;
            localStorage.setItem
         }
      }catch (e){
console.warn(e);
      }finally{
         this.loading = false;

      }
   }
}

})