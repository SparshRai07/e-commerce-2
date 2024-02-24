<template>
  <div style="height: 100vh; display: flex; align-items: center">
    <v-container>
      
      <v-label class="text-h4">Welcome Back</v-label>
      <v-text-field label="Email" outlined v-model ="userData.email"></v-text-field>
      <v-text-field label="Password" type="password" outlined v-model ="userData.password"></v-text-field>
      <v-btn color="primary" @click="authStore.login(userData)">Login</v-btn>
      <!-- <v-btn color="blue" @click="redirectToHomepage" class="back-button ">Back to Homepage</v-btn> -->
    
    
    </v-container>
  </div>
</template>

<script setup>   

import {useAuthStore} from "~/store/auth"


import { useRouter } from 'vue-router'

const router = useRouter()

const login = () => {
  // Perform login logic here
}

const redirectToHomepage = () => {
  router.push('/')
}

definePageMeta({
   layout:"login",

})

const userData = ref({
   email:null,
   password: null,
});


</script>

<style scoped>
.back-button {
  margin-top: 10px;
  transition: background-color 0.3s, color 0.3s;
}

.back-button:hover {
  background-color: red;
  color: white;
}
</style>
