import { defineStore } from 'pinia'

export const themes = ['light', 'dark'] as const
export type Theme = (typeof themes)[number]

export const useThemeStore = defineStore('theme-store', {
  state: () => ({
    theme: 'light',
  }),
  getters: {
    current_theme: state => state.theme,
  },
  actions: {
    setTheme(theme: Theme) {
      this.theme = theme
    },
  },
})
