import { useState } from "react"
import { useInView } from "../hooks/useAnimations"
import { socialLinks } from "../data/content"

import {
  Send,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
  LoaderCircle,
} from "lucide-react"

const socialIconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  mail: Mail,
}

export default function Contact() {
  const [ref, isInView] = useInView(0.1)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    )

    setIsSubmitting(false)

    setFormState({
      name: "",
      email: "",
      company: "",
      message: "",
    })

    alert("Thank you for your message! I'll get back to you soon.")
  }

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      className="section-padding bg-slate-50/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 text-balance">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">
              Amazing Together
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Ready to transform your business with technology?
            Let&apos;s discuss how I can help you achieve your
            goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-8 ${
              isInView
                ? "animate-slide-right delay-200"
                : "opacity-0"
            }`}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Email
                    </h3>

                    <a
                      href="mailto:alex@example.com"
                      className="text-blue-600 hover:underline"
                    >
                      alex@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Phone
                    </h3>

                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Location
                    </h3>

                    <p className="text-slate-600">
                      San Francisco, CA
                    </p>

                    <p className="text-sm text-slate-400">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">
                Connect With Me
              </h3>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = socialIconMap[social.icon]

                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:gradient-bg hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 ${
              isInView
                ? "animate-slide-left delay-300"
                : "opacity-0"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-10 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="mb-6">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Company Name
                </label>

                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  How Can I Help?
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="w-5 h-5 animate-spin" />

                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />

                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}