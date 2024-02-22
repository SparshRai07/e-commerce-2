<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="400">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title class="text-h5 text-center pt-4">
      Cafe Badilico
    </v-card-title>

    <v-card-subtitle class="text-center">Local Favorite</v-card-subtitle>

    <v-card-text class="d-flex justify-center align-center flex-wrap">
      <div class="d-flex align-center">
        <v-rating
          v-model="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="20"
          class="mr-2"
        ></v-rating>
        <div class="text-center text-grey align-middle">{{ rating.toFixed(1) }} (413)</div>
      </div>
    </v-card-text>

    <div class="my-4 text-subtitle-1 text-center">
      Small plates, salads & sandwiches - an intimate setting with 12 indoor
      seats plus patio seating.
    </div>

    <v-divider class="mx-4 mb-1"></v-divider>

    <div class="d-flex justify-center align-center">
      <v-btn
        color="#2563eb"
        class="white--text"
        :class="{ 'hovered': cartHovered }"
        @mouseenter="cartHovered = true"
        @mouseleave="cartHovered = false"
        @click="reserve"
      >
        <v-icon left>mdi-cart-plus</v-icon>
       / ADD TO CART
      </v-btn>
    </div>

    <div class="px-4 mt-4 d-flex justify-center align-center">
      <v-btn icon class="mr-4" @click="decrement">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-chip class="count-chip">{{ count }}</v-chip>
      <v-btn icon class="ml-4" @click="increment">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      

    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const count = ref(1)
const rating = ref(4.5)
const cartHovered = ref(false)

function increment() {
  count.value++
}

function decrement() {
  if (count.value > 1) {
    count.value--
  }
}

const reserve = () => {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}

defineProps({
   product:{},

});

 
</script>

<style scoped>



.count-chip {
  background-color: #fafafa;
  color: #333;
}

.hovered {
  background-color: #cf6b6b !important;
}

.align-middle {
  vertical-align: middle;
}
.line-container {
  padding-bottom: 20px; /* Add padding for space towards the top */
}


</style>
