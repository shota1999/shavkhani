'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const { language, setLanguage, copy } = useLanguage()

  const navigation = [
    { name: copy.navbar.shop, href: '/#products' },
    { name: copy.navbar.knives, href: '/#knives' },
    { name: copy.navbar.wallets, href: '/#wallets' },
    { name: copy.navbar.sheaths, href: '/#sheaths' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="SHAVKHANI"
              width={40}
              height={40}
              className="size-10"
            />
            <span className="text-lg font-semibold tracking-[0.2em] text-foreground uppercase">
              Shavkhani
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{copy.navbar.openMenu}</span>
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground uppercase"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="SHAVKHANI"
                  width={36}
                  height={36}
                  className="size-9"
                />
                <span className="text-lg font-semibold tracking-[0.2em] text-foreground uppercase">
                  Shavkhani
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">{copy.navbar.closeMenu}</span>
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <div className="flex gap-2 px-3 pb-4">
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
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium tracking-wide text-foreground hover:bg-muted uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setIsOpen(true)
                    }}
                  >
                    <ShoppingBag className="size-5" />
                    {copy.navbar.cart} {totalItems > 0 && `(${totalItems})`}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
