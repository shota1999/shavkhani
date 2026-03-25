'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export function Categories() {
  const { copy } = useLanguage()

  const categories = [
    {
      name: copy.categories.knivesName,
      href: '#knives',
      description: copy.categories.knivesDescription,
      image: '/images/category-knives.jpg',
    },
    {
      name: copy.categories.walletsName,
      href: '#wallets',
      description: copy.categories.walletsDescription,
      image: '/images/category-wallets.jpg',
    },
    {
      name: copy.categories.sheathsName,
      href: '#sheaths',
      description: copy.categories.sheathsDescription,
      image: '/images/category-sheaths.jpg',
    },
  ]

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-[0.1em] text-foreground sm:text-4xl uppercase">
            {copy.categories.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {copy.categories.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold tracking-wide text-foreground uppercase">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
