<template>
  <head>
    <title>{{ product ? product.title : 'Loading...' }} - Ecommerce</title>
  </head>
  <section class="body-font text-muted-foreground overflow-hidden">
    <div class="w-24">
      <NuxtLink
        to="/"
        class="ms-5 flex items-center justify-normal gap-1 font-medium"
      >
        <Button variant="link" as-child class="text-muted-foreground">
          <ArrowLeft :size="20" class="me-1" />
          Back
        </Button>
      </NuxtLink>
    </div>
    <div class="container mx-auto px-5">
      <div v-if="isPending" class="mx-auto flex flex-wrap">
        <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
          <h2
            class="title-font text-muted-foreground mb-2 text-sm tracking-widest"
          >
            <Skeleton class="bg-muted-foreground h-4 w-20" />
          </h2>
          <h1
            class="title-font text-foreground mb-4 space-y-1 text-3xl font-medium"
          >
            <Skeleton class="bg-muted-foreground h-8 w-full" />
            <Skeleton class="bg-muted-foreground h-8 w-10/12" />
          </h1>
          <div class="mb-4 flex">
            <a
              class="border-success text-success flex-grow border-b-2 px-1 py-2 text-lg"
              >Description</a
            >
            <a class="border-foreground flex-grow border-b-2 px-1 py-2 text-lg"
              >Reviews</a
            >
            <a class="border-foreground flex-grow border-b-2 px-1 py-2 text-lg"
              >Details</a
            >
          </div>
          <p class="mb-4 space-y-1 leading-relaxed">
            <Skeleton class="w-12/12 bg-muted-foreground h-3" />
            <Skeleton class="bg-muted-foreground h-3 w-10/12" />
            <Skeleton class="bg-muted-foreground h-3 w-11/12" />
            <Skeleton class="w-12/12 bg-muted-foreground h-3" />
            <Skeleton class="bg-muted-foreground h-3 w-10/12" />
            <Skeleton class="bg-muted-foreground h-3 w-11/12" />
            <Skeleton class="bg-muted-foreground h-3 w-5/12" />
          </p>
          <div class="border-muted-foreground/20 flex border-t py-2">
            <span class="text-muted-foreground">Color</span>
            <span class="text-foreground ml-auto">
              <Skeleton class="bg-muted-foreground h-4 w-16" />
            </span>
          </div>
          <div class="border-muted-foreground/20 flex border-t py-2">
            <span class="text-muted-foreground">Size</span>
            <span class="text-foreground ml-auto">
              <Skeleton class="bg-muted-foreground h-4 w-16" />
            </span>
          </div>
          <div
            class="border-muted-foreground/20 mb-6 flex border-b border-t py-2"
          >
            <span class="text-muted-foreground">Quantity</span>
            <span class="text-foreground ml-auto">
              <Skeleton class="bg-muted-foreground h-4 w-16" />
            </span>
          </div>
          <div class="flex items-center justify-between gap-4">
            <span class="title-font text-foreground text-2xl font-medium">
              <Skeleton class="bg-muted-foreground h-5 w-36" />
            </span>

            <Button variant="success" disabled>
              Add to cart
              <ShoppingBasket class="ms-2 h-6 w-6" />
            </Button>
          </div>
        </div>
        <Skeleton class="bg-muted-foreground h-96 w-1/2" />
      </div>

      <div v-else-if="error" class="mx-auto flex flex-wrap">
        <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
          <h2 class="title-font text-muted-foreground text-sm tracking-widest">
            An error occurred
          </h2>
        </div>
      </div>

      <div v-else-if="!product" class="mx-auto flex flex-wrap">
        <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
          <h2 class="title-font text-muted-foreground text-sm tracking-widest">
            Product not found
          </h2>
        </div>
      </div>

      <div v-else class="mx-auto flex flex-wrap">
        <div class="mb-6 w-full lg:mb-0 lg:w-1/2 lg:py-6 lg:pr-10">
          <h2
            class="title-font text-muted-foreground-foreground text-sm tracking-widest"
          >
            {{ product.category }}
          </h2>
          <h1 class="title-font text-foreground mb-4 text-3xl font-medium">
            {{ product.title }}
          </h1>
          <div class="mb-4 flex">
            <Tabs default-value="description" class="w-full">
              <TabsList class="w-full">
                <TabsTrigger
                  value="description"
                  class="data-[state=active]:border-success data-[state=active]:text-success border-muted-foreground/60 flex-grow border-b-2 px-1 py-2 text-lg"
                  >Description</TabsTrigger
                >
                <TabsTrigger
                  value="reviews"
                  class="data-[state=active]:border-success data-[state=active]:text-success border-muted-foreground/60 flex-grow border-b-2 px-1 py-2 text-lg"
                  >Reviews</TabsTrigger
                >
                <TabsTrigger
                  value="details"
                  class="data-[state=active]:border-success data-[state=active]:text-success border-muted-foreground/60 flex-grow border-b-2 px-1 py-2 text-lg"
                  >Details</TabsTrigger
                >
              </TabsList>
              <TabsContent class="min-h-[20vh]" value="description">
                {{ product.description }}
              </TabsContent>
              <TabsContent class="min-h-[20vh]" value="reviews">
                REVIEWS Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odit dolorem sunt laborum deleniti blanditiis nobis esse saepe
                cumque provident, veniam quaerat odio voluptatem non pariatur.
                Laborum velit nihil nostrum et?
              </TabsContent>
              <TabsContent class="min-h-[20vh]" value="details">
                DETAILS Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odit dolorem sunt laborum deleniti blanditiis nobis esse saepe
                cumque provident, veniam quaerat odio voluptatem non pariatur.
                Laborum velit nihil nostrum et?
              </TabsContent>
            </Tabs>
          </div>

          <div class="border-muted-foreground/20 flex border-t py-2">
            <span class="text-muted-foreground">Color</span>
            <span class="text-foreground ml-auto">Blue</span>
          </div>
          <div class="border-muted-foreground/20 flex border-t py-2">
            <span class="text-muted-foreground">Size</span>
            <span class="text-foreground ml-auto">Medium</span>
          </div>
          <div
            class="border-muted-foreground/20 mb-6 flex border-b border-t py-2"
          >
            <span class="text-muted-foreground">Quantity</span>
            <span class="text-foreground ml-auto">4</span>
          </div>
          <div class="flex items-center justify-between gap-4">
            <span class="title-font text-foreground text-2xl font-medium">
              {{ product.price }} $
            </span>
            <form
              @submit="submitHandler"
              class="flex items-center justify-normal gap-2"
            >
              <SelectRoot v-model="selectedQuantity" default-value="1">
                <SelectTrigger class="w-[80px]">
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Quantity</SelectLabel>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectRoot>

              <Button variant="success">
                Add to cart
                <ShoppingBasket class="ms-2 h-6 w-6" />
              </Button>
            </form>
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
import { ArrowLeft, ShoppingBasket } from 'lucide-vue-next'
import Skeleton from '~/components/skeleton.vue'
import Button from '~/components/button.vue'
import { toast } from 'vue-sonner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/tabs'

const selectedQuantity = ref('1')

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

import { useCartStore } from '../../stores/cart-store'
const store = useCartStore()
const { addToCart } = store

const addToCartHandler = (qta: string) => {
  if (!product.value) return

  const quantity = parseInt(qta)

  if (isNaN(quantity)) {
    toast.error('Invalid quantity')
    return
  }

  addToCart({ ...product.value, quantity })
  toast.success('Added to cart!')
}

const submitHandler = (event: Event) => {
  event.preventDefault()
  addToCartHandler(selectedQuantity.value)
}
</script>

<style scoped></style>
