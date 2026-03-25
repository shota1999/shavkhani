'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'

export function CheckoutForm() {
  const router = useRouter()
  const { clearCart } = useCart()
  const { copy } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    clearCart()
    router.push('/order-confirmation')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-foreground">{copy.checkout.contactInformation}</h2>
        <FieldGroup className="mt-4">
          <Field>
            <FieldLabel htmlFor="email">{copy.checkout.email}</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={copy.checkout.emailPlaceholder}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">{copy.checkout.phone}</FieldLabel>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder={copy.checkout.phonePlaceholder}
            />
          </Field>
        </FieldGroup>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground">{copy.checkout.shippingAddress}</h2>
        <FieldGroup className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="firstName">{copy.checkout.firstName}</FieldLabel>
              <Input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">{copy.checkout.lastName}</FieldLabel>
              <Input id="lastName" name="lastName" type="text" autoComplete="family-name" required />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="address">{copy.checkout.address}</FieldLabel>
            <Input
              id="address"
              name="address"
              type="text"
              autoComplete="street-address"
              required
              placeholder={copy.checkout.addressPlaceholder}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="apartment">{copy.checkout.apartment}</FieldLabel>
            <Input
              id="apartment"
              name="apartment"
              type="text"
              autoComplete="address-line2"
              placeholder={copy.checkout.apartmentPlaceholder}
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-3">
            <Field>
              <FieldLabel htmlFor="city">{copy.checkout.city}</FieldLabel>
              <Input id="city" name="city" type="text" autoComplete="address-level2" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="state">{copy.checkout.state}</FieldLabel>
              <Input id="state" name="state" type="text" autoComplete="address-level1" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">{copy.checkout.zip}</FieldLabel>
              <Input id="zip" name="zip" type="text" autoComplete="postal-code" required />
            </Field>
          </div>
        </FieldGroup>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner className="size-4" />
            {copy.checkout.processing}
          </>
        ) : (
          copy.checkout.placeOrder
        )}
      </Button>
    </form>
  )
}
