<script setup lang="ts">
import {
  SelectRoot,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from './select'
import { PaintbrushIcon } from 'lucide-vue-next'
import { useThemeStore, themes, type Theme } from '@/stores/theme-store'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()

const { current_theme } = storeToRefs(themeStore)
const { setTheme } = themeStore

const selectedTheme = computed({
  get: () => themeStore.current_theme,
  set: (value: string) => setTheme(value as Theme),
})
</script>

<template>
  <SelectRoot v-model="selectedTheme">
    <SelectTrigger
      class="w-min border-none ring-0 [&>.select-chevron-icon]:hidden"
    >
      <Button variant="ghost" size="sm">
        <span class="sr-only">theme</span>
        <PaintbrushIcon class="size-6" />
      </Button>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>({{ current_theme }}) Themes:</SelectLabel>
        <SelectItem
          v-for="theme in themes"
          :key="theme"
          :value="theme"
          :selected="theme === current_theme"
        >
          {{ theme }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>
