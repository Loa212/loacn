<template>
  <NuxtLink :to="`/products/${id}`">
    <div
      class="w-full cursor-pointer rounded-lg bg-card p-4 text-foreground shadow-sm ring-1 ring-muted transition-transform hover:-translate-y-0.5 hover:ring-2 hover:ring-muted-foreground"
    >
      <div
        class="relative block h-48 overflow-hidden rounded-md bg-white ring-1 ring-muted"
      >
        <img
          alt="ecommerce"
          class="block size-full object-contain object-center p-3"
          :src="image"
        />
      </div>
      <div class="mt-4">
        <h3
          class="title-font mb-1 text-xs tracking-widest text-muted-foreground"
        >
          {{ category }}
        </h3>
        <h2 class="title-font text-lg font-medium lg:truncate">
          {{ title }}
        </h2>
        <p class="mt-1 text-muted-foreground">{{ price }} $</p>
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
