import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navigationData } from '../data/content'
import { useScrollPosition } from '../hooks/useAnimations'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const scrollY = useScrollPosition()

  const isScrolled = scrollY > 40

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationData.map((item) =>
        item.href.replace('#', '')
      )

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)

        if (element) {
          const rect = element.getBoundingClientRect()

          if (rect.top <= 140) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-white/10 shadow-lg backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-bg text-lg font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              A
            </div>

            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-800">
              ADIB<span className="gradient-text">MA AHI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navigationData.map((item) => {
              const isActive =
                activeSection === item.href.replace('#', '')

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm font-medium"
              >
                Let&apos;s Talk

                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden rounded-xl p-2.5 text-slate-700 transition-colors hover:bg-slate-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-2 rounded-2xl border border-slate-200/60 bg-white/80 p-3 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {navigationData.map((item) => {
                const isActive =
                  activeSection === item.href.replace('#', '')

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-3 text-center text-sm py-3"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}