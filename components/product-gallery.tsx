'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useLanguage } from '@/lib/language-context'
import { getLocalizedText, type LocalizedText } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  images: string[]
  productName: LocalizedText
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { language, copy } = useLanguage()
  const localizedProductName = getLocalizedText(productName, language)
  const selectedImage = images[selectedIndex]
  const selectedImageAlt = `${localizedProductName} - ${copy.product.image} ${selectedIndex + 1}`
  const showNavigation = images.length > 1

  const handlePreviousImage = () => {
    setSelectedIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1))
  }

  const handleNextImage = () => {
    setSelectedIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1))
  }

  useEffect(() => {
    if (!showNavigation) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        handlePreviousImage()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        handleNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showNavigation, images.length])

  return (
    <div className="flex flex-col gap-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="group relative">
          <DialogTrigger asChild>
            <button
              type="button"
              className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted text-left transition-all duration-300 hover:opacity-95"
              aria-label={selectedImageAlt}
            >
              <Image
                src={selectedImage}
                alt={selectedImageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 py-3 text-sm font-medium text-white">
                {copy.product.image}
              </div>
            </button>
          </DialogTrigger>
          {showNavigation && (
            <>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                onClick={handlePreviousImage}
                className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 text-white opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-black/80"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                onClick={handleNextImage}
                className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 text-white opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-black/80"
                aria-label="Next image"
              >
                <ChevronRight className="size-5" />
              </Button>
            </>
          )}
        </div>
        <DialogContent
          className="!fixed !inset-0 !grid !w-screen !max-w-none !translate-x-0 !translate-y-0 !place-items-center !border-none !bg-transparent !p-4 !shadow-none sm:!p-6"
          showCloseButton={false}
        >
          <DialogClose asChild>
            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="absolute top-6 right-6 z-10 rounded-full border border-white/15 bg-black/60 text-white hover:bg-black/80"
            >
              <X className="size-4" />
              <span className="sr-only">Close image</span>
            </Button>
          </DialogClose>
          <div className="relative flex w-[min(92vw,1200px)] flex-col gap-4 rounded-2xl border border-white/10 bg-black/55 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-4">
            <div className="relative h-[min(72vh,820px)] w-full overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(0,0,0,0.92))]">
              <Image
                src={selectedImage}
                alt={selectedImageAlt}
                fill
                className="object-contain p-4 sm:p-6"
                sizes="100vw"
              />
            </div>
            {showNavigation && (
              <>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={handlePreviousImage}
                  className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 text-white hover:bg-black/80 sm:left-6"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 text-white hover:bg-black/80 sm:right-6"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </Button>
              </>
            )}
            {showNavigation && (
              <div className="flex justify-center gap-3 overflow-x-auto px-1 pb-1">
                {images.map((image, index) => (
                  <button
                    key={`modal-thumbnail-${index}`}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={cn(
                      'relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-all sm:h-20 sm:w-20',
                      selectedIndex === index ? 'ring-2 ring-white/80 ring-offset-2 ring-offset-black/40' : 'opacity-70 hover:opacity-100'
                    )}
                    aria-label={`${localizedProductName} - ${copy.product.thumbnail} ${index + 1}`}
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
        </DialogContent>
      </Dialog>

      {images.length > 1 && (
        <div className="flex flex-wrap gap-3">
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
