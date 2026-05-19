import { useInView } from "../hooks/useAnimations"
import { skills } from "../data/content"

import {
  Code,
  Shield,
  Cloud,
  BarChart3,
  Brain,
  Users,
} from "lucide-react"

const iconMap = {
  code: Code,
  shield: Shield,
  cloud: Cloud,
  chart: BarChart3,
  brain: Brain,
  users: Users,
}

function SkillCard({ skill, index, isInView }) {
  const Icon = iconMap[skill.icon]

  return (
    <div
      className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 card-hover overflow-hidden ${
        isInView ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      {/* Icon */}
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
      </div>

      {/* Category */}
      <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold text-slate-900 mb-3 sm:mb-4">
        {skill.category}
      </h3>

      {/* Skills list */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skill.items.map((item, i) => (
          <span
            key={i}
            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-slate-50 text-slate-600 text-xs sm:text-sm font-medium hover:bg-slate-100 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Decorative corner */}
      <div
        className={`absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-r ${skill.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`}
      />
    </div>
  )
}

export function Skills() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Expertise
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 sm:mb-6 text-balance">
            Technical Skills &{" "}
            <span className="gradient-text">
              Core Competencies
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed px-2">
            A comprehensive skill set spanning software development,
            cybersecurity, cloud infrastructure, and business strategy.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-10 sm:mt-12 lg:mt-16 text-center ${
            isInView
              ? "animate-fade-up delay-700"
              : "opacity-0"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-slate-900 text-sm sm:text-base">
                Need a specific skill or technology?
              </p>

              <p className="text-xs sm:text-sm text-slate-600">
                I&apos;m always expanding my expertise to meet client needs.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-primary whitespace-nowrap text-sm"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}