import type { Metadata } from 'next'
import { OrderConfirmationContent } from '@/components/order-confirmation-content'

export const metadata: Metadata = {
  title: 'შეკვეთა მიღებულია | SHAVKHANI',
  description: 'თქვენი შეკვეთა წარმატებით დაფიქსირდა',
}

export default function OrderConfirmationPage() {
  return <OrderConfirmationContent />
}
