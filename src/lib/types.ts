export interface BusinessInfo {
  id: string
  name: string
  type: 'restaurant' | 'retail' | 'service' | 'other'
  size: 'small' | 'medium' | 'large'
  location: string
  phone: string
  email: string
  website?: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  businessType: string
  message: string
  consent: boolean
}

export interface DemoRequest {
  name: string
  email: string
  phone: string
  company: string
  businessType: 'restaurant' | 'retail' | 'service' | 'other'
  companySize: 'small' | 'medium' | 'large'
  currentSolutions: string[]
  challenges: string[]
  timeline: 'immediate' | '1-3months' | '3-6months' | '6+months'
  preferredTime: string
  additionalInfo?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  updatedAt: Date
  tags: string[]
  category: string
  featured: boolean
  readTime: number
  seoTitle?: string
  seoDescription?: string
}

export interface CaseStudy {
  id: string
  title: string
  slug: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  images: string[]
  publishedAt: Date
  featured: boolean
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  features: string[]
  benefits: string[]
  pricing: {
    plan: string
    price: number
    currency: string
    period: 'monthly' | 'yearly'
    features: string[]
    popular?: boolean
  }[]
  screenshots: string[]
  videoUrl?: string
  demoUrl?: string
}

export interface SpinWheelSegment {
  id: string
  text: string
  color: string
  probability: number
  value: number
  type: 'discount' | 'gift' | 'points' | 'cashback'
}

export interface SpinWheelConfig {
  segments: SpinWheelSegment[]
  colors: {
    primary: string
    secondary: string
    text: string
  }
  animation: {
    duration: number
    easing: string
  }
  sound: boolean
}

export interface AnalyticsEvent {
  event: string
  properties: Record<string, any>
  timestamp: Date
  sessionId: string
  userId?: string
}

export interface LeadScore {
  total: number
  factors: {
    emailEngagement: number
    websiteActivity: number
    demoInteraction: number
    businessFit: number
    timeline: number
  }
}
