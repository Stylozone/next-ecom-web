import type { ProductResponse } from '@/types/product'
import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

export function useProducts(limit = 10, offset = 0) {
  return useQuery({
    queryKey: ['products', limit, offset],
    queryFn: async () => {
      const res = await api.get<ProductResponse>('/products/', {
        params: {
          limit,
          offset,
        },
      })
      return res.data
    },
  })
}
