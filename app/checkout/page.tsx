import type { Metadata } from 'next'
import { CheckoutPageContent } from '@/components/checkout-page-content'

export const metadata: Metadata = {
  title: 'შეკვეთის გაფორმება | SHAVKHANI',
  description: 'დაასრულეთ შეკვეთა',
}

export default function CheckoutPage() {
  return <CheckoutPageContent />
}
