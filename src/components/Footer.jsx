import { footerLinks, socialLinks } from '../data/content'
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa'

const socialIconMap = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  twitter: FaTwitter,
  mail: FaEnvelope,
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                A
              </div>

              <span className="font-display font-bold text-xl text-white">
                Alex<span className="text-blue-400">Morgan</span>
              </span>
            </a>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              IT Specialist & Business Professional helping organizations achieve digital excellence through strategic technology consulting.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = socialIconMap[social.icon]

                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Services
            </h4>

            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Company
            </h4>

            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Resources
            </h4>

            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Alex Morgan. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                Terms of Service
              </a>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Scroll to top"
              >
                <FaArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}