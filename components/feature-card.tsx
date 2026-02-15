'use client'

import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Glow background - visible in light mode */}
      <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-blue-200/30 via-blue-100/20 to-blue-200/30 dark:from-blue-500/10 dark:via-blue-400/5 dark:to-blue-500/10 rounded-2xl opacity-0 sm:opacity-40 group-hover:opacity-100 dark:group-hover:opacity-60 transition-all duration-500 blur-xl" />
      
      {/* Card content */}
      <div className="relative bg-white dark:bg-card rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/10">
        {/* Icon container with glow */}
        <div className="mb-4 flex justify-center">
          <div className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60">
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-300/30 to-blue-200/20 blur-sm" />
            <div className="relative text-blue-600 dark:text-blue-400 scale-100 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
