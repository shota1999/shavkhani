'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { formatPrice, getLocalizedText } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice } = useCart()
  const { language, copy } = useLanguage()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>{copy.cart.title}</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <p className="text-muted-foreground">{copy.cart.empty}</p>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              {copy.cart.continueShopping}
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <li key={item.product.id} className="flex gap-4 py-4">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-muted">
                      <Image
                        src={item.product.images[0]}
                        alt={getLocalizedText(item.product.name, language)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-foreground">
                            {getLocalizedText(item.product.name, language)}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.product.price === null ? copy.product.priceOnRequest : formatPrice(item.product.price, language)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Trash2 className="size-4" />
                          <span className="sr-only">{copy.cart.remove}</span>
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon-sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="size-3" />
                          <span className="sr-only">{copy.product.decreaseQuantity}</span>
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon-sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="size-3" />
                          <span className="sr-only">{copy.product.increaseQuantity}</span>
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <SheetFooter className="border-t border-border pt-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between text-base font-medium">
                  <span>{copy.cart.subtotal}</span>
                  <span>{formatPrice(totalPrice, language, true)}</span>
                </div>
                <p className="text-sm text-muted-foreground">{copy.cart.shippingAndTaxes}</p>
                <Button asChild className="w-full" size="lg">
                  <Link href="/checkout" onClick={() => setIsOpen(false)}>
                    {copy.cart.checkout}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {copy.cart.continueShopping}
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
