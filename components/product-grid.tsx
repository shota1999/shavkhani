'use client'

import { ProductCard } from '@/components/product-card'
import { useLanguage } from '@/lib/language-context'
import { getLocalizedText, type LocalizedText } from '@/lib/i18n'
import { products, type Product } from '@/lib/products'

interface ProductGridProps {
  title: LocalizedText
  description?: LocalizedText
  category?: Product['category']
  featured?: boolean
  id?: string
}

export function ProductGrid({ title, description, category, featured, id }: ProductGridProps) {
  const { language } = useLanguage()

  let filteredProducts = products

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  if (featured) {
    filteredProducts = filteredProducts.filter((product) => product.featured)
  }

  return (
    <section id={id} className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {getLocalizedText(title, language)}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {getLocalizedText(description, language)}
            </p>
          )}
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
