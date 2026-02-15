'use client'

import { FeaturesGrid } from './features-grid'
import { CTAButtons } from './cta-buttons'

export function MarketingFeaturesSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Logo */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6 sm:mb-8">
            <span className="inline-block">
              <span className="font-black">hibu</span>
              <span className="ml-2 sm:ml-3 relative inline-block bg-primary text-primary-foreground px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-lg sm:text-2xl font-bold">
                ONE
              </span>
            </span>
          </h2>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance max-w-4xl mx-auto leading-tight sm:leading-snug md:leading-normal">
            All the marketing you need, all working together
          </h3>
        </div>

        {/* Features Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-fade-in">
          <FeaturesGrid />
        </div>

        {/* CTA Buttons */}
        <div className="text-center flex justify-center animate-fade-in-up">
          <CTAButtons />
        </div>
      </div>
    </section>
  )
}
