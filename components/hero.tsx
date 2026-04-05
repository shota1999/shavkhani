'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function Hero() {
  const { copy } = useLanguage()

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-forge.png"
        alt="SHAVKHANI"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Image
          src="/images/logo.png"
          alt="SHAVKHANI"
          width={720}
          height={720}
          className="mx-auto mb-8 h-auto w-full max-w-[min(88vw,380px)] sm:max-w-[520px] lg:max-w-[672px]"
        />
        <h1 className="font-display text-balance text-4xl font-bold tracking-[0.08em] text-foreground drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl uppercase">
          Shavkhani
        </h1>
        <p className="mx-auto mt-4 text-lg tracking-[0.25em] text-muted-foreground uppercase">
          {copy.hero.tagline}
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {copy.hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="tracking-wide uppercase">
            <Link href="#products">{copy.hero.shopCollection}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="tracking-wide uppercase border-border text-foreground hover:bg-muted">
            <Link href="/about">{copy.hero.ourCraft}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
