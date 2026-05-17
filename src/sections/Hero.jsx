import { useInView } from "../hooks/useAnimations";
import { trustedCompanies } from "../data/content";

export default function Hero() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-cyan-50/30" />

      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-40 md:w-64 h-40 md:h-64 bg-indigo-400/10 rounded-full blur-3xl animate-float" />

        {/* Geometric shapes */}
        <div className="absolute top-32 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-float" />
        <div className="absolute top-48 left-32 w-3 h-3 bg-cyan-500/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-indigo-500/20 rounded-full animate-float" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-6 sm:space-y-8 text-center lg:text-left ${isInView ? "animate-fade-up" : "opacity-0"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white shadow-lg shadow-blue-500/10 border border-slate-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-slate-600">
                Available for Enterprise Projects
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-slate-900 leading-tight">
                Transforming
                <span className="block gradient-text">Business Through</span>
                Technology
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                IT Specialist & Business Professional with 12+ years of
                experience helping Fortune 500 companies achieve digital
                excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Schedule Consultation
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
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                View Portfolio
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-2 sm:pt-4">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                  $25M+
                </div>
                <div className="text-xs sm:text-sm text-slate-500">
                  Revenue Generated
                </div>
              </div>
              <div className="w-px bg-slate-200 hidden sm:block" />
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                  150+
                </div>
                <div className="text-xs sm:text-sm text-slate-500">
                  Enterprise Clients
                </div>
              </div>
              <div className="w-px bg-slate-200 hidden md:block" />
              <div className="hidden md:block text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                  99.9%
                </div>
                <div className="text-xs sm:text-sm text-slate-500">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Avatar / Visual */}
          <div
            className={`relative order-first lg:order-last ${isInView ? "animate-scale-in delay-300" : "opacity-0"}`}
          >
            <div className="relative mx-auto w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem]">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 animate-pulse-glow" />
              <div className="absolute inset-1 rounded-full bg-white" />

              {/* Profile image placeholder */}
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/MAAHI.png"
                  alt="Mahi Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards - Hidden on small mobile */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-card rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl animate-float hidden sm:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl gradient-bg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">
                      500+ Projects
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500">
                      Delivered Successfully
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-card rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl animate-float-delayed hidden sm:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">
                      12+ Years
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500">
                      Industry Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div
          className={`mt-12 sm:mt-16 lg:mt-20 ${isInView ? "animate-fade-up delay-500" : "opacity-0"}`}
        >
          <p className="text-center text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider mb-6 sm:mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
            {trustedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-white/60 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg gradient-bg flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                  {company.logo}
                </div>
                <span className="font-medium text-slate-700 text-xs sm:text-sm lg:text-base">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 sm:w-8 sm:h-12 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 rounded-full bg-slate-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
