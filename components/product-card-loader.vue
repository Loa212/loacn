<template>
  <div
    class="w-full cursor-pointer rounded-lg bg-gray-100 p-4 shadow-sm hover:bg-gray-200"
  >
    <div
      class="relative block h-48 animate-pulse overflow-hidden rounded-md bg-gray-300 ring-1 ring-gray-200/20"
    ></div>
    <div class="mt-4">
      <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">
        <Skeleton class="h-3 w-20 bg-gray-400" />
      </h3>
      <h2 class="title-font text-lg font-medium text-gray-900 lg:truncate">
        <Skeleton class="h-4 w-28 bg-gray-500" />
      </h2>
      <p class="mt-1">
        <Skeleton class="h-3 w-16 bg-gray-400" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
