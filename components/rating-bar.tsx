'use client'

import { Star, Phone } from 'lucide-react'

export function RatingBar() {
  return (
    <div className="w-full bg-background/90 backdrop-blur-md border-b border-border/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-2 sm:py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Rating Section */}
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-amber-400 text-amber-400 sm:w-4 sm:h-4 drop-shadow-sm"
                />
              ))}
              <Star
                size={14}
                className="fill-amber-300 text-amber-300 sm:w-4 sm:h-4 drop-shadow-sm"
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              4.4
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground hidden sm:inline">
              (2394 Ratings & Reviews)
            </span>
            <span className="text-xs sm:hidden text-muted-foreground">
              (2394)
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto order-1 sm:order-2 justify-end">
            <div className="hidden sm:flex items-center gap-2">
              <Phone size={15} className="text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-foreground tracking-tight">
                877.237.6120
              </span>
            </div>
            <button className="px-4 sm:px-5 py-1.5 sm:py-2 bg-primary text-primary-foreground rounded-full font-semibold text-xs sm:text-sm hover:bg-primary/90 active:bg-primary/75 transition-all duration-200 whitespace-nowrap flex-shrink-0 touch-manipulation shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30">
              Request a demo
            </button>
          </div>
        </div>

        {/* Mobile phone number */}
        <div className="flex items-center gap-1 sm:hidden pt-2">
          <Phone size={14} className="text-primary flex-shrink-0" />
          <span className="text-xs font-semibold text-foreground">
            877.237.6120
          </span>
        </div>
      </div>
    </div>
  )
}
