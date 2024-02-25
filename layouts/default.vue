<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="#1d4ed8"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        
        <v-toolbar-title class="logo-title">
          E<span class="logo-highlight"></span>SHOP® <!-- Added logo-highlight class -->
        </v-toolbar-title>

        <v-spacer></v-spacer>

        
        

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-cart"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
          

            <v-btn 
       variant = "text"
       prepend-icon="mdi-login"
       text="Logout"
       @click="authStore.logout()"
       
       >
       Logout
       <v-progress-circular
       indeterminate
       color="primary">
       </v-progress-circular>
       </v-btn>



        <v-btn
          variant="text"
          class="login-button"
          @mouseenter="buttonHovered = true"
          @mouseleave="buttonHovered = false"
          :class="{ 'hovered':buttonHovered }"
          @click="$router.push('/login')"
          
        >
          LOGIN
        </v-btn>

     

       

      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>

      <v-main>
        <!-- CHANGEABLE PART -->
        <slot />
        <!-- CHANGEABLE PART -->
      </v-main>
    </v-layout>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
    buttonHovered: false, // Added buttonHovered data property
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/store/auth';

const buttonHovered = ref(false)
const router = useRouter()

const handleMouseEnter = () => {
  buttonHovered.value = true
}

const handleMouseLeave = () => {
  buttonHovered.value = false
}

const handleButtonClick = () => {
  console.log('Button clicked!')
  router.push('/login')
}

const authStore = useAuthStore();
</script>

<style scoped>
/* Added custom styling for the login button and logo title */
.login-button {
  color: #fff; /* White text color */
  border: 1px solid #fff; /* White border */
  border-radius: 20px; /* Rounded border */
  padding: 8px 20px; /* Adjust padding */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.login-button:hover {
  background-color: #fff; /* White background on hover */
  color: #000; /* Black text color on hover */
}

.logo-title {
  font-family: 'Arial', sans-serif; /* Change font family */
  font-size: 24px; /* Adjust font size */
}

.logo-highlight {
  color: black /* Custom color for highlighting */
}

.hovered {
  background-color: #84cc16 !important; 
}
.main-container {
  /* Add the SVG file as a background image */
  background-image: url('~/static/topography.svg');
  /* Set background properties */
  background-repeat: no-repeat;
  background-size: cover; /* Adjust as needed */
  /* Add any additional styles for the main container */
}
</style>
