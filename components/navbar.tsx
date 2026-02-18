'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    {
      label: 'Digital Marketing Services',
      href: '#',
      hasDropdown: true,
    },
    {
      label: 'Industries',
      href: '#',
      hasDropdown: true,
    },
    {
      label: 'Resources',
      href: '#',
      hasDropdown: true,
    },
    {
      label: 'Company',
      href: '#',
      hasDropdown: true,
    },
  ]

  return (
    <nav className="w-full bg-background/85 backdrop-blur-xl border-b border-border/50 sticky top-14 sm:top-12 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl sm:text-2xl font-bold text-primary font-display transition-all duration-300 hover:opacity-80">
            hibu
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-all duration-200 font-medium text-[0.925rem] relative group">
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300 ease-out" />
                </span>
                {item.hasDropdown && (
                  <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300 ml-0.5 opacity-60" />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div className="absolute left-0 mt-3 w-52 bg-card/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-xl shadow-black/5 dark:shadow-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top scale-95 group-hover:scale-100">
                  <div className="p-2 space-y-0.5">
                    <a
                      href="#"
                      className="block px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/80 rounded-lg transition-all duration-150"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/80 rounded-lg transition-all duration-150"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/80 rounded-lg transition-all duration-150"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Client Support & Theme Toggle */}
        <div className="hidden md:flex items-center gap-5">
          <div className="relative group">
            <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium text-[0.925rem]">
              Client Support & Login
              <ChevronDown size={15} className="opacity-60" />
            </button>

            <div className="absolute right-0 mt-3 w-52 bg-card/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-xl shadow-black/5 dark:shadow-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right scale-95 group-hover:scale-100">
              <div className="p-2 space-y-0.5">
                <a
                  href="#"
                  className="block px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/80 rounded-lg transition-all duration-150"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/80 rounded-lg transition-all duration-150"
                >
                  Login
                </a>
              </div>
            </div>
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary active:text-primary/80 transition-colors p-2 rounded-xl touch-manipulation hover:bg-secondary/50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl animate-fade-in max-h-screen overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item, i) => (
              <div key={item.label} className="space-y-1" style={{ animationDelay: `${i * 50}ms` }}>
                <button className="flex items-center justify-between text-foreground/80 hover:text-foreground transition-colors font-medium w-full py-2.5 px-3 rounded-xl hover:bg-secondary/60">
                  <span className="text-sm">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="flex-shrink-0 opacity-50" />
                  )}
                </button>
                {item.hasDropdown && (
                  <div className="pl-4 space-y-0.5">
                    <a
                      href="#"
                      className="block text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/40"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/40"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/40"
                    >
                      Option 3
                    </a>
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-border/50 pt-3 mt-3 space-y-1">
              <button className="flex items-center justify-between text-foreground/80 hover:text-foreground transition-colors font-medium w-full py-2.5 px-3 rounded-xl hover:bg-secondary/60">
                <span className="text-sm">Client Support & Login</span>
                <ChevronDown size={16} className="flex-shrink-0 opacity-50" />
              </button>
              <div className="pl-4 space-y-0.5">
                <a
                  href="#"
                  className="block text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/40"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/40"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
