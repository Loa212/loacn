<template>
  <NuxtLink :to="`/products/${id}`">
    <div
      class="w-full cursor-pointer rounded-lg bg-gray-100 p-4 shadow-sm hover:bg-gray-200"
    >
      <div
        class="relative block h-48 overflow-hidden rounded-md bg-white ring-1 ring-gray-200/20"
      >
        <img
          alt="ecommerce"
          class="block size-full object-contain object-center p-3"
          :src="image"
        />
      </div>
      <div class="mt-4">
        <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">
          {{ category }}
        </h3>
        <h2 class="title-font text-lg font-medium text-gray-900 lg:truncate">
          {{ title }}
        </h2>
        <p class="mt-1">{{ price }} $</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const {
  product: { title, image, price, id, category },
} = withDefaults(defineProps<{ product: Product }>(), {})
</script>

<style scoped></style>
