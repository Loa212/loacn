<template>
  <HoverCard>
    <HoverCardTrigger>
      <Button class="relative" variant="ghost" size="sm">
        <ShoppingBasket :size="24" class="me-1" />
        <span
          class="absolute end-0 top-0 rounded-sm bg-blue-600 px-1 py-0 text-xs text-white"
        >
          {{ totalItems }}
        </span>
      </Button>
    </HoverCardTrigger>
    <HoverCardContent class="me-2">
      <ul v-if="items.length > 0" class="space-y-4">
        <li v-for="item in items" :key="item.id">
          <div class="grid grid-cols-12 gap-3 text-gray-500">
            <div class="col-span-2">
              <img
                :src="item.image"
                alt="product"
                class="h-16 w-16 rounded-md object-scale-down object-center"
              />
            </div>
            <div class="col-span-7">
              <p>{{ item.title }}</p>
              <small
                >{{ item.quantity }} x $ {{ item.price }} = $
                {{ parseFloat(item.price) * item.quantity }}</small
              >
            </div>
            <div class="dark col-span-3">
              <Button
                @click="decreaseQuantity(item)"
                variant="outline"
                size="sm"
              >
                -
              </Button>
              <span class="mx-1">{{ item.quantity }}</span>
              <Button
                @click="increaseQuantity(item)"
                variant="outline"
                size="sm"
              >
                +
              </Button>
              <div>
                <Button
                  @click="removeFromCart(item)"
                  aria-label="remove this item from the cart"
                  variant="destructive"
                  size="icon"
                >
                  <Trash2 :size="16" class="me-1" />
                </Button>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div
            class="mx-8 flex items-center justify-between border-t border-gray-500 pb-2 pt-4"
          >
            <div class="text-gray-500">
              Total: {{ ' ' }}
              <b>$ {{ totalPrice }}</b>
            </div>
            <Button>
              Proceed to checkout
              <ArrowRight :size="20" class="ms-2" />
            </Button>
          </div>
        </li>
      </ul>
      <div v-else>
        <p class="text-gray-500">Cart is empty</p>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart-store'
import { storeToRefs } from 'pinia'
import Button from './button.vue'
import { ArrowRight, ShoppingBasket, Trash2 } from 'lucide-vue-next'

import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

const store = useCartStore()
const { items, totalItems, totalPrice } = storeToRefs(store)
const { increaseQuantity, decreaseQuantity, removeFromCart } = store

// Listen to changes in the quantity of items in the cart - alert if changes occur
watch(totalItems, (newTotalItems, oldTotalItems) => {
  if (newTotalItems !== oldTotalItems) {
    console.log('Cart updated')
  }
})
</script>

<style scoped></style>
