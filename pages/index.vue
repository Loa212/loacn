<template>
  <h1 class="text-2xl font-bold">Products:</h1>
  <ul class="grid gap-3 py-5 lg:grid-cols-3">
    <li v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import type { Product } from './types/product'

const fetcher = async () =>
  await fetch('https://fakestoreapi.com/products?limit=6').then(response =>
    response.json(),
  )

const { data: products, suspense } = useQuery<Product[]>({
  queryKey: ['products'],
  queryFn: fetcher,
  staleTime: 1000 * 60 * 5, // 5 minutes
  refetchInterval: 1000 * 60 * 5, // 5 minutes
  refetchOnWindowFocus: false,
  refetchOnMount: false,
})

await suspense()
</script>

<style scoped></style>
