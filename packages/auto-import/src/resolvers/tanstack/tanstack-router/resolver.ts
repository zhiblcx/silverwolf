import type { Resolver } from 'unplugin-auto-import/types'

import { tanstackRouterBuiltInAPI } from './preset'
export const tanstackRouterResolver = (type: string): Resolver => ({
  type: 'component',
  resolve: (name: string) => {
    if (tanstackRouterBuiltInAPI.includes(name)) {
      let from = '@tanstack/react-router'
      switch (type) {
        case "vue":
          from = "@tanstack/vue-router"
          break;
      }
      return { name, from }

    }
    return undefined
  }
})
