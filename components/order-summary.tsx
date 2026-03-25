'use client'

import Image from 'next/image'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { formatPrice, getLocalizedText } from '@/lib/i18n'

export function OrderSummary() {
  const { items, totalPrice } = useCart()
  const { language, copy } = useLanguage()

  const shipping = 0
  const tax = totalPrice * 0.08
  const total = totalPrice + shipping + tax

  return (
    <div className="rounded-lg border border-border bg-muted/30 p-6">
      <h2 className="text-lg font-semibold text-foreground">{copy.orderSummary.title}</h2>

      <ul className="mt-6 divide-y divide-border">
        {items.map((item) => (
          <li key={item.product.id} className="flex gap-4 py-4">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-muted">
              <Image
                src={item.product.images[0]}
                alt={getLocalizedText(item.product.name, language)}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex justify-between gap-4">
                <h3 className="text-sm font-medium text-foreground">
                  {getLocalizedText(item.product.name, language)}
                </h3>
                <p className="text-sm font-medium text-foreground">
                  {formatPrice((item.product.price ?? 0) * item.quantity, language, true)}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {copy.orderSummary.quantity}: {item.quantity}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted-foreground">{copy.orderSummary.subtotal}</dt>
          <dd className="font-medium text-foreground">{formatPrice(totalPrice, language, true)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">{copy.orderSummary.shipping}</dt>
          <dd className="font-medium text-foreground">
            {shipping === 0 ? copy.orderSummary.free : formatPrice(shipping, language, true)}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">{copy.orderSummary.tax}</dt>
          <dd className="font-medium text-foreground">{formatPrice(tax, language, true)}</dd>
        </div>
        <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
          <dt className="text-foreground">{copy.orderSummary.total}</dt>
          <dd className="text-foreground">{formatPrice(total, language, true)}</dd>
        </div>
      </dl>
    </div>
  )
}
