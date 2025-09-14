import { ContactForm } from "@/components/forms"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline"

export const metadata = {
  title: "İletişim | mekanapp",
  description: "mekanapp ile iletişime geçin. Teknik destek, satış danışmanlığı ve iş ortaklığı için bizimle iletişime geçebilirsiniz.",
  keywords: "iletişim, destek, satış, mekanapp, İzmir, dijital loyalty",
}

const contactMethods = [
  {
    icon: PhoneIcon,
    title: "Telefon",
    description: "Hemen arayın",
    value: "(0232) 123 45 67",
    href: "tel:+902321234567",
    available: "7/24 Destek Hattı"
  },
  {
    icon: EnvelopeIcon,
    title: "E-posta",
    description: "E-posta gönderin",
    value: "info@mekanup.com",
    href: "mailto:info@mekanup.com",
    available: "24 saat içinde yanıt"
  },
  {
    icon: MapPinIcon,
    title: "Ofis",
    description: "Ziyaret edin",
    value: "Güzelyalı, İzmir",
    href: "https://maps.google.com/?q=Güzelyalı,İzmir",
    available: "Randevu ile"
  }
]

const departments = [
  {
    name: "Satış Danışmanlığı",
    description: "Ürün bilgileri, fiyatlandırma ve demo talepleri",
    email: "satis@mekanup.com",
    phone: "(0232) 123 45 67"
  },
  {
    name: "Teknik Destek",
    description: "Kurulum, konfigürasyon ve teknik sorunlar",
    email: "destek@mekanup.com",
    phone: "(0232) 123 45 68"
  },
  {
    name: "İş Ortaklığı",
    description: "Bayilik, entegrasyon ve iş birliği fırsatları",
    email: "ortaklik@mekanup.com",
    phone: "(0232) 123 45 69"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            İletişim
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız. 
            Aşağıdaki iletişim yöntemlerinden biri ile bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Quick Contact Methods */}
        <div className="mx-auto max-w-4xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.href}
                className="group relative bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300 p-6 text-center hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-800 mb-2">{method.description}</p>
                <p className="font-medium text-primary-600 mb-2">{method.value}</p>
                <p className="text-xs text-success-600 bg-success-50 px-2 py-1 rounded-full inline-block">
                  {method.available}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mx-auto max-w-4xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Departmanlarımız
            </h2>
            <p className="text-gray-800">
              İhtiyacınıza göre doğru departmanla iletişime geçin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className="bg-white rounded-xl shadow-sm border p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-800 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
                  >
                    <EnvelopeIcon className="h-4 w-4" />
                    {dept.email}
                  </a>
                  <a
                    href={`tel:${dept.phone.replace(/\s/g, '').replace('(', '+90').replace(')', '')}`}
                    className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {dept.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Mesaj Gönderin
            </h2>
            <p className="text-gray-800">
              Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz
            </p>
          </div>
          
          <ContactForm />
        </div>

        {/* Additional Information */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center gap-3 mb-4">
                <ClockIcon className="h-6 w-6 text-primary-600" />
                <h3 className="font-semibold text-gray-900">Çalışma Saatleri</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Pazartesi - Cuma</span>
                  <span className="font-medium text-gray-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Cumartesi</span>
                  <span className="font-medium text-gray-900">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Pazar</span>
                  <span className="font-medium text-gray-900">Kapalı</span>
                </div>
                <div className="pt-3 border-t border-neutral-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">Acil Durum Desteği</span>
                    <span className="font-medium text-success-600">7/24</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Sık Sorulan Sorular</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Demo ne kadar sürer?
                  </h4>
                  <p className="text-xs text-gray-800">
                    Kişiselleştirilmiş demo oturumu yaklaşık 30-45 dakika sürer.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Kurulum ne kadar sürer?
                  </h4>
                  <p className="text-xs text-gray-800">
                    Standart kurulum 24 saat içinde tamamlanır.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Teknik destek var mı?
                  </h4>
                  <p className="text-xs text-gray-800">
                    Evet, 7/24 teknik destek hizmeti sunuyoruz.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Fiyatlandırma nasıl?
                  </h4>
                  <p className="text-xs text-gray-800">
                    İşletme büyüklüğünüze göre özel fiyatlandırma yapıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
