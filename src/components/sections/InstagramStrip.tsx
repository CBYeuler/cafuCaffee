import Image from 'next/image'
import { Container } from '@/components/ui/Container'

const items = [
  { href: 'https://www.instagram.com/cafucoffee/', image: '/instagram/1.jpg', alt: 'Cafu Coffee IG 1' },
  { href: 'https://www.instagram.com/cafucoffee/', image: '/instagram/2.jpg', alt: 'Cafu Coffee IG 2' },
  { href: 'https://www.instagram.com/cafucoffee/', image: '/instagram/3.jpg', alt: 'Cafu Coffee IG 3' },
  { href: 'https://www.instagram.com/cafucoffee/', image: '/instagram/4.jpg', alt: 'Cafu Coffee IG 4' },
]

export function InstagramStrip() {
  return (
    <section id="instagram" className="section bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">From Instagram</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <a key={i} href={it.href} target="_blank" rel="noreferrer" className="block rounded-card overflow-hidden shadow-card border border-black/5">
              <div className="relative aspect-square">
                <Image src={it.image} alt={it.alt} fill className="object-cover" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
