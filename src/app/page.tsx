'use client'

import { useState } from 'react'
import { Pagination } from '@/components/pagination'
import { ProductCard } from '@/components/product/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useProducts } from '@/hooks/useProducts'

export default function HomePage() {
  const [page, setPage] = useState(1)
  const limit = 6
  const offset = (page - 1) * limit

  const { data: products, isLoading, isError, isFetching } = useProducts(limit, offset)

  const totalCount = products?.total || 0
  const totalPages = Math.ceil(totalCount / limit)

  if (isLoading) {
    return (
      <div className={`
        grid grid-cols-1 gap-4 p-4
        md:grid-cols-3
      `}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-60 w-full rounded-xl" />
        ))}
      </div>
    )
  }

  if (isError) {
    return <div className="p-4 text-red-500">Failed to load products.</div>
  }

  return (
    <div className="space-y-6 p-4">
      <div className={`
        grid grid-cols-1 gap-4
        md:grid-cols-3
      `}
      >
        {products?.items?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        isFetching={isFetching}
        onChange={setPage}
      />
    </div>
  )
}
