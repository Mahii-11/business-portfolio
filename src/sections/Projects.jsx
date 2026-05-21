import { useInView } from "../hooks/useAnimations"
import { projects } from "../data/content"

import {
  ExternalLink,
  Github,
  ArrowRight,
} from "lucide-react"

const gradientMap = {
  fintech: "from-blue-500 to-indigo-600",
  healthcare: "from-emerald-500 to-teal-600",
  ecommerce: "from-orange-500 to-red-500",
  crm: "from-purple-500 to-pink-500",
}

function ProjectCard({ project, index, isInView }) {
  return (
    <div
      className={`group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 overflow-hidden card-hover ${
        isInView ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-40 sm:h-48 lg:h-56 xl:h-64 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            gradientMap[project.image]
          } opacity-90`}
        />

        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white/20">
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
          <a
            href={project.liveUrl}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:scale-110 transition-transform"
            aria-label="View live demo"
          >
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={project.githubUrl}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:scale-110 transition-transform"
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, isInView] = useInView(0.1)

  return (
    <section
      id="projects"
      className="section-padding"
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
            Portfolio
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 sm:mb-6 text-balance">
            Featured Projects &{" "}
            <span className="gradient-text">
              Case Studies
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed px-2">
            A selection of impactful projects showcasing end-to-end delivery of
            enterprise solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`mt-8 sm:mt-10 lg:mt-12 text-center ${
            isInView
              ? "animate-fade-up delay-600"
              : "opacity-0"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors text-sm sm:text-base"
          >
            View All Projects

            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}