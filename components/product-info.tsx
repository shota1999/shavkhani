'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { formatPrice, getLocalizedText } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/products'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { language, copy } = useLanguage()

  const handleAddToCart = () => {
    if (product.price === null) {
      return
    }

    addToCart(product, quantity)
    setQuantity(1)
  }

  const productName = getLocalizedText(product.name, language)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{productName}</h1>
        <p className="mt-2 text-2xl font-semibold text-foreground">
          {product.price === null ? copy.product.priceOnRequest : formatPrice(product.price, language)}
        </p>
      </div>

      <div>
        <h2 className="text-sm font-medium text-foreground">{copy.product.description}</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {getLocalizedText(product.description, language)}
        </p>
      </div>

      <div>
        <h2 className="text-sm font-medium text-foreground">{copy.product.materials}</h2>
        <ul className="mt-2 space-y-1">
          {product.materials.map((material, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              - {getLocalizedText(material, language)}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-medium text-foreground">{copy.product.specifications}</h2>
        <dl className="mt-2 divide-y divide-border">
          {product.specifications.map((specification) => (
            <div key={specification.label.en} className="flex justify-between gap-6 py-2 text-sm">
              <dt className="text-muted-foreground">{getLocalizedText(specification.label, language)}</dt>
              <dd className="text-right font-medium text-foreground">
                {getLocalizedText(specification.value, language)}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {product.price === null ? (
        <p className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          {copy.product.contactForOrder}
        </p>
      ) : (
        <>
          <div>
            <h2 className="text-sm font-medium text-foreground">{copy.product.quantity}</h2>
            <div className="mt-2 flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="size-4" />
                <span className="sr-only">{copy.product.decreaseQuantity}</span>
              </Button>
              <span className="w-12 text-center text-lg font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)}
              >
                <Plus className="size-4" />
                <span className="sr-only">{copy.product.increaseQuantity}</span>
              </Button>
            </div>
          </div>

          <Button size="lg" className="mt-2 w-full" onClick={handleAddToCart}>
            {copy.product.addToCart} - {formatPrice(product.price * quantity, language, true)}
          </Button>
        </>
      )}
    </div>
  )
}
