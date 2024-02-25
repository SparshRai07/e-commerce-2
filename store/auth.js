import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth",{
   state:()=>({
      user: null,
      loading: false,

   }),
   actions:{
      async login(userData){
         try{
            this.loading = true
           var response = await axiosApi.post("login", userData)
           if(response.status == 200) {
            if(response.data.data.token !=  null){
               this.isLoggedIn = true;
               localStorage.setItem("token", `${response.data.data.token}`)
            }
           }
         }catch(e){
           console.warn(e);
         }finally{
            this.loading = false;

         }
      }
   }
})
