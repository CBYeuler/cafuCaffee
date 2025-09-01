import { Hero } from '@/components/sections/Hero'
import { FeaturedItems } from '@/components/sections/FeaturedItems'
import { MenuTeaser } from '@/components/sections/MenuTeaser'
import { HoursAndLocation } from '@/components/sections/HoursAndLocation'
import { InstagramStrip } from '@/components/sections/InstagramStrip'

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedItems />
      <MenuTeaser />
      <HoursAndLocation />
      <InstagramStrip />
    </>
  )
}
