'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src="/images/hero-forge.png"
        alt="About SHAVKHANI"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
            {language === 'ka' ? 'ჩვენს შესახებ' : 'About Us'}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-[0.08em] text-foreground sm:text-5xl uppercase">
            SHAVKHANI
          </h1>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            {language === 'ka'
              ? 'ჩვენს შესახებ გვერდი შეგიძლიათ გამოიყენოთ კომპანიის, სახელოსნოს ან ბრენდის ისტორიისა და ინფორმაციის გამოსატანად.'
              : 'Use this page to present your company, workshop, or brand story and background.'}
          </p>
        </div>
      </div>
    </section>
  )
}
