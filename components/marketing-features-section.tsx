'use client'

import { motion } from 'framer-motion'
import { FeaturesGrid } from './features-grid'
import { CTAButtons } from './cta-buttons'

export function MarketingFeaturesSection() {
  return (
    <section className="relative w-full py-14 sm:py-18 md:py-26 lg:py-36 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Logo */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-18"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6 sm:mb-8">
            <span className="inline-block">
              <span className="font-black">hibu</span>
              <motion.span
                className="ml-2 sm:ml-3 relative inline-block bg-primary text-primary-foreground px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full text-lg sm:text-2xl font-bold shadow-md shadow-primary/20"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(160, 70, 235, 0.35)' }}
                transition={{ duration: 0.3 }}
              >
                ONE
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center mb-14 sm:mb-18 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance max-w-4xl mx-auto leading-tight sm:leading-snug md:leading-normal">
            All the marketing you need, all working together
          </h3>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-14 sm:mb-18 md:mb-24 lg:mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FeaturesGrid />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="text-center flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CTAButtons />
        </motion.div>
      </div>
    </section>
  )
}
