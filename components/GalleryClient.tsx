'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/data'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', alt: 'Professional deep cleaning kitchen Pennsylvania' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', alt: 'Move-out cleaning spotless bathroom Buffalo NY' },
  { src: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80', alt: 'Recurring house cleaning living room Rochester NY' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', alt: 'Move-in cleaning empty home Syracuse NY' },
  { src: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80', alt: 'Tile grout deep cleaning Harrisburg PA' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Kitchen after deep clean Airbnb turnover Scranton PA' },
  { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', alt: 'Professional house cleaning service Pennsylvania team' },
  { src: 'https://images.unsplash.com/photo-1527515637462-cff94ebb575a?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1527515637462-cff94ebb575a?w=600&q=80', alt: 'Carpet vacuuming recurring cleaning service Erie PA' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80', alt: 'Bathroom deep clean spotless tiles Altoona PA' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80', alt: 'Modern kitchen standard cleaning State College PA' },
  { src: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=80', alt: 'Bedroom cleaning move-in service Williamsport PA' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: 'Professional cleaning supplies commercial service Rochester NY' },
]

export default function GalleryClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const prev = () => setLightboxIndex((i) => (i === null || i === 0 ? galleryImages.length - 1 : i - 1))
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length))

  return (
    <>
      {/* ── GALLERY GRID ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(index)}
                className="group aspect-square rounded-xl overflow-hidden relative focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                aria-label={`View: ${img.alt}`}
              >
                <Image
                  src={img.thumb}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-300 rounded-xl" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-20">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Want your home to look like this?</h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">Get your free quote today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary py-4 px-10 text-base">Get Your Free Quote</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn-outline-white py-4 px-10 text-base">
              <Phone className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
          <button onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors" aria-label="Close lightbox">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors" aria-label="Previous image">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="object-contain w-full max-h-[85vh] rounded-lg"
              priority
            />
            <p className="text-white/60 text-sm text-center mt-3">
              {lightboxIndex + 1} / {galleryImages.length} · {galleryImages[lightboxIndex].alt}
            </p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors" aria-label="Next image">
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </>
  )
}
