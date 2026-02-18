'use client'

interface PartnerBadgeProps {
  name: string
  icon?: React.ReactNode
}

export function PartnerBadge({ name, icon }: PartnerBadgeProps) {
  return (
    <div className="flex flex-col items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4.5 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/30 hover:border-border/60 flex-shrink-0 hover:-translate-y-1 group">
      {icon && (
        <div className="mb-2 text-lg sm:text-xl opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      )}
      <span className="text-xs sm:text-sm font-medium text-foreground text-center line-clamp-2 max-w-20 sm:max-w-24">
        {name}
      </span>
    </div>
  )
}
