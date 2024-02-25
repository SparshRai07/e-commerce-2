<template>
  <div style="height: 100vh; display: flex; align-items: center">
    <v-container>
      <v-label class="text-h4">Welcome Back</v-label>
      <v-text-field label="Email" outlined v-model="userData.email"></v-text-field>
      <v-text-field label="Password" type="password" outlined v-model="userData.password"></v-text-field>
      <v-btn color="primary" @click="authStore.login(userData)">Login</v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const userData = ref({
  email: null,
  password: null,
});

definePageMeta({
  layout: "login",
});

const redirectToHomepage = () => {
  router.push('/');
};
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
