<template>
 <div style="height:100vh; display:flex; align-items-center">
    <v-container>
    <v-row>
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="10" class="login-card">
          <v-card-title class="text-center">WELCOME BACK</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    outlined
                    prepend-inner-icon="mdi-email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    outlined
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn block color="primary" @click="login">Login</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="blue darken-2" text @click="redirectToHomepage">
              Back to Homepage
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
 </div>
</template>

<script setup>
definePageMeta({
   layout: "login",
});

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const router = useRouter()

const login = () => {
  // Perform login logic here
}

const redirectToHomepage = () => {
  router.push('/')
}
</script>

<style scoped>
.fill-height {
  height: 100%;
}

.text-center {
  text-align: center;
}

.login-card {
  padding: 20px;
  background-color: #f0f7ff; /* Light blue background */
  border-radius: 10px;
}

.v-text-field-prepend-inner > .v-icon, .v-text-field-append-inner > .v-icon {
  margin: 0;
}
</style>
