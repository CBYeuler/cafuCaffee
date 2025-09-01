'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/Container'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/#menu', label: 'Menu' },
  { href: '/#visit', label: 'Visit' },
  { href: '/#instagram', label: 'Instagram' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <Container className="h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          Cafu Coffee
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => {
            const active = item.href === pathname
            return (
              <a
                key={item.href}
                href={item.href}
                className={`hover:opacity-80 ${active ? 'font-semibold' : 'text-black/80'}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <a
          href="https://wa.me/905XXXXXXXXX?text=Merhaba%20Cafu%20Coffee!%20Siparis%20vermek%20istiyorum."
          className="inline-flex items-center rounded-full bg-brand.ink text-white px-3 py-1 text-sm md:px-4 md:py-2 hover:opacity-90"
        >
          WhatsApp Order
        </a>
      </Container>
    </header>
  )
}
