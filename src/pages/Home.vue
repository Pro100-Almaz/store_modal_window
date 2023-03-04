<template>
  <div class="p-4 max-w-7xl mx-auto">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProductCardSkeleton
        v-show="!productStore.loaded"
        v-for="n in 15"
        :key="n"
      />
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <AddModalWindow v-show="modalWindow.isShown"></AddModalWindow>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import ProductCardSkeleton from '../components/ProductCardSkeleton.vue';
import { ref } from 'vue';
import { modalWindowStore } from '../store/modals';
import { useProductStore } from '../store/products';
import AddModalWindow from '../components/AddModalWindow.vue';

const productStore = useProductStore();
const modalWindow = modalWindowStore();

const products = computed(() => productStore.list);
</script>
