'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui"
import { StarIcon } from "@heroicons/react/24/solid"
import { BuildingStorefrontIcon, HeartIcon, ChartBarIcon } from "@heroicons/react/24/outline"

const testimonials = [
  {
    id: 1,
    name: "Mehmet Yılmaz",
    role: "Restoran Sahibi",
    business: "Lezzet Durağı",
    location: "Güzelyalı, İzmir",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "mekanapp'ın şans çarkı sistemi ile müşteri memnuniyetimiz %40 arttı. Özellikle genç müşteriler çok seviyor ve tekrar geliyor. Kurulum çok kolaydı, 1 hafta içinde fark etmeye başladık.",
    metrics: {
      increase: "+40%",
      metric: "Müşteri Memnuniyeti"
    },
    icon: HeartIcon
  },
  {
    id: 2,
    name: "Ayşe Demir",
    role: "Cafe Müdürü", 
    business: "Coffee Corner",
    location: "Alsancak, İzmir",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c4c0?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "QR menü sistemi pandemi döneminde hayat kurtardı. Şimdi müşteriler masa başında rahatça sipariş veriyor, personel yükümüz azaldı. Analytics ile hangi ürünlerin popüler olduğunu da görebiliyoruz.",
    metrics: {
      increase: "+25%",
      metric: "Sipariş Hızı"
    },
    icon: ChartBarIcon
  },
  {
    id: 3,
    name: "Can Öztürk",
    role: "İşletme Ortağı",
    business: "Burger Station",
    location: "Konak, İzmir",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Loyalty program ile müşteri sadakati inanılmaz arttı. Özellikle puanlama sistemi çok etkili. Müşteriler puan toplamak için daha sık geliyor, ortalama sipariş tutarımız da yükseldi.",
    metrics: {
      increase: "+60%",
      metric: "Müşteri Sadakati"
    },
    icon: BuildingStorefrontIcon
  }
]

const stats = [
  {
    label: "Mutlu Müşteri",
    value: "150+",
    description: "İzmir genelinde işletme"
  },
  {
    label: "Ortalama Artış",
    value: "%35",
    description: "Müşteri etkileşiminde"
  },
  {
    label: "Kullanım Oranı",
    value: "94%",
    description: "Müşteri memnuniyeti"
  },
  {
    label: "Hızlı Kurulum",
    value: "24 saat",
    description: "Ortalama kurulum süresi"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export default function TestimonialsSection() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Müşteri Deneyimleri
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              İzmir'de Başarı Hikayeleri
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              mekanapp ile işletmelerini dönüştüren müşterilerimizin gerçek deneyimlerini keşfedin.
              Her hikaye, dijital dönüşümün gücünü gösteriyor.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={item} className="text-center">
              <div className="text-3xl font-bold text-gray-900 lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-900">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-gray-700">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={item}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Metric Highlight */}
                  <div className="flex items-center gap-3 mb-6 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg">
                    <testimonial.icon className="h-5 w-5 text-primary-600" />
                    <div>
                      <div className="text-2xl font-bold text-primary-600">
                        {testimonial.metrics.increase}
                      </div>
                      <div className="text-sm text-gray-800">
                        {testimonial.metrics.metric}
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-800">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-primary-600 font-medium">
                        {testimonial.business} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-900 text-sm font-medium mb-6">
            <HeartIcon className="h-4 w-4 text-gray-900" />
            Güvenilir Partner
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Siz de Bu Başarı Hikayesinin Parçası Olun
          </h3>
          
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            İzmir'deki yüzlerce işletme gibi siz de mekanapp ile dijital dönüşümünüzü başlatın.
            Ücretsiz demo ile potansiyelinizi keşfedin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/demo-talep"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ücretsiz Demo Talep Et
            </motion.a>
            
            <motion.a
              href="/vaka-calismalari"
              className="inline-flex items-center px-6 py-3 text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-100 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tüm Vaka Çalışmalarını İncele
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
