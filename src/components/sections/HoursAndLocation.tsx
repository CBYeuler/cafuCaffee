import { Container } from '@/components/ui/Container'

export function HoursAndLocation() {
  return (
    <section id="visit" className="section">
      <Container className="grid gap-8 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Visit Us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><span className="font-medium">Address:</span> Mahalle Cad. No: 12, Ankara, Türkiye</li>
            <li><span className="font-medium">Hours:</span> Every day 08:00–23:00</li>
            <li><span className="font-medium">Phone:</span> <a href="tel:+905XXXXXXXXX" className="underline underline-offset-2">+90 5XX XXX XX XX</a></li>
            <li><span className="font-medium">Instagram:</span> <a href="https://www.instagram.com/cafucoffee/" target="_blank" rel="noreferrer" className="underline underline-offset-2">@cafucoffee</a></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/905XXXXXXXXX?text=Merhaba%20Cafu%20Coffee!%20Siparis%20vermek%20istiyorum."
              className="inline-flex items-center rounded-full bg-brand.ink text-white px-5 py-2 text-sm hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Cafu%20Coffee"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border px-5 py-2 text-sm hover:bg-black/5"
            >
              Directions
            </a>
          </div>
        </div>

        <div className="card overflow-hidden aspect-[4/3]">
          <iframe
            title="Cafu Coffee Map"
            src="https://www.google.com/maps/embed?pb=PLACEHOLDER_MAPS_EMBED"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  )
}
