import Image from 'next/image'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="section">
      <Container className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Roasted with heart. Served with soul.
          </h1>
          <p className="mt-4 text-black/70 max-w-prose">
            Small-batch roasts, signature drinks, and warm community vibes. Come for the coffee, stay for the conversations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/905XXXXXXXXX?text=Merhaba%20Cafu%20Coffee!%20Siparis%20vermek%20istiyorum."
              className="inline-flex items-center rounded-full bg-brand.ink text-white px-5 py-2 text-sm hover:opacity-90"
            >
              WhatsApp Order
            </a>
            <a
              href="https://maps.google.com/?q=Cafu%20Coffee"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border px-5 py-2 text-sm hover:bg-black/5"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] md:aspect-[5/4] rounded-card overflow-hidden shadow-card">
          <Image
            src="/coffee/hero.jpg"
            alt="Cafu Coffee interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  )
}
