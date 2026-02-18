'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface ReviewCardProps {
  clientName: string
  clientTitle: string
  quote: string
  thumbnailColor?: string
  index?: number
}

export function ReviewCard({ clientName, clientTitle, quote, thumbnailColor = 'from-blue-600 to-blue-800', index = 0 }: ReviewCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Video Thumbnail Container */}
      <motion.div
        className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 ring-1 ring-black/5 dark:ring-white/5 hover:ring-primary/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${thumbnailColor}`} />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
          {/* Top Section */}
          <div className="space-y-1">
            <p className="text-white/90 font-bold text-sm tracking-wide">A Client</p>
            <p className="text-white/90 font-bold text-sm tracking-wide">Success Story</p>
          </div>

          {/* Bottom Section with Client Badge */}
          <div className="flex items-end justify-between">
            <div className="h-11 w-11 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xs border border-white/20">
              hibu
            </div>
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground shadow-sm">
              <p>{clientName}</p>
              <p className="text-muted-foreground text-xs">{clientTitle}</p>
            </div>
          </div>
        </div>

        {/* Play Button Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className={`relative flex items-center justify-center transition-all duration-300 active:scale-95 ${isHovered ? 'scale-115' : 'scale-100'
              }`}
          >
            <div className="absolute w-14 sm:w-16 h-14 sm:h-16 bg-accent/25 rounded-full animate-pulse-glow" />
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors shadow-lg shadow-accent/30">
              <Play
                size={20}
                className="fill-foreground text-foreground ml-0.5 flex-shrink-0"
              />
            </div>
          </button>
        </div>
      </motion.div>

      {/* Quote Section */}
      <div className="px-1">
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </motion.div>
  )
}
