'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function OrderConfirmationContent() {
  const { copy } = useLanguage()

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary/20">
          <CheckCircle className="size-10 text-secondary" />
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
          {copy.orderConfirmation.title}
        </h1>

        <p className="mt-4 text-muted-foreground">{copy.orderConfirmation.description}</p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/">{copy.orderConfirmation.continueShopping}</Link>
          </Button>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          {copy.orderConfirmation.orderNumber}: #{Math.random().toString(36).substring(2, 10).toUpperCase()}
        </p>
      </div>
    </section>
  )
}
