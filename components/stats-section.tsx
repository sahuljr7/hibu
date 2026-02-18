'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/animated-counter'

const stats = [
  {
    value: 898396215,
    label: 'Visits to Websites*',
  },
  {
    value: 719610315,
    label: 'Ad Clicks from Search, Social, and Display Ads*',
  },
  {
    value: 27154421,
    label: 'Calls from Search Campaigns*',
  },
]

export function StatsSection() {
  return (
    <section className="w-full py-18 sm:py-22 md:py-32 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/25 dark:via-green-950/15 dark:to-teal-950/25 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-200/20 dark:bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/15 dark:bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="mb-18 sm:mb-22 md:mb-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground text-balance leading-[1.1] max-w-3xl">
            Using today&apos;s advanced technology to deliver calls, clicks, and customers for our clients.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Large Number with Counter Animation */}
              <div className="mb-4 sm:mb-5">
                <AnimatedCounter value={stat.value} duration={2.5} />
              </div>

              {/* Label */}
              <p className="text-xs sm:text-sm md:text-base font-semibold text-muted-foreground tracking-wider uppercase max-w-xs leading-relaxed">
                {stat.label}
              </p>

              {/* Subtle divider between stats on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
