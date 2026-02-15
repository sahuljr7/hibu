'use client'

import { FeatureBullets } from './feature-bullets'
import { DashboardMockup } from './dashboard-mockup'
import { CTAButtons } from './cta-buttons'

export function GrowthSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Grow your business with Hibu One
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hibu's expertise and technology drive lower lead costs and higher marketing ROI
          </p>
        </div>

        {/* Feature Card */}
        <div className="animate-fade-in-up max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 p-6 sm:p-8 md:p-12 items-center">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-2 lg:order-1">
                {/* Title */}
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 sm:mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                      Hibu One
                    </span>
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  Hibu One brings the sophistication, coordination and effectiveness of enterprise-level digital marketing to your local business.
                </p>

                {/* Feature Bullets */}
                <div className="pt-2 sm:pt-4">
                  <FeatureBullets />
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-emerald-400 text-emerald-400 font-bold text-sm sm:text-base rounded-full hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group touch-manipulation">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Learn about Hibu One
                    </span>
                    <div className="absolute inset-0 bg-emerald-400/20 group-hover:bg-emerald-400 transition-all duration-300" />
                  </button>
                  <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-sm sm:text-base rounded-full hover:from-primary/90 hover:to-primary/80 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl relative overflow-hidden group touch-manipulation">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Request a demo
                    </span>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300" />
                  </button>
                </div>
              </div>

              {/* Right Column - Dashboard Mockup */}
              <div className="flex justify-center items-center order-1 lg:order-2">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
