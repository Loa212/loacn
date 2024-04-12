import { defineStore } from 'pinia'
import type { Product } from '~/types/product'

export interface CartItem extends Product {
  quantity: number
}

export interface State {
  items: CartItem[]
}
export const useCartStore = defineStore('cart', {
  state: (): State => ({
    items: [],
  }),
  getters: {
    totalItems: state =>
      state.items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: state =>
      state.items.reduce(
        (acc, item) => acc + parseInt(item.price) * item.quantity,
        0,
      ),
  },
  actions: {
    addToCart(product: CartItem) {
      const item = this.items.find(item => item.id === product.id)

      if (item) {
        item.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(product: CartItem) {
      const item = this.items.find(item => item.id === product.id)

      if (item) {
        item.quantity--

        if (item.quantity <= 0) {
          const index = this.items.findIndex(item => item.id === product.id)
          this.items.splice(index, 1)
        }
      }
    },

    resetCart() {
      this.items = []
    },
  },
})
