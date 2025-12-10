import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Shield, Globe2, Cpu, Zap, Smartphone, Users, Copy, Server } from 'lucide-react'

const diferenciales = [
  'Capital compartido hasta x10 sin endeudamiento',
  'Social Trading con algoritmos IA y traders reales',
  'Ejecución en milisegundos (servidores en Londres, NY, Tokio y Singapur)',
  'Plataforma web y app conectada con MetaTrader 5',
  'Cuentas PAMM/MAM para gestores, comunidades e instituciones',
  'Soporte 24/7 en español e inglés',
]

export default function ConocenosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-dark-950 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-dark-900 to-dark-800 py-20 md:py-28">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-24 top-10 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl" />
            <div className="absolute right-10 bottom-10 w-80 h-80 bg-primary-600/15 rounded-full blur-3xl" />
          </div>
          <div className="pt-6 section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 bg-primary-500/10 rounded-full px-4 py-2 border border-primary-500/20">
                Nosotros
              </div>
              <h1 className="text-white heading-md leading-tight">
                Tecnología, Confianza y Resultados:
                <br />
                <span className="text-primary-400">Descubre Quiénes Somos</span>
              </h1>
              <p className="text-lg text-white/70">
                Invertox nace para transformar la forma en que las personas invierten. Combinamos innovación financiera,
                respaldo institucional y una visión clara: hacer el trading accesible, seguro y eficiente para todos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary inline-flex items-center gap-2">
                  Crea tu cuenta gratuita
                  <ArrowRight size={18} />
                </button>
                <button className="bg-white/5 text-white px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition">
                  Empieza ahora
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y visión */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="heading-md text-dark-900">Misión y Visión</h2>
              <p className="body-lg text-dark-700">
                Más que una plataforma, una experiencia completa. Creemos que el futuro del trading es inteligente,
                automatizado y confiable. Nuestra misión: empoderar a inversionistas de todos los niveles con tecnología,
                educación continua e infraestructura sólida. Visión: un ecosistema donde seguridad, eficiencia y
                transparencia son la base.
              </p>
            </div>
            <div className="space-y-3 text-dark-700">
              <div className="flex items-start gap-3">
                <Shield className="text-primary-500" size={18} />
                <p>Operaciones protegidas. Fondos seguros. Tranquilidad real.</p>
              </div>
              <div className="flex items-start gap-3">
                <Globe2 className="text-primary-500" size={18} />
                <p>Operamos con regulaciones activas y presencia global en países permitidos.</p>
              </div>
              <div className="flex items-start gap-3">
                <Server className="text-primary-500" size={18} />
                <p>Fondos resguardados en bancos de primer nivel, auditorías regulares y liquidez multi-regulada.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciales */}
        <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="heading-md text-white mb-4">Lo que nos hace diferentes</h2>
              <p className="body-lg text-white/70">Innovación, velocidad, soporte y acceso institucional.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {diferenciales.map((item) => (
                <div key={item} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white/80">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary inline-flex items-center gap-2">
                Ver perfiles y empezar a copiar
                <ArrowRight size={18} />
              </button>
              <button className="bg-white/5 text-white px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition">
                Empieza ahora
              </button>
            </div>
          </div>
        </section>

        {/* Alcance e impacto */}
        <section data-light-bg="true" className="section-padding bg-white">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="heading-md text-dark-900">Alcance e impacto</h2>
              <p className="body-lg text-dark-700">
                Presencia internacional, enfoque local. Operaciones en expansión en LATAM, Europa y Asia, con miles de
                usuarios en 20+ países. Simplificamos la experiencia, reducimos barreras técnicas y acompañamos cada
                paso con formación y soporte humano real.
              </p>
              <p className="text-dark-700 font-semibold">+20 años de experiencia</p>
              <p className="text-dark-700">
                En mercados financieros, estrategias cuantitativas y automatización. Todo ese conocimiento hoy está en
                una plataforma diseñada para ti.
              </p>
            </div>
            <div className="space-y-4 text-dark-700">
              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-4">
                <p className="text-xl font-bold text-primary-600">Capital x10</p>
                <p>Capital compartido sin endeudamiento para acelerar tu crecimiento.</p>
              </div>
              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-4">
                <p className="text-xl font-bold text-primary-600">Plataforma lista para ti</p>
                <p>Web y app conectadas a MT5, con ejecución en milisegundos y soporte 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="section-padding bg-black">
          <div className="section-container">
            <div className="relative overflow-hidden bg-dark-900 border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-lg">
              <div className="absolute top-0 left-0 w-56 h-56 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-primary-600/20 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-6">
                <h2 className="heading-md text-white">¿Estás listo para operar con inteligencia?</h2>
                <p className="text-white/70 max-w-3xl mx-auto">
                  Abre tu cuenta en menos de 2 minutos. Plataforma gratuita, sin depósitos mínimos obligatorios y sin
                  compromiso.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="btn-primary inline-flex items-center gap-2">
                    Abrir cuenta ahora
                    <ArrowRight size={18} />
                  </button>
                  <button className="bg-transparent text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/10 transition">
                    Hablar con soporte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

