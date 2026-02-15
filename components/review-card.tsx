'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'

interface ReviewCardProps {
  clientName: string
  clientTitle: string
  quote: string
  thumbnailColor?: string
}

export function ReviewCard({ clientName, clientTitle, quote, thumbnailColor = 'from-blue-600 to-blue-800' }: ReviewCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      {/* Video Thumbnail Container */}
      <div
        className={`relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${thumbnailColor}`} />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
          {/* Top Section */}
          <div className="space-y-2">
            <p className="text-white font-bold text-sm">A Client</p>
            <p className="text-white font-bold text-sm">Success Story</p>
          </div>

          {/* Bottom Section with Client Badge */}
          <div className="flex items-end justify-between">
            <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xs">
              hibu
            </div>
            <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-foreground whitespace-nowrap">
              <p>{clientName}</p>
              <p className="text-muted-foreground text-xs">{clientTitle}</p>
            </div>
          </div>
        </div>

        {/* Play Button Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className={`relative flex items-center justify-center transition-all duration-300 active:scale-95 ${
              isHovered ? 'scale-125' : 'scale-100'
            }`}
          >
            <div className="absolute w-14 sm:w-16 h-14 sm:h-16 bg-accent/30 rounded-full animate-pulse" />
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors shadow-lg">
              <Play
                size={20}
                className="fill-foreground text-foreground ml-0.5 flex-shrink-0"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Quote Section */}
      <div className="px-1">
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          "{quote}"
        </p>
      </div>
    </div>
  )
}
