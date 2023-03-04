<template>
  <div class="card bordered">
    <figure class="px-8 pt-10">
      <img
        :src="product.image"
        alt="Card Image"
        class="object-contain w-full h-64"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <router-link class="link link-hover" :to="`/product/${product.id}`">{{
          product.title
        }}</router-link>
      </h2>
      <p>{{ toCurrency(product.price) }}</p>
      <div class="justify-end card-actions">
        <button
          class="btn btn-primary"
          @click="() => addCardButton(product.id)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddModalWindow from '../components/AddModalWindow.vue';
import { useCartStore } from '../store/cart';
import { modalWindowStore } from '../store/modals';
import type { Product } from '../store/products';
import { computed } from 'vue';
import { toCurrency } from '../shared/utils';
import { ref } from 'vue';

const cartStore = useCartStore();
const modalWindow = modalWindowStore();

defineProps<{
  product: Product;
}>();

const addCardButton = (id: number) => {
  cartStore.add(id);
  modalWindow.enableModal(id);
};
</script>
