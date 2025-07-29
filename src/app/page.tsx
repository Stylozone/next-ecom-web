'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useProducts } from '@/hooks/useProducts'

export default function HomePage() {
  const page = 1
  const limit = 6
  const offset = (page - 1) * limit
  const { data: products, isLoading, isError } = useProducts(limit, offset)

  if (isLoading) {
    return (
      <div className={`
        grid grid-cols-1 gap-4 p-4
        md:grid-cols-3
      `}
      >
        {[...Array.from({ length: limit })].map((_, i) => (
          <Skeleton key={i} className="h-40 w-full rounded-xl" />
        ))}
      </div>
    )
  }

  if (isError) {
    return <div className="p-4 text-red-500">Failed to load products.</div>
  }

  return (
    <div className={`
      grid grid-cols-1 gap-4 p-4
      md:grid-cols-3
    `}
    >
      {products?.items?.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={product.image_url.Valid ? product.image_url.String : ''}
              alt={product.name}
              className="mb-2 h-40 w-full rounded-lg object-cover"
            />
            <p className="text-muted-foreground mb-2 text-sm">
              {product.description.Valid ? product.description.String : ''}
            </p>
            <p className="font-semibold">
              ฿
              {(product.price / 100).toFixed(2)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
