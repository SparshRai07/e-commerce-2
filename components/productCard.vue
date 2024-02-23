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
      :src="product.image"
    ></v-img>

    <v-card-title class="text-h5 text-center pt-4">
      {{product.name}}
    </v-card-title>

    <v-card-subtitle class="text-center">Local Favorite</v-card-subtitle>
 
 <v-card-text class="d-flex justify-center align-center flex-wrap">
  <div class="d-flex align-center">
    <div class="text-center align-middle" style="border-radius: 10px; padding: 5px 10px; background-color: #f0f0f0; display: inline-block;">
      PRICE: <span style="me-3 color: goldenrod; border-radius: 50%; padding: 2px 5px ;">Rs.{{ product.sellingPrice }}
         <span class="text-decoration-line-through text-red" v-if="product.discount">Rs.{{ product.sellingPrice }}</span></span>
    </div>
  </div>
</v-card-text>






    <div class="my-4 text-subtitle-1  text-grey text-center">
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

    <div class="px-2 py-4">
<div class="px-4 mt-4 d-flex justify-center align-center">
      <v-btn icon class="mr-4" @click="decrement">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-chip class="count-chip">{{ count }}</v-chip>
      <v-btn icon class="ml-4" @click="increment">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      

    </div>

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
