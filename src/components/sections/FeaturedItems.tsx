import { Container } from '@/components/ui/Container'

const items = [
  { name: 'Spanish Latte', desc: 'Sweet milk, bold espresso', price: '135 ₺' },
  { name: 'Cold Brew', desc: '12-hour steep', price: '135 ₺' },
  { name: 'Cinnamon Roll', desc: 'House glaze', price: '95 ₺' },
]

export function FeaturedItems() {
  return (
    <section className="section">
      <Container>
        <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Today’s Picks</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.name} className="card p-5">
              <div className="font-medium">{it.name}</div>
              <p className="text-sm text-black/70">{it.desc}</p>
              <div className="mt-4 text-sm text-black/60">{it.price}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
