<script setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { Toaster } from 'vue-sonner'
import Button from '~/components/button.vue'
import { ShoppingBasket } from 'lucide-vue-next'
</script>

<template>
  <div>
    <header class="body-font text-gray-600">
      <div
        class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row"
      >
        <a
          class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-10 w-10 rounded-full bg-green-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">LoaCN</span>
        </a>
        <nav
          class="flex flex-wrap items-center justify-center text-base md:ml-auto"
        >
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <Cart />
      </div>
    </header>
    <div class="container mx-auto p-5">
      <slot />
    </div>
    <Toaster />
    <VueQueryDevtools />
  </div>
</template>
