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
        (acc, item) => acc + parseFloat(item.price) * item.quantity,
        0,
      ),
  },
  actions: {
    addToCart(product: CartItem) {
      const item = this.items.find(item => item.id === product.id)

      if (item) {
        item.quantity += product.quantity
      } else {
        this.items.push({ ...product, quantity: product.quantity })
      }
    },
    /**
     * Removes all items of the product from the cart
     *
     * @param product CartItem
     */
    removeFromCart(product: CartItem) {
      const index = this.items.findIndex(item => item.id === product.id)
      this.items.splice(index, 1)
    },
    increaseQuantity(product: CartItem) {
      const item = this.items.find(item => item.id === product.id)

      if (item) {
        item.quantity++
      }
    },
    decreaseQuantity(product: CartItem) {
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
