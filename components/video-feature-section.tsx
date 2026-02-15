'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export function VideoFeatureSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Feature Card */}
        <div className="w-full rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 p-6 sm:p-8 lg:p-12 overflow-hidden animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column - Video */}
            <div
              className="flex justify-center items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full max-w-sm aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer bg-foreground/5">
                {/* Video Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 relative flex items-center justify-center">
                  {/* Mock video thumbnail with person */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/40 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <span className="text-white text-2xl sm:text-4xl font-bold">▶</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                    <div className="text-white font-bold text-xs sm:text-sm">BRAD WEGMANN</div>
                    <div className="text-white/80 text-xs">Chief Commercial Officer</div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button className={`w-16 sm:w-20 h-16 sm:h-20 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-all duration-300 transform ${isHovered ? 'scale-110' : 'scale-100'} shadow-lg`}>
                      <Play size={28} className="fill-foreground text-foreground ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 animate-fade-in-up">
              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground text-balance">
                What really sets Hibu apart
              </h3>

              {/* Intro Text */}
              <p className="text-sm sm:text-base text-muted-foreground">
                See everything <span className="font-semibold text-foreground">Brad Wegmann, Hibu's Chief Commercial Officer,</span> says about the Hibu difference:
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-accent pl-4 sm:pl-6 py-2">
                <p className="text-base sm:text-lg text-foreground italic font-medium">
                  "We deliver better results by having a <span className="font-bold">complete and diversified digital marketing program</span> that allows small businesses to <span className="font-bold">be found everywhere consumers are searching and engaging.</span>"
                </p>
              </blockquote>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary text-primary font-bold text-sm sm:text-base rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation">
                  Learn about Hibu One
                </button>
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-bold text-sm sm:text-base rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl touch-manipulation">
                  Request a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
