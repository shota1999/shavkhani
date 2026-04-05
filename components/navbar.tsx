'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const { totalItems, setIsOpen } = useCart()
  const { language, setLanguage, copy } = useLanguage()

  const navigation =
    language === 'ka'
      ? [
          { name: 'მთავარი', href: '/' },
          { name: 'ჩვენს შესახებ', href: '/#about' },
          { name: 'ხელნაკეთი დანები', href: '/#knives' },
          { name: 'ტყავის აქსესუარები', href: '/#wallets' },
          { name: 'კონტაქტი', href: '#contact' },
        ]
      : [
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/#about' },
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

        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button type="button" variant="ghost" size="icon" className="text-foreground">
                <Menu className="size-6" />
                <span className="sr-only">{copy.navbar.openMenu}</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full max-w-[22rem] border-l border-border bg-card p-0">
              <div className="flex h-full flex-col">
                <div className="flex-1 overflow-y-auto px-5 pb-5 pt-14">
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      type="button"
                      variant={language === 'ka' ? 'default' : 'outline'}
                      size="sm"
                      className="h-11 rounded-xl border-border"
                      onClick={() => setLanguage('ka')}
                    >
                      ქართული
                    </Button>
                    <Button
                      type="button"
                      variant={language === 'en' ? 'default' : 'outline'}
                      size="sm"
                      className="h-11 rounded-xl border-border"
                      onClick={() => setLanguage('en')}
                    >
                      English
                    </Button>
                  </div>

                  <div className="mt-8">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="block border-b border-border/70 py-4 text-[17px] font-medium tracking-[0.04em] text-foreground transition-colors hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border p-5">
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      className="h-12 w-full justify-start gap-2 rounded-xl border-border"
                      onClick={() => setIsOpen(true)}
                    >
                      <ShoppingBag className="size-5" />
                      {copy.navbar.cart} {totalItems > 0 && `(${totalItems})`}
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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
    </header>
  )
}
