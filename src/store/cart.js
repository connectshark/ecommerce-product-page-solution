import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',{
  state: () => ({
    cartList: []
  }),
  actions: {
    addCard (item) {
      const itemInCart = this.cartList.find(item => item.name === item.name)
      if (itemInCart) {
        const newAmount = itemInCart.amount + item.amount
        const itemInCartIndex = this.cartList.findIndex(item => { item.name === item.name })
        this.cartList.splice(itemInCartIndex, 1 , {
          name: itemInCart.name,
          icon: itemInCart.icon,
          price: itemInCart.price,
          amount: newAmount
        })
      } else {
        this.cartList.push(item)
      }
    },
    removeItemFromCart (index) {
      this.cartList.splice(index, 1)
    }
  }
})
