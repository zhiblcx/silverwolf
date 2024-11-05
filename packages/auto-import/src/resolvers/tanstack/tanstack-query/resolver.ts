import type { Resolver } from 'unplugin-auto-import/types'

import { tanstackQueryBuiltInAPI } from "./preset"
export const tanstackQueryResolver = (type: string): Resolver => ({
  type: 'component',
  resolve: (name: string) => {
    if (tanstackQueryBuiltInAPI.includes(name)) {
      let from = '@tanstack/react-query'
      switch (type) {
        case "vue":
          from = "@tanstack/vue-query"
          break;
      }
      return { name, from }

    }
    return undefined
  }
})
