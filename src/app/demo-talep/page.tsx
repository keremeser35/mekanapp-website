import { DemoRequestForm } from "@/components/forms"

export const metadata = {
  title: "Ücretsiz Demo Talebi | mekanapp",
  description: "mekanapp'ın dijital loyalty çözümlerini ücretsiz olarak deneyin. Kişiselleştirilmiş demo için hemen başvurun.",
  keywords: "demo, ücretsiz deneme, dijital loyalty, şans çarkı, QR menü, İzmir",
}

export default function DemoRequestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ücretsiz Demo Talebi
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            İşletmenize özel hazırlanmış demo ile mekanapp'ın gücünü keşfedin. 
            Demo talebinizi oluşturduktan sonra 24 saat içinde sizinle iletişime geçeceğiz.
          </p>
        </div>

        {/* Demo Benefits */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Kişiselleştirilmiş</h3>
              <p className="text-sm text-gray-800">İşletmenizin ihtiyaçlarına özel hazırlanmış demo</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hızlı Kurulum</h3>
              <p className="text-sm text-gray-800">24 saat içinde demo hazır, hemen test etmeye başlayın</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tamamen Ücretsiz</h3>
              <p className="text-sm text-gray-800">Demo ve ilk 30 gün deneme tamamen ücretsiz</p>
            </div>
          </div>
        </div>

        {/* Demo Form */}
        <DemoRequestForm />

        {/* Additional Info */}
        <div className="mx-auto max-w-2xl mt-12 text-center">
          <div className="bg-primary-50 rounded-lg p-6">
            <h3 className="font-semibold text-primary-900 mb-3">Demo Sürecinde Neler Var?</h3>
            <div className="text-sm text-primary-700 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>İşletmeniz için özel demo ortamı hazırlanır</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>Canlı demo oturumu gerçekleştirilir (30-45 dk)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>Sorularınız cevaplanır ve fiyatlandırma bilgisi verilir</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span>İsterseniz 30 gün ücretsiz deneme başlatılır</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
