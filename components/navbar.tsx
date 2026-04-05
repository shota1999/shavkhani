'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { totalItems, setIsOpen } = useCart()
  const { language, setLanguage, copy } = useLanguage()

  const navigation =
    language === 'ka'
      ? [
          { name: 'მთავარი', href: '/' },
          { name: 'ხელნაკეთი დანები', href: '/#knives' },
          { name: 'ტყავის აქსესუარები', href: '/#wallets' },
          { name: 'კონტაქტი', href: '#contact' },
        ]
      : [
          { name: 'Home', href: '/' },
          { name: 'Handmade Knives', href: '/#knives' },
          { name: 'Leather Accessories', href: '/#wallets' },
          { name: 'Contact', href: '#contact' },
        ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center gap-3 p-1.5">
            <Image
              src="/images/logo.png"
              alt="SHAVKHANI"
              width={48}
              height={48}
              className="size-12"
            />
            <span className="text-lg font-semibold tracking-[0.2em] text-foreground uppercase">
              Shavkhani
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-3">
          <div className="flex items-center rounded-full border border-border p-1">
            <button
              type="button"
              onClick={() => setLanguage('ka')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                language === 'ka' ? 'bg-foreground text-background' : 'text-muted-foreground'
              }`}
            >
              ქართული
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                language === 'en' ? 'bg-foreground text-background' : 'text-muted-foreground'
              }`}
            >
              English
            </button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                {totalItems}
              </span>
            )}
            <span className="sr-only">{copy.navbar.shoppingCart}</span>
          </Button>
        </div>
      </nav>

      <div className="border-t border-border lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="mb-3 flex items-center gap-2">
            <Button
              type="button"
              variant={language === 'ka' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('ka')}
            >
              ქართული
            </Button>
            <Button
              type="button"
              variant={language === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('en')}
            >
              English
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto gap-2"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="size-4" />
              {copy.navbar.cart} {totalItems > 0 && `(${totalItems})`}
            </Button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:bg-muted"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
