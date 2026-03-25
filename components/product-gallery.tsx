'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import { getLocalizedText, type LocalizedText } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  images: string[]
  productName: LocalizedText
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { language, copy } = useLanguage()
  const localizedProductName = getLocalizedText(productName, language)

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={images[selectedIndex]}
          alt={`${localizedProductName} - ${copy.product.image} ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={cn(
                'relative size-20 overflow-hidden rounded-md bg-muted transition-all',
                selectedIndex === index ? 'ring-2 ring-secondary ring-offset-2' : 'opacity-70 hover:opacity-100'
              )}
            >
              <Image
                src={image}
                alt={`${localizedProductName} - ${copy.product.thumbnail} ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
