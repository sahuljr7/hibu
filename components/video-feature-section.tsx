'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export function VideoFeatureSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full py-14 sm:py-18 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Feature Card */}
        <motion.div
          className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/20 dark:via-green-950/15 dark:to-teal-950/20 p-6 sm:p-8 lg:p-14 overflow-hidden border border-emerald-100/50 dark:border-emerald-800/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Column - Video */}
            <motion.div
              className="flex justify-center items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-foreground/5 ring-1 ring-black/5 dark:ring-white/5">
                {/* Video Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 relative flex items-center justify-center">
                  {/* Mock video thumbnail with person */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/40 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                        <span className="text-white text-2xl sm:text-4xl font-bold">▶</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/15">
                    <div className="text-white font-bold text-xs sm:text-sm tracking-wide">BRAD WEGMANN</div>
                    <div className="text-white/75 text-xs">Chief Commercial Officer</div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button className={`w-16 sm:w-20 h-16 sm:h-20 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-all duration-300 transform ${isHovered ? 'scale-110' : 'scale-100'} shadow-lg shadow-accent/30`}>
                      <Play size={28} className="fill-foreground text-foreground ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              className="flex flex-col justify-center space-y-5 sm:space-y-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground text-balance">
                What really sets Hibu apart
              </h3>

              {/* Intro Text */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                See everything <span className="font-semibold text-foreground">Brad Wegmann, Hibu&apos;s Chief Commercial Officer,</span> says about the Hibu difference:
              </p>

              {/* Quote */}
              <blockquote className="border-l-[3px] border-accent pl-5 sm:pl-7 py-3 rounded-r-lg bg-accent/5">
                <p className="text-base sm:text-lg text-foreground/90 italic font-medium leading-relaxed">
                  &ldquo;We deliver better results by having a <span className="font-bold">complete and diversified digital marketing program</span> that allows small businesses to <span className="font-bold">be found everywhere consumers are searching and engaging.</span>&rdquo;
                </p>
              </blockquote>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-lime-400 text-slate-900 font-bold text-sm sm:text-base rounded-full hover:bg-lime-300 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-lime-400/25 touch-manipulation">
                  Learn about Hibu One
                </button>
                <button className="btn-glow px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-bold text-sm sm:text-base rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 touch-manipulation">
                  Request a demo
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
