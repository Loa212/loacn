<template>
  <section class="body-font overflow-hidden text-gray-600">
    <div class="w-24">
      <NuxtLink
        to="/"
        class="ms-5 flex items-center justify-normal gap-1 font-medium"
      >
        <ArrowLeft :size="20" />
        Back
      </NuxtLink>
    </div>
    <div class="container mx-auto px-5">
      <div v-if="isPending" class="mx-auto flex flex-wrap">
        <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
          <h2 class="title-font mb-2 text-sm tracking-widest text-gray-500">
            <Skeleton class="h-4 w-20 bg-gray-500" />
          </h2>
          <h1
            class="title-font mb-4 space-y-1 text-3xl font-medium text-gray-900"
          >
            <Skeleton class="h-8 w-full bg-gray-500" />
            <Skeleton class="h-8 w-10/12 bg-gray-500" />
          </h1>
          <div class="mb-4 flex">
            <a
              class="flex-grow border-b-2 border-green-500 px-1 py-2 text-lg text-green-500"
              >Description</a
            >
            <a class="flex-grow border-b-2 border-gray-300 px-1 py-2 text-lg"
              >Reviews</a
            >
            <a class="flex-grow border-b-2 border-gray-300 px-1 py-2 text-lg"
              >Details</a
            >
          </div>
          <p class="mb-4 space-y-1 leading-relaxed">
            <Skeleton class="w-12/12 h-3 bg-gray-400" />
            <Skeleton class="h-3 w-10/12 bg-gray-400" />
            <Skeleton class="h-3 w-11/12 bg-gray-400" />
            <Skeleton class="w-12/12 h-3 bg-gray-400" />
            <Skeleton class="h-3 w-10/12 bg-gray-400" />
            <Skeleton class="h-3 w-11/12 bg-gray-400" />
            <Skeleton class="h-3 w-5/12 bg-gray-400" />
          </p>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Color</span>
            <span class="ml-auto text-gray-900">
              <Skeleton class="h-4 w-16 bg-gray-400" />
            </span>
          </div>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Size</span>
            <span class="ml-auto text-gray-900">
              <Skeleton class="h-4 w-16 bg-gray-400" />
            </span>
          </div>
          <div class="mb-6 flex border-b border-t border-gray-200 py-2">
            <span class="text-gray-500">Quantity</span>
            <span class="ml-auto text-gray-900">
              <Skeleton class="h-4 w-16 bg-gray-400" />
            </span>
          </div>
          <div class="flex items-center">
            <span class="title-font text-2xl font-medium text-gray-900">
              <Skeleton class="h-5 w-36 bg-gray-500" />
            </span>
            <button
              class="ml-auto flex rounded border-0 bg-green-500 px-6 py-2 text-white hover:bg-green-600 focus:outline-none"
            >
              Buy
            </button>
            <button
              class="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Skeleton class="h-96 w-1/2 bg-gray-200" />
      </div>

      <div v-else-if="error" class="mx-auto flex flex-wrap">
        <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
          <h2 class="title-font text-sm tracking-widest text-gray-500">
            An error occurred
          </h2>
        </div>
      </div>

      <div v-else-if="!product" class="mx-auto flex flex-wrap">
        <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
          <h2 class="title-font text-sm tracking-widest text-gray-500">
            Product not found
          </h2>
        </div>
      </div>

      <div v-else class="mx-auto flex flex-wrap">
        <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
          <h2 class="title-font text-sm tracking-widest text-gray-500">
            {{ product.category }}
          </h2>
          <h1 class="title-font mb-4 text-3xl font-medium text-gray-900">
            {{ product.title }}
          </h1>
          <div class="mb-4 flex">
            <a
              class="flex-grow border-b-2 border-green-500 px-1 py-2 text-lg text-green-500"
              >Description</a
            >
            <a class="flex-grow border-b-2 border-gray-300 px-1 py-2 text-lg"
              >Reviews</a
            >
            <a class="flex-grow border-b-2 border-gray-300 px-1 py-2 text-lg"
              >Details</a
            >
          </div>
          <p class="mb-4 leading-relaxed">
            {{ product.description }}
          </p>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Color</span>
            <span class="ml-auto text-gray-900">Blue</span>
          </div>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Size</span>
            <span class="ml-auto text-gray-900">Medium</span>
          </div>
          <div class="mb-6 flex border-b border-t border-gray-200 py-2">
            <span class="text-gray-500">Quantity</span>
            <span class="ml-auto text-gray-900">4</span>
          </div>
          <div class="flex">
            <span class="title-font text-2xl font-medium text-gray-900">
              {{ product.price }} $
            </span>
            <button
              class="ml-auto flex rounded border-0 bg-green-500 px-6 py-2 text-white hover:bg-green-600 focus:outline-none"
            >
              Buy
            </button>
            <button
              class="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <img
          alt="ecommerce"
          class="mx-auto h-64 w-full rounded object-contain object-center lg:h-auto lg:max-h-[80vh] lg:w-1/3"
          :src="product.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import type { Product } from '../../types/product'
import { ArrowLeft } from 'lucide-vue-next'
import Skeleton from '~/components/skeleton.vue'
const {
  params: { id },
} = useRoute()

if (!id) {
  throw new Error('Product ID is required')
}

if (typeof id !== 'string') {
  throw new Error('Product ID must be a string')
}

const fetcher = async ({ id }: { id: string }) =>
  await fetch('https://fakestoreapi.com/products/' + id).then(response =>
    response.json(),
  )

const {
  data: product,
  isPending,
  error,
} = useQuery<Product>({
  queryKey: ['product', id],
  queryFn: () => fetcher({ id }),
  staleTime: 1000 * 60 * 5, // 5 minutes
  refetchInterval: 1000 * 60 * 5, // 5 minutes
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  enabled: !!id,
})
</script>

<style scoped></style>
