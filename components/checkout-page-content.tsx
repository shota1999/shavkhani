'use client'

import { useLanguage } from '@/lib/language-context'
import { CheckoutForm } from '@/components/checkout-form'
import { OrderSummary } from '@/components/order-summary'

export function CheckoutPageContent() {
  const { copy } = useLanguage()

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{copy.checkout.title}</h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <CheckoutForm />
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
