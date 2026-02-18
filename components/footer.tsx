'use client'

import { FooterTop } from './footer-top'
import { FooterBottom } from './footer-bottom'

export function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-border/50 relative">
      {/* Gradient top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-18 lg:py-22">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  )
}
