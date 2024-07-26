<template>
  <NuxtLink :to="`/products/${id}`">
    <div
      class="bg-card ring-muted text-foreground hover:ring-muted-foreground w-full cursor-pointer rounded-lg p-4 shadow-sm ring-1 transition-transform hover:-translate-y-0.5 hover:ring-2"
    >
      <div
        class="ring-muted relative block h-48 overflow-hidden rounded-md bg-white ring-1"
      >
        <img
          alt="ecommerce"
          class="block size-full object-contain object-center p-3"
          :src="image"
        />
      </div>
      <div class="mt-4">
        <h3
          class="title-font text-muted-foreground mb-1 text-xs tracking-widest"
        >
          {{ category }}
        </h3>
        <h2 class="title-font text-lg font-medium lg:truncate">
          {{ title }}
        </h2>
        <p class="text-muted-foreground mt-1">{{ price }} $</p>
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
