'use client'

import { motion } from "framer-motion"
import { 
  CogIcon, 
  ChartBarIcon, 
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline"

const features = [
  {
    name: 'Oyunlaştırma Sistemi',
    description: 'Şans çarkı, çekilişler ve interaktif oyunlarla müşterilerinizi eğlendirin.',
    icon: CogIcon,
    color: 'text-blue-700',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Analytics Dashboard',
    description: 'Detaylı raporlar ve analizler ile işletme performansınızı takip edin.',
    icon: ChartBarIcon,
    color: 'text-green-700',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Mobil Entegrasyon',
    description: 'iOS ve Android uygulamalarla tam entegrasyon ve push bildirimler.',
    icon: DevicePhoneMobileIcon,
    color: 'text-purple-700',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'ROI Analizi',
    description: 'Kampanya performansınızı ölçün ve satış artışınızı izleyin.',
    icon: PresentationChartLineIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-100',
  },
  {
    name: 'Güvenli Altyapı',
    description: 'SSL şifreleme ve KVKV uyumlu güvenli veri yönetimi.',
    icon: ShieldCheckIcon,
    color: 'text-gray-700',
    bgColor: 'bg-gray-100',
  },
  {
    name: 'Hızlı Kurulum',
    description: '24 saat içinde kurulum, anında kullanmaya başlayın.',
    icon: BoltIcon,
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Müşteri Segmentasyonu',
    description: 'Müşteri davranışlarına göre kişiselleştirilmiş kampanyalar.',
    icon: UserGroupIcon,
    color: 'text-indigo-700',
    bgColor: 'bg-indigo-100',
  },
  {
    name: 'Maliyet Optimizasyonu',
    description: 'Geleneksel pazarlama yöntemlerine göre %60 daha ekonomik.',
    icon: CurrencyDollarIcon,
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-100',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-blue-700 bg-blue-50 px-4 py-2 rounded-full inline-block">
              Özellikler
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              İşletmenizi Büyüten Teknoloji
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Müşteri sadakatini artıran, satışları yükselten ve işletmenizi 
              rekabette öne çıkaran özelliklerin tamamı tek platformda.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                variants={item}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${feature.bgColor}`}>
                    <feature.icon 
                      className={`h-6 w-6 ${feature.color}`} 
                      aria-hidden="true" 
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-16 sm:px-12 lg:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Tüm özellikleri ücretsiz deneyin
              </h3>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                30 gün boyunca tüm premium özellikler sizin. 
                Kredi kartı bilgisi gerektirmez.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/demo-talep"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  Ücretsiz Demo Al
                </a>
                <a 
                  href="/ozellikler" 
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-200 transition-colors"
                >
                  Tüm özellikleri gör <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
