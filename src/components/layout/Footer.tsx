import Link from "next/link"
import NewsletterForm from "@/components/forms/NewsletterForm"

const navigation = {
  company: [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Kariyer', href: '/kariyer' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'Basın Kiti', href: '/basin' },
  ],
  products: [
    { name: 'Temel Paket', href: '/urunler/temel-paket' },
    { name: 'Profesyonel Paket', href: '/urunler/profesyonel-paket' },
    { name: 'Kurumsal Paket', href: '/urunler/kurumsal-paket' },
    { name: 'Tüm Ürünler', href: '/urunler' },
  ],
  solutions: [
    { name: 'Restoran & Kafe', href: '/cozumler/restoran-kafe' },
    { name: 'Perakende', href: '/cozumler/perakende' },
    { name: 'Sağlık & Wellness', href: '/cozumler/saglik-wellness' },
    { name: 'Güzellik Salonu', href: '/cozumler/guzellik-salonu' },
  ],
  support: [
    { name: 'Yardım Merkezi', href: '/destek' },
    { name: 'Kaynak Merkezi', href: '/kaynak-merkezi' },
    { name: 'Rehberler', href: '/blog/rehberler' },
    { name: 'İletişim', href: '/iletisim' },
  ],
  legal: [
    { name: 'Gizlilik Politikası', href: '/yasal/gizlilik' },
    { name: 'Kullanım Şartları', href: '/yasal/kullanim-sartlari' },
    { name: 'KVKK', href: '/yasal/kvkk' },
    { name: 'Çerez Politikası', href: '/yasal/cerez-politikasi' },
  ],
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/mekanup',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mekanup',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/mekanup',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.67.333 3.946.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.864.131 5.687.072 6.905.013 8.124 0 8.591 0 12.017s.013 3.893.072 5.112c.059 1.218.261 2.04.558 2.765.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.724.297 1.547.499 2.765.558 1.219.059 1.686.072 5.112.072s3.893-.013 5.112-.072c1.218-.059 2.04-.261 2.765-.558.789-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.337 1.384-2.126.297-.725.499-1.547.558-2.765.059-1.219.072-1.686.072-5.112s-.013-3.893-.072-5.112c-.059-1.218-.261-2.04-.558-2.765a5.847 5.847 0 0 0-1.384-2.126A5.847 5.847 0 0 0 15.782.63C15.058.333 14.235.131 13.017.072 11.798.013 11.331 0 7.905 0h4.112zm-.952 5.522a6.495 6.495 0 1 1 0 12.99 6.495 6.495 0 0 1 0-12.99zm0 10.718a4.223 4.223 0 1 0 0-8.446 4.223 4.223 0 0 0 0 8.446zM18.24 4.64a1.519 1.519 0 1 1-3.037 0 1.519 1.519 0 0 1 3.037 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white">mekanapp</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Dijital sadakat sistemleri ile işletmenizi geleceğe taşıyın. 
              Müşterilerinizi oyunlaştırılmış deneyimlerle sadık hale getirin.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Şirket</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Ürünler</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Çözümler</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Destek</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 border-t border-neutral-800 pt-8">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Güncellemelerden haberdar olun
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              En son ürün güncellemeleri ve endüstri haberlerini e-posta ile alın.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 text-gray-400 hover:text-gray-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2024 mekanapp. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
