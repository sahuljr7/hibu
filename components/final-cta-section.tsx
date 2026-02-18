'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function FinalCTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-18 sm:py-26 lg:py-36 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-gradient-shift" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] animate-gradient-shift" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] animate-gradient-shift" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered content */}
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-7 sm:space-y-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo - hibu ONE */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
              hibu
            </h2>
            <motion.div
              className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center shadow-lg shadow-white/10"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-blue-900">
                ONE
              </span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white text-balance leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how it can all work together for you
          </motion.h3>

          {/* Supporting Description */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white/70 text-balance leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Save time, save effort and see real marketing results. It all starts with one demo to find out how Hibu One can do more for your marketing.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="pt-4 sm:pt-6 lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="px-8 sm:px-10 lg:px-12 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl shadow-purple-600/30 hover:shadow-2xl hover:shadow-purple-500/40 touch-manipulation relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Request a demo
                <ArrowRight
                  size={20}
                  className={`transition-all duration-300 flex-shrink-0 ${isHovered ? 'translate-x-1.5' : 'translate-x-0'
                    }`}
                />
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
