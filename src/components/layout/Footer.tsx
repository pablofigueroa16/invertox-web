import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Instagram, Youtube, Send } from 'lucide-react'

const footerLinks = {
  trading: [
    { name: 'Libro A', href: '#' },
    { name: 'Copy Trading', href: '#' },
    { name: 'Cuentas Fondeadas', href: '#' },
    { name: 'Plataformas', href: '#' },
    { name: 'Spreads', href: '#' },
  ],
  academy: [
    { name: 'Cursos', href: '#' },
    { name: 'Lives & Webinars', href: '#' },
    { name: 'Podcast', href: '#' },
    { name: 'Glosario', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  company: [
    { name: 'Sobre Nosotros', href: '#' },
    { name: 'Regulaciones', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Soporte', href: '#' },
    { name: 'Contacto', href: '#' },
  ],
  legal: [
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Aviso Legal', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Send, href: '#', label: 'Telegram' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-container py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">

            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/invertox-logo.png"
                  alt="Invertox"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
                Tu socio estratégico en trading e inversiones. Tecnología institucional, educación de calidad y soporte real para traders en Latinoamérica.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 group"
                    >
                      <Icon size={18} className="text-white/60 group-hover:text-white transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Trading Column */}
            <div>
              <h4 className="text-primary-400 text-xs font-semibold tracking-wider uppercase mb-5">Trading</h4>
              <ul className="space-y-3">
                {footerLinks.trading.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academy Column */}
            <div>
              <h4 className="text-primary-400 text-xs font-semibold tracking-wider uppercase mb-5">Academy</h4>
              <ul className="space-y-3">
                {footerLinks.academy.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-primary-400 text-xs font-semibold tracking-wider uppercase mb-5">Compañía</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-primary-400 text-xs font-semibold tracking-wider uppercase mb-5">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5">
          <div className="section-container py-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className="text-white/40 text-sm">
                © 2025 Invertox. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="border-t border-white/5 bg-dark-900/50">
          <div className="section-container py-8">
            <div className="space-y-4 max-w-5xl mx-auto">
              <p className="text-white/30 text-[11px] leading-relaxed text-center">
                INVERTOX LLC., Suite 305, Griffith Corporate Centre, Beachmont, Kingstown. está constituida bajo el número de registro 1503 LLC 2021, registrado por la Autoridad de Servicios Financieros de San Vicente y Granadinas.
              </p>
              <p className="text-white/30 text-[11px] leading-relaxed text-center">
                El trading con productos derivados implica riesgos significativos. Los perfiles IA representan modelos algorítmicos y no personas reales. Invertox no ofrece asesoría financiera ni garantiza resultados. Lea nuestros <Link href="#" className="text-primary-500/60 hover:text-primary-400 transition-colors">Términos</Link> y <Link href="#" className="text-primary-500/60 hover:text-primary-400 transition-colors">Políticas</Link> antes de operar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
