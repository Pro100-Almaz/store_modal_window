<template>
  <div class="modal-overlay" v-show="modalWindow.isShown"></div>

  <div class="modals" v-show="modalWindow.isShown">
    <img
      :src="currentCartItem.image"
      alt="Card Image"
      class="object-contain w-full h-64"
    />
    <div class="btns">
      <button class="btn-use-remove" @click="cartStore.remove(id)">
        Remove (-1) {{ currentCartItem.category }}
      </button>

      <span> Currently you have: {{ currentCartItem.quantity }}</span>
      <button class="btn-use-add" @click="cartStore.add(id)">
        Add (+1) {{ currentCartItem.category }}
      </button>
    </div>

    <button class="close" @click="goBackButton">Go Back</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from '../store/products';
import { useProductStore } from '../store/products';
import { useCartStore, Purchase } from '../store/cart';
import { modalWindowStore } from '../store/modals';

const productStore = useProductStore();
const cartStore = useCartStore();
const modalWindow = modalWindowStore();

const id = computed(() => modalWindow.id);

const currentCartItem = computed((): Product & Purchase => {
  if (!modalWindow.isShown) {
    return {} as Product & Purchase;
  }
  return {
    ...cartStore.getCartItemById(modalWindow.id),
    ...productStore.getItem(modalWindow.id),
  };
});

const goBackButton = () => {
  modalWindow.disableModal();
};
</script>

<style setup>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modals {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  padding: 60px 0;
  border-radius: 20px;
  z-index: 90;
}

.btns {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

.btn-use-remove {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}

.btn-use-add {
  background-color: green;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
