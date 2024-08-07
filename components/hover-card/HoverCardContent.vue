<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
  HoverCardContent,
  type HoverCardContentProps,
  HoverCardPortal,
  useForwardProps,
} from 'radix-vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<HoverCardContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    sideOffset: 4,
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

import { useThemeStore } from '@/stores/theme-store'

const theme = useThemeStore()
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="forwardedProps"
      :class="
        cn(
          theme.current_theme,
          'z-50 min-w-64 max-w-[100vw] rounded-md border border-muted-foreground bg-background p-4 text-green-500 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 lg:max-w-[30vw]',
          props.class,
        )
      "
    >
      {{ theme.current_theme }}
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>
