import { useInView } from "../hooks/useAnimations"
import { experiences } from "../data/content"

import {
  Briefcase,
  Check,
  Download,
} from "lucide-react"

function TimelineItem({
  experience,
  index,
  isInView,
  isLast,
}) {
  return (
    <div
      className={`relative pl-6 sm:pl-8 lg:pl-12 pb-8 sm:pb-10 lg:pb-12 ${
        isLast ? "pb-0" : ""
      } ${isInView ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[9px] sm:left-[11px] lg:left-[15px] top-8 sm:top-10 lg:top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/30">
        <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" />
      </div>

      {/* Content Card */}
      <div className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-100 shadow-lg shadow-slate-100/50 card-hover ml-2 sm:ml-4">
        {/* Period badge */}
        <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
          {experience.period}
        </span>

        {/* Title & Company */}
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-display font-bold text-slate-900 mb-1">
          {experience.title}
        </h3>

        <p className="text-blue-600 font-medium text-sm sm:text-base mb-3 sm:mb-4">
          {experience.company}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="space-y-1.5 sm:space-y-2">
          <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
            Key Achievements:
          </p>

          {experience.achievements.map((achievement, i) => (
            <div
              key={i}
              className="flex items-start gap-2 sm:gap-3"
            >
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />

              <span className="text-xs sm:text-sm text-slate-600">
                {achievement}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section
      id="experience"
      className="section-padding bg-slate-50/50"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Career Journey
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 sm:mb-6 text-balance">
            Professional{" "}
            <span className="gradient-text">
              Experience
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed px-2">
            A track record of leadership roles in technology and business,
            driving innovation across organizations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
              isInView={isInView}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Download Resume CTA */}
        <div
          className={`mt-8 sm:mt-10 lg:mt-12 text-center ${
            isInView
              ? "animate-fade-up delay-600"
              : "opacity-0"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />

            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}