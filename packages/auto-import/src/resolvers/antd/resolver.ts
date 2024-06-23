import type { Resolver } from 'unplugin-auto-import/types'

import { antdBuiltInAPI } from './preset'
export const antdResolver = (): Resolver => ({
  type: 'component',
  resolve: (name: string) => {
    if (antdBuiltInAPI.includes(name)) {
      return {
        name,
        from: 'antd'
      }
    }
    return undefined
  }
})
