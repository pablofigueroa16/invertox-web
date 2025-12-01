import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="section-container section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-premium rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-2xl font-bold">Invertox</span>
            </div>
            <p className="text-dark-300 mb-6 max-w-sm">
              Tu socio estratégico en trading e inversiones. Tecnología institucional, educación de calidad y soporte real para traders en Latinoamérica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Productos</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Trading Book A</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Cuentas Fondeadas</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Copy Trading</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">CRM Trader</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Plataformas</Link></li>
            </ul>
          </div>

          {/* Academy Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Academy</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Cursos</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Lives & Webinars</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Podcast</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Glosario</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Compañía</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Regulaciones</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Partners</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Soporte</Link></li>
              <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-400 text-sm">
              © 2025 Invertox. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

