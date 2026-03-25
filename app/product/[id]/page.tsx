import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ProductGallery } from '@/components/product-gallery'
import { ProductGrid } from '@/components/product-grid'
import { ProductInfo } from '@/components/product-info'
import { getProductById, products } from '@/lib/products'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: 'პროდუქტი ვერ მოიძებნა | SHAVKHANI',
    }
  }

  return {
    title: `${product.name.ka} | SHAVKHANI`,
    description: product.description.ka,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ProductGallery images={product.images} productName={product.name} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      <ProductGrid
        title={{ ka: 'შეიძლება ესეც დაგაინტერესოთ', en: 'You May Also Like' }}
        description={{
          ka: 'დაათვალიერეთ ჩვენი კოლექციის სხვა ხელნაკეთი ნამუშევრები',
          en: 'Explore more handcrafted pieces from our collection',
        }}
        category={product.category}
      />
    </>
  )
}
