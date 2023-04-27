import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',{
  state: () => ({
    cartList: []
  }),
  actions: {
    addCard (item) {
      this.cartList.push(item)
    }
  }
})
