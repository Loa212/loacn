<template>
  <h1 class="text-2xl font-bold text-foreground">Products:</h1>
  <ul class="grid gap-3 py-5 lg:grid-cols-3">
    <li v-if="isPending" v-for="el in arr">
      <ProductCardLoader />
    </li>

    <li v-if="error">Error</li>

    <li v-if="!products || products.length <= 0">No products</li>

    <li v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import type { Product } from '../types/product'

const fetcher = async () =>
  await fetch('https://fakestoreapi.com/products?limit=6').then(response =>
    response.json(),
  )

const {
  data: products,
  isPending,
  error,
} = useQuery<Product[]>({
  queryKey: ['products'],
  queryFn: fetcher,
  staleTime: 1000 * 60 * 5, // 5 minutes
  refetchInterval: 1000 * 60 * 5, // 5 minutes
  refetchOnWindowFocus: false,
  refetchOnMount: false,
})

const arr = new Array(6).fill(null)
</script>

<style scoped></style>
