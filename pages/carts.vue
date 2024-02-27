<template>
  <v-container>
    <div v-if ="cartstore.loading">loading</div>
    <!-- <div v-else={{ orderData}}></div> -->
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
      <v-btn  @click="cartStore.orderData={{cartStore.orderData}}>
        Place Order
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();

var orderData = ref({
  total: 350,
  orderlines: cartStore.items.map((i) => {
    return {

  
    product_id : i.product_id,
    qty: i.qty,
    amount: i.amount,
  };
  }),

}); 

</script>

<style lang="scss" scoped>
</style>
