'use client'

import { VideoPreviewCard } from './video-preview-card'
import { CTAButtons } from './cta-buttons'

export function HeroSection() {
  return (
    <section className="relative w-full py-8 sm:py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 animate-fade-in order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-balance leading-tight sm:leading-snug text-foreground">
              A simpler, smarter, more effective way to market your business
            </h1>

            {/* Subheading */}
            <div className="space-y-1 sm:space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                You run your business.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                Let Hibu run your digital marketing.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              With our Hibu One platform, all your digital marketing is built, integrated, synchronized and optimized on{' '}
              <span className="font-bold text-foreground">One Platform</span> from{' '}
              <span className="font-bold text-foreground">One Provider</span>
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-4">
              <CTAButtons />
            </div>
          </div>

          {/* Right content - Video Card */}
          <div className="flex justify-center items-center animate-fade-in-up order-1 lg:order-2 min-h-96 sm:min-h-auto">
            <VideoPreviewCard />
          </div>
        </div>
      </div>
    </section>
  )
}
