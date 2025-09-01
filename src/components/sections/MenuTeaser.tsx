import { Container } from '@/components/ui/Container'

const MENU = [
  {
    category: 'Classics',
    items: [
      { name: 'Espresso', price: '85 ₺' },
      { name: 'Americano', price: '95 ₺' },
      { name: 'Cappuccino', price: '115 ₺' },
    ],
  },
  {
    category: 'Specialty',
    items: [
      { name: 'Spanish Latte', price: '135 ₺' },
      { name: 'V60 Pour-Over', price: '140 ₺' },
    ],
  },
]

export function MenuTeaser() {
  return (
    <section id="menu" className="section bg-white/60 border-y border-black/5">
      <Container>
        <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Menu Highlights</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {MENU.map((cat) => (
            <div key={cat.category} className="card p-5">
              <div className="font-semibold mb-3">{cat.category}</div>
              <ul className="space-y-2 text-sm">
                {cat.items.map((it) => (
                  <li key={it.name} className="flex items-center justify-between">
                    <span>{it.name}</span>
                    <span className="text-black/60">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href="/menu" className="inline-block underline underline-offset-4">See full menu</a>
        </div>
      </Container>
    </section>
  )
}
