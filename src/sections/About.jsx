import { useInView, useCounter } from '../hooks/useAnimations'
import { aboutStats } from '../data/content'
import { Award, Briefcase, GraduationCap, Target, ArrowRight, BadgeCheck } from 'lucide-react'


function StatCard({ value, suffix, label, isInView }) {
  const count = useCounter(value, 2000, isInView)

  return (
    <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white shadow-lg shadow-slate-100 border border-slate-100 card-hover">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-slate-500 font-medium">
        {label}
      </div>
    </div>
  )
}


export default function About() {
    const [ref, isInView] = useInView(0.1)

    
  const highlights = [
    { icon: Award, label: 'Award-Winning Solutions' },
    { icon: Briefcase, label: 'Fortune 500 Experience' },
    { icon: GraduationCap, label: 'MIT Certified' },
    { icon: Target, label: 'Results-Driven Approach' },
  ]
  return (
    <section id='about' ref={ref} className='section-padding bg-slate-50/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
             <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 sm:mb-6 text-balance">
            Bridging Technology &{' '}
            <span className="gradient-text">Business Excellence</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed px-2">
            With over a decade of experience at the intersection of technology and business strategy, I help organizations navigate digital transformation and achieve sustainable growth.
          </p>
        </div>


       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
  {/* Image / Visual Side */}
  <div
    className={`relative ${
      isInView ? "animate-slide-right delay-200" : "opacity-0"
    }`}
  >
    <div className="relative max-w-md mx-auto lg:max-w-none">
      {/* Main card */}
      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 sm:p-1">
        <div className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 lg:p-8 xl:p-10">
          <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
            
            {/* Decorative Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img
                src="/images/bgimage.png"
                alt="Pattern"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content */}
            <div className="text-center relative z-10 p-4">
              <img
                src="/images/MAAHI.png"
                alt="Alex Morgan"
                className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-xl"
              />

              <div className="text-slate-600 font-medium text-sm sm:text-base">
                ADIB MA AHI
              </div>

              <div className="text-xs sm:text-sm text-slate-400">
                CTO & Technology Strategist
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background shape */}
      <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-100 to-cyan-100 -z-10" />
    </div>

    {/* Floating badge */}
    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-right-8 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl animate-float z-20 hidden sm:block">
      <div className="flex items-center gap-2 sm:gap-3">

    
        {/* Badge Icon */}
         <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
              <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>

        <div>
          <div className="text-xs sm:text-sm font-semibold text-slate-800">
            Certified Expert
          </div>

          <div className="text-[10px] sm:text-xs text-slate-500">
            AWS, Azure, GCP
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Content Side */}
  <div
    className={`space-y-6 sm:space-y-8 ${
      isInView ? "animate-slide-left delay-300" : "opacity-0"
    }`}
  >
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
        Empowering Businesses Through Innovation
      </h3>

      <div className="space-y-3 sm:space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
        <p>
          As a seasoned IT specialist and business strategist, I&apos;ve
          dedicated my career to helping organizations harness the power of
          technology to drive growth, efficiency, and competitive advantage.
        </p>

        <p>
          My approach combines deep technical expertise with a keen
          understanding of business dynamics. Whether it&apos;s architecting
          enterprise-scale cloud solutions, implementing robust cybersecurity
          frameworks, or developing custom software that transforms operations,
          I bring a holistic perspective to every engagement.
        </p>

        <p className="hidden sm:block">
          I believe in building lasting partnerships with my clients, focusing
          on measurable outcomes and sustainable value creation. My track record
          includes successful projects with Fortune 500 companies, high-growth
          startups, and everything in between.
        </p>
      </div>
    </div>

    {/* Highlights */}
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>

          <span className="text-xs sm:text-sm font-medium text-slate-700">
            {item.label}
          </span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <a
        href="#contact"
        className="btn-primary inline-flex items-center justify-center gap-2"
      >
        Work With Me

        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
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

      <a
        href="#experience"
        className="btn-secondary inline-flex items-center justify-center gap-2"
      >
        View Experience
      </a>
    </div>
  </div>
</div>


   <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-20 ${isInView ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
          {aboutStats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isInView={isInView}
            />
          ))}
        </div>
        </div>
    </section>
  )
}
