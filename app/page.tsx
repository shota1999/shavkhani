import { Categories } from '@/components/categories'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductGrid
        id="products"
        title={{ ka: 'რჩეული ნამუშევრები', en: 'Featured Products' }}
        description={{ ka: 'ყველაზე მოთხოვნადი ხელნაკეთი პროდუქცია', en: 'Our most popular handcrafted pieces' }}
        featured
      />
      <ProductGrid
        id="knives"
        title={{ ka: 'დანები', en: 'Knives' }}
        description={{
          ka: 'ხელით დამუშავებული პირები გამორჩეული ჭრითა და კლასიკური ფორმით',
          en: 'Hand-finished blades with excellent cutting performance and timeless design',
        }}
        category="knives"
      />
      <ProductGrid
        id="wallets"
        title={{ ka: 'ტყავის საფულეები', en: 'Leather Wallets' }}
        description={{
          ka: 'ნატურალური ტყავის საფულეები, რომლებიც დროსთან ერთად იძენს ხასიათს',
          en: 'Full-grain leather wallets that develop character with age',
        }}
        category="wallets"
      />
      <ProductGrid
        id="sheaths"
        title={{ ka: 'ქარქაშები', en: 'Knife Sheaths' }}
        description={{
          ka: 'თქვენს დანებზე მორგებული საიმედო ქარქაშები',
          en: 'Custom-fit sheaths designed to protect your blades',
        }}
        category="sheaths"
      />
    </>
  )
}
