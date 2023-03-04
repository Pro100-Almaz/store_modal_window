import { defineStore } from 'pinia';

export const modalWindowStore = defineStore({
  id: 'modals',

  state: () => ({
    isShown: false,
    id: 0,
  }),

  getters: {},

  actions: {
    enableModal(id: number) {
      this.isShown = true;
      this.id = id;
    },
    disableModal() {
      this.isShown = false;
      this.id = 0;
    },
  },
});
