<template>
  <v-container>
    <div v-if="cartStore.loading">loading</div>
    <div v-for="p in cartStore.items" :key="p.id">
      <div class="border mb-2 p-4">
        <div>
          <v-img
            :src="p.image"
            :lazy-src="p.image"
            width="100"
            height="100"
          ></v-img>
        </div>
        <div>
          <h5>{{ p.product }}</h5>
          <p>({{ p.qty }}) = {{ p.amount }}</p>
        </div>
      </div>
    </div>

    <div>
      <v-btn @click="placeOrder">Place Order</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useAuthStore } from "~/store/cart";
import { ref } from 'vue';

const cartStore = useAuthStore();

const placeOrder = () => {
   cartStore.placeOrder(cartStore.orderData);
}
</script>

<style lang="scss" scoped>
</style>
