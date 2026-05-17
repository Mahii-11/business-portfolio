export const navigationData = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const trustedCompanies = [
  { name: 'TechVenture', logo: 'TV' },
  { name: 'CloudSync Pro', logo: 'CS' },
  { name: 'DataFlow Systems', logo: 'DF' },
  { name: 'CyberShield Corp', logo: 'SC' },
  { name: 'NextGen Solutions', logo: 'NG' },
  { name: 'Innovation Labs', logo: 'IL' },
]

export const aboutStats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
]

export const skills = [
  {
    category: 'Web Development',
    icon: 'code',
    items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Cyber Security',
    icon: 'shield',
    items: ['Penetration Testing', 'Security Audits', 'SIEM', 'Encryption', 'Compliance', 'Threat Analysis'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    category: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    category: 'Business Strategy',
    icon: 'chart',
    items: ['Digital Transformation', 'Process Optimization', 'Market Analysis', 'Growth Strategy', 'ROI Planning', 'Risk Management'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    category: 'AI & Automation',
    icon: 'brain',
    items: ['Machine Learning', 'GPT Integration', 'Workflow Automation', 'Data Analytics', 'Predictive Models', 'NLP'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    category: 'IT Consulting',
    icon: 'users',
    items: ['Infrastructure Design', 'Tech Stack Selection', 'Team Training', 'Vendor Management', 'Cost Optimization', 'Scalability'],
    color: 'from-indigo-500 to-blue-500',
  },
]

export const services = [
  {
    title: 'Enterprise Software Development',
    description: 'Custom software solutions built with cutting-edge technologies, designed to scale with your business and drive digital transformation.',
    icon: 'code',
    features: ['Custom Web Applications', 'API Development', 'System Integration', 'Performance Optimization'],
  },
  {
    title: 'Cybersecurity Consulting',
    description: 'Comprehensive security assessments and implementation strategies to protect your digital assets and ensure regulatory compliance.',
    icon: 'shield',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
  },
  {
    title: 'Cloud Architecture',
    description: 'Design and implementation of scalable cloud infrastructure that optimizes costs while maximizing performance and reliability.',
    icon: 'cloud',
    features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'Disaster Recovery'],
  },
  {
    title: 'Business Technology Strategy',
    description: 'Strategic consulting to align technology investments with business goals, driving innovation and competitive advantage.',
    icon: 'chart',
    features: ['Digital Roadmap', 'Technology Assessment', 'ROI Analysis', 'Change Management'],
  },
]

export const projects = [
  {
    title: 'FinTech Trading Platform',
    description: 'High-frequency trading platform processing 1M+ transactions daily with real-time analytics and risk management.',
    image: 'fintech',
    tags: ['React', 'Node.js', 'AWS', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Healthcare Data Analytics',
    description: 'HIPAA-compliant analytics platform for healthcare providers, featuring predictive diagnostics and patient outcome tracking.',
    image: 'healthcare',
    tags: ['Python', 'TensorFlow', 'GCP', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Microservices',
    description: 'Scalable microservices architecture handling 500K daily users with 99.99% uptime and sub-100ms response times.',
    image: 'ecommerce',
    tags: ['Kubernetes', 'Go', 'MongoDB', 'GraphQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI-Powered CRM System',
    description: 'Intelligent customer relationship management with predictive lead scoring and automated engagement workflows.',
    image: 'crm',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export const experiences = [
  {
    title: 'Chief Technology Officer',
    company: 'TechVenture Capital',
    period: '2022 - Present',
    description: 'Leading technology strategy and digital transformation initiatives for a $500M investment portfolio. Overseeing a team of 40+ engineers across multiple portfolio companies.',
    achievements: ['Increased portfolio tech valuation by 340%', 'Implemented AI-driven due diligence process', 'Established cybersecurity standards across 15 companies'],
  },
  {
    title: 'VP of Engineering',
    company: 'CloudSync Enterprise',
    period: '2019 - 2022',
    description: 'Directed engineering operations for a cloud infrastructure company serving Fortune 500 clients. Scaled the platform from 10K to 500K daily active users.',
    achievements: ['Achieved 99.99% uptime SLA', 'Reduced infrastructure costs by 45%', 'Led successful Series C funding of $80M'],
  },
  {
    title: 'Senior Solutions Architect',
    company: 'Global Tech Consulting',
    period: '2016 - 2019',
    description: 'Designed enterprise-grade solutions for clients across finance, healthcare, and retail sectors. Specialized in cloud migration and security architecture.',
    achievements: ['Delivered 50+ enterprise projects', 'Generated $12M in consulting revenue', 'Built strategic partnerships with AWS and Microsoft'],
  },
  {
    title: 'Lead Software Engineer',
    company: 'Innovation Labs Inc',
    period: '2013 - 2016',
    description: 'Led development of mission-critical applications for government and enterprise clients. Established engineering best practices and mentored junior developers.',
    achievements: ['Launched 3 successful SaaS products', 'Reduced deployment time by 80%', 'Implemented company-wide agile transformation'],
  },
]

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechStart Ventures',
    content: 'Alex transformed our entire technology infrastructure. Their strategic vision and technical expertise helped us scale from a startup to a $100M company in just three years.',
    avatar: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO, HealthCore Systems',
    content: 'Working with Alex on our security overhaul was a game-changer. They identified critical vulnerabilities and implemented solutions that exceeded our compliance requirements.',
    avatar: 'MR',
  },
  {
    name: 'Emily Thompson',
    role: 'VP Product, DataFlow Inc',
    content: 'Alex has an exceptional ability to translate complex technical concepts into business value. Their consulting has directly contributed to our 200% revenue growth.',
    avatar: 'ET',
  },
]

export const businessStats = [
  { value: 25, suffix: 'M+', label: 'Revenue Generated', prefix: '$' },
  { value: 150, suffix: '+', label: 'Enterprise Clients', prefix: '' },
  { value: 99.9, suffix: '%', label: 'Client Retention', prefix: '' },
  { value: 500, suffix: '+', label: 'Projects Delivered', prefix: '' },
]

export const socialLinks = [
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
  { name: 'GitHub', url: '#', icon: 'github' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'Email', url: 'mailto:alex@example.com', icon: 'mail' },
]

export const footerLinks = {
  services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Cybersecurity', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'IT Consulting', href: '#services' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
  ],
}
