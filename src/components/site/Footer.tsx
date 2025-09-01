import { Container } from '@/components/ui/Container'
import Link from 'next/link'
// Footer component with contact and quick links
// Note: Replace placeholder values with actual data
// WhatsApp number, email, and social media links should be updated
// Address and hours should reflect the actual location details
// Quick links should point to the correct sections/pages


export function Footer() {

    // The current year is dynamically generated

    // The layout is responsive, adjusting for different screen sizes

    // All links open in a new tab where appropriate

    return (
    <footer className="border-t border-black/5 bg-white">
      <Container className="py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="font-display text-base font-semibold">Cafu Coffee</div>
          <p className="mt-2 text-black/70">Crafted in Ankara. © {new Date().getFullYear()}.</p>
        </div>

        <div>
          <div className="font-medium">Visit</div>
          <ul className="mt-2 space-y-2">
            <li>Mahalle Cad. No: 12, Ankara, Türkiye</li>
            <li>08:00–23:00 (daily)</li>
            <li>
              <a className="underline underline-offset-2" href="https://maps.google.com" target="_blank" rel="noreferrer">
                Maps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-medium">Contact</div>
          <ul className="mt-2 space-y-2">
            <li><a className="underline underline-offset-2" href="tel:+905XXXXXXXXX">+90 5XX XXX XX XX</a></li>
            <li><a className="underline underline-offset-2" href="mailto:hello@cafu.coffee">hello@cafu.coffee</a></li>
            <li><a className="underline underline-offset-2" href="https://www.instagram.com/cafucoffee/" target="_blank" rel="noreferrer">@cafucoffee</a></li>
          </ul>
        </div>

        <div>
          <div className="font-medium">Quick Links</div>
          <ul className="mt-2 space-y-2">
            <li><a href="/#menu" className="hover:underline">Menu</a></li>
            <li><a href="/#visit" className="hover:underline">Visit</a></li>
            <li><a href="/#instagram" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
