'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { formatPrice, getLocalizedText } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { language, copy } = useLanguage()

  const handleAddToCart = (e: React.MouseEvent) => {
    if (product.price === null) {
      return
    }

    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const productName = getLocalizedText(product.name, language)
  const productPrice = product.price === null ? copy.product.priceOnRequest : formatPrice(product.price, language)

  return (
    <Link href={`/product/${product.id}`} className="group flex h-full flex-col">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-card">
        <Image
          src={product.images[0]}
          alt={productName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="min-h-12 flex-1 text-sm font-medium tracking-wide text-foreground transition-colors group-hover:text-muted-foreground">
            {productName}
          </h3>
          <p className="shrink-0 whitespace-nowrap text-right text-sm font-medium text-muted-foreground">
            {productPrice}
          </p>
        </div>
        {product.price === null ? (
          <div className="mt-auto flex h-9 items-center justify-center rounded-md border border-border px-3 text-center text-xs font-medium tracking-wide uppercase text-muted-foreground">
            {copy.product.details}
          </div>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="mt-auto w-full tracking-wide uppercase text-xs"
            onClick={handleAddToCart}
          >
            {copy.product.addToCart}
          </Button>
        )}
      </div>
    </Link>
  )
}
