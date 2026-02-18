'use client'

import { motion } from 'framer-motion'
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
    <section className="w-full py-14 sm:py-18 md:py-26 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-14 sm:mb-18 md:mb-22"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground text-balance">
            Real reviews from real local business clients
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-14 sm:mb-18 md:mb-22">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              clientName={review.clientName}
              clientTitle={review.clientTitle}
              quote={review.quote}
              thumbnailColor={review.thumbnailColor}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            className="btn-glow px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground font-bold text-sm sm:text-base rounded-full hover:bg-primary/90 active:bg-primary/75 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 relative overflow-hidden group touch-manipulation"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Watch more success stories
              <ArrowRight
                size={18}
                className={`transition-all duration-300 flex-shrink-0 ${ctaHovered ? 'translate-x-1' : 'translate-x-0'
                  }`}
              />
            </span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
