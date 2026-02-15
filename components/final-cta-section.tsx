'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function FinalCTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered content */}
        <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* Logo - hibu ONE */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
              hibu
            </h2>
            <div className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-blue-900">
                ONE
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white text-balance leading-tight">
            See how it can all work together for you
          </h3>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/80 text-balance leading-relaxed max-w-xl mx-auto">
            Save time, save effort and see real marketing results. It all starts with one demo to find out how Hibu One can do more for your marketing.
          </p>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6 lg:pt-8">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold text-base sm:text-lg rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl touch-manipulation relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Request a demo
                <ArrowRight
                  size={20}
                  className={`transition-all duration-300 flex-shrink-0 ${
                    isHovered ? 'translate-x-2' : 'translate-x-0'
                  }`}
                />
              </span>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Disclaimer Text - Below Section */}
      <div className="w-full bg-background/95 backdrop-blur border-t border-border py-6 sm:py-8 lg:py-10 mt-12 sm:mt-16 lg:mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            *Based on unique visitor data for Hibu websites with solutions. The comparisons and other information on this page should be considered directional only. Actual results will differ and will depend on a number of factors including business vertical, business geography, level of spend and length of campaign for Online Display, level of spend and length of campaign for Search Engine Marketing and other digital solutions employed. Source: Hibu first-party data.
          </p>
        </div>
      </div>
    </section>
  )
}
