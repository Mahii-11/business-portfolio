import { useInView } from "../hooks/useAnimations"
import { services } from "../data/content"

import {
  Code,
  Shield,
  Cloud,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react"

const iconMap = {
  code: Code,
  shield: Shield,
  cloud: Cloud,
  chart: BarChart3,
}

function ServiceCard({ service, index, isInView }) {
  const Icon = iconMap[service.icon]

  return (
    <div
      className={`group relative p-5 sm:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 card-hover overflow-hidden ${
        isInView ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl gradient-bg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-slate-900 mb-3 sm:mb-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600"
            >
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />

              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Link */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-300"
        >
          Learn More

          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section
      id="services"
      className="section-padding bg-slate-50/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Services
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 sm:mb-6 text-balance">
            Enterprise Solutions &{" "}
            <span className="gradient-text">
              Consulting Services
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed px-2">
            Comprehensive technology services designed to accelerate your
            digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Enterprise CTA */}
        <div
          className={`mt-10 sm:mt-12 lg:mt-16 ${
            isInView
              ? "animate-fade-up delay-500"
              : "opacity-0"
          }`}
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-bg animate-gradient" />

            {/* Content */}
            <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-14 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white mb-3 sm:mb-4">
                Ready to Transform Your Business?
              </h3>

              <p className="text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Let&apos;s discuss how we can leverage technology to achieve
                your strategic objectives.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
                >
                  Schedule a Consultation
                </a>

                <a
                  href="#projects"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 text-white rounded-lg sm:rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20 text-sm sm:text-base"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}