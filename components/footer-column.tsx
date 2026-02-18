'use client'

import Link from 'next/link'

interface FooterColumnProps {
  title: string
  links: {
    label: string
    href: string
  }[]
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm sm:text-base font-bold text-foreground">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5 sm:gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group inline-block"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground/40 group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
