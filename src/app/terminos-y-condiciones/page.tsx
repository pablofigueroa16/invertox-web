import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const fullText = `
OFERTA PÚBLICA – Términos y condiciones de uso
PARA LA CONCLUSIÓN DEL ACUERDO SOBRE LA PRESTACIÓN DE SERVICIOS DE BROKERAGE

1. DISPOSICIONES GENERALES Y PROCEDIMIENTO PARA LA CONCLUSIÓN DEL CONTRATO
1.1. Oferta pública disponible en www.invertox.com/tycbroker para celebrar un acuerdo de corretaje con Invertox LTD., empresa constituida en Santa Lucía (2024-00469), dirección: Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia P.O. Box 838, Castries, Saint Lucia.
1.2. Cliente: toda entidad o individuo que acepte la oferta al registrar la cuenta y marcar la casilla de aceptación.
1.3. Objeto: provisión de los servicios del apartado 2.
1.4. Definiciones: Sitio (www.invertox.com), Gabinete personal, Cuenta comercial, Plataforma de negociación, Transacción comercial, Instrumento financiero.

2. SERVICIOS DE LA EMPRESA
2.1. Transacciones de conversión-arbitraje sin entrega física (liquidación).
2.1.2. Creación y mantenimiento de cuenta: gabinete personal, claves de acceso, aceptación de fondos, apertura de cuentas, depósitos/retiros, comisiones, soporte técnico e informativo, KYC, software y señales analíticas, ejecución de órdenes, contabilidad y registro.
2.2. Prestación exclusivamente vía Internet; la empresa no es responsable por problemas de conexión.
2.3. Acceso al historial comercial en línea.
2.4. No se brinda asesoría legal, fiscal ni recomendaciones de inversión; solo ejecución de órdenes.

3. COMISIONES Y PRECIOS DE MERCADO ACTUALES
3.1. Comisiones, spreads y costos vigentes publicados en el Gabinete Personal.
3.2. La empresa puede cambiarlos sin previo aviso.
3.3. Servicio de información de precios de mercado.
3.4. El Cliente acepta que distintos proveedores de liquidez pueden implicar cotizaciones diferentes.

10. IDIOMA Y COMUNICACIÓN
10.6. Idioma de interacción: español. Traducciones si se requieren.
10.7. Uso de lenguaje respetuoso; la empresa puede negar servicio o limitar comunicación ante incumplimientos.

11. FUERZA MAYOR
11.1. Circunstancias: huelgas, disturbios, actos terroristas, guerras, desastres naturales, fallas de energía/tecnología, cambios drásticos de mercado, suspensión o cierre de mercados, límites o condiciones inusuales.
11.2. La empresa puede cerrar posiciones, suspender disposiciones, cancelar operaciones o ganancias/pérdidas asociadas, o no tomar acción, si se configura fuerza mayor.
11.3. Las partes no responden por incumplimientos derivados de fuerza mayor.
11.4. Debe notificarse en 7 días; si dura más de 1 mes, se renegocia la continuación del acuerdo.

CONTACTO
Para preguntas sobre estos Términos y Condiciones, contacte a contacto@invertox.com.

DESCARGO DE RESPONSABILIDAD Y RIESGO
El trading con productos derivados implica riesgos significativos; perfiles IA son modelos algorítmicos. Invertox no ofrece asesoría financiera ni garantiza resultados. Lea Términos, Políticas y Avisos de Riesgo antes de operar. Invertox LLC y afiliados no dirigen servicios a jurisdicciones restringidas (p. ej., UE/EEE/Reino Unido, EE.UU., Canadá, Japón, Australia, etc.).`

export default function TerminosYCondicionesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark-950 text-white min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-dark-900 to-dark-800 py-20 md:py-28">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-24 top-10 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl" />
            <div className="absolute right-10 bottom-10 w-80 h-80 bg-primary-600/15 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-400 bg-primary-500/10 rounded-full px-4 py-2 border border-primary-500/20 mb-6">
                Legal
              </div>
              <h1 className="heading-md text-white leading-tight mb-4">Términos y Condiciones</h1>
              <p className="text-lg text-white/70">
                Lea detenidamente las condiciones de uso y el acuerdo de prestación de servicios de corretaje de
                Invertox LTD (St. Lucia). Al registrarse, usted acepta estos términos.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black">
          <div className="section-container">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 space-y-8">
              <div className="space-y-4 text-sm text-white/80 leading-relaxed whitespace-pre-line">
                {fullText}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

