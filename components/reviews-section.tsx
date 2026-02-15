'use client'

import { ReviewCard } from '@/components/review-card'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const reviews = [
  {
    clientName: 'Scott Reilly',
    clientTitle: 'Owner',
    quote: 'Hibu maximizes my results. I\'ve put little effort I put into it [digital marketing] and I\'ve got huge results.',
    thumbnailColor: 'from-blue-600 to-blue-800',
  },
  {
    clientName: 'Sophia White',
    clientTitle: 'Social Media Director',
    quote: 'Hibu immediately put Cottrell Brothers on the map.',
    thumbnailColor: 'from-slate-600 to-slate-800',
  },
  {
    clientName: 'Marc Dwyer',
    clientTitle: 'Attorney at Law',
    quote: 'It is crucial... as an Attorney to be accountable. Hibu\'s measurable results, clearly visible on my Dashboard, can be seen and tracked month after month. That\'s accountability.',
    thumbnailColor: 'from-blue-700 to-slate-800',
  },
]

export function ReviewsSection() {
  const [ctaHovered, setCtaHovered] = useState(false)

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground text-balance">
            Real reviews from real local business clients
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              clientName={review.clientName}
              clientTitle={review.clientTitle}
              quote={review.quote}
              thumbnailColor={review.thumbnailColor}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground font-bold text-sm sm:text-base rounded-full hover:bg-primary/90 active:bg-primary/75 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group touch-manipulation"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Watch more success stories
              <ArrowRight
                size={18}
                className={`transition-all duration-300 flex-shrink-0 ${
                  ctaHovered ? 'translate-x-1' : 'translate-x-0'
                }`}
              />
            </span>
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
