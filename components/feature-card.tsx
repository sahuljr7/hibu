'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <motion.div
      className="group relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Gradient glow background */}
      <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 dark:from-primary/15 dark:via-primary/8 dark:to-accent/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

      {/* Card content */}
      <motion.div
        className="relative bg-card/90 dark:bg-card/70 backdrop-blur-sm border border-border/50 dark:border-border/30 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 group-hover:bg-card dark:group-hover:bg-card/90 group-hover:border-border/80 dark:group-hover:border-primary/20 group-hover:shadow-xl dark:group-hover:shadow-primary/10"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Icon container */}
        <motion.div
          className="mb-5 flex justify-center"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-primary/8 dark:bg-primary/12 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/12 dark:group-hover:bg-primary/20 shadow-sm"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-accent/15 blur-sm" />
            <motion.div
              className="relative text-primary dark:text-primary"
              whileHover={{ scale: 1.15, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            >
              {icon}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-lg sm:text-xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
