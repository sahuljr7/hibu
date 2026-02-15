'use client'

import { StatsItem } from '@/components/stats-item'

const stats = [
  {
    value: '898,396,215',
    label: 'Visits to Websites*',
  },
  {
    value: '719,610,315',
    label: 'Ad Clicks from Search, Social, and Display Ads*',
  },
  {
    value: '27,154,421',
    label: 'Calls from Search Campaigns*',
  },
]

export function StatsSection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-gradient-to-r from-green-100 via-green-50 to-emerald-100 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-green-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground text-balance leading-tight max-w-3xl">
            Using today's advanced technology to deliver calls, clicks, and customers for our clients.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 md:gap-20">
          {stats.map((stat, index) => (
            <StatsItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
