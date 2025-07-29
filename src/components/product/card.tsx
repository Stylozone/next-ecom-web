'use client'

import type { Product } from '@/types/product'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`} key={product.id}>
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
    </Link>
  )
}
