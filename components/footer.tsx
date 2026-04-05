'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { copy } = useLanguage()

  const navigation = {
    shop: [
      { name: copy.common.knives, href: '#knives' },
      { name: copy.common.wallets, href: '#wallets' },
      { name: copy.common.sheaths, href: '#sheaths' },
    ],
    company: [
      { name: copy.footer.about, href: '#about' },
      { name: copy.footer.contact, href: '#contact' },
      { name: copy.footer.shipping, href: '#shipping' },
    ],
    legal: [
      { name: copy.footer.privacy, href: '#privacy' },
      { name: copy.footer.terms, href: '#terms' },
      { name: copy.footer.returns, href: '#returns' },
    ],
  }

  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="SHAVKHANI"
                width={56}
                height={56}
                className="size-14"
              />
              <span
                className="text-[22px] leading-none tracking-[0.08em] text-foreground uppercase"
                style={{ fontFamily: 'var(--font-rubik-dirt)' }}
              >
                Shavkhani
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {copy.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">{copy.footer.shop}</h3>
            <ul className="mt-4 space-y-3">
              {navigation.shop.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">{copy.footer.company}</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">{copy.footer.legal}</h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SHAVKHANI. {copy.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
