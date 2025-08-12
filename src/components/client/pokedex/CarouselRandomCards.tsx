'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Keyboard,
} from 'swiper/modules'
import { ShortPokemon } from '@/types'
import { PokemonCard } from '@/components/client/pokedex/PokemonCard'

export default function CarouselRandomCards({
  items,
}: {
  items: ShortPokemon[]
}) {
  const slideW = '280px'
  return (
    <div className='relative'>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Keyboard]}
        effect='coverflow'
        centeredSlides
        grabCursor
        keyboard={{ enabled: true }}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        slidesPerView={'auto'}
        spaceBetween={24}
        coverflowEffect={{
          rotate: 8,
          stretch: 0,
          depth: 140,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className='!px-2 overflow-visible'
      >
        {items.map((p) => (
          <SwiperSlide key={p.id} className={`!w-[${slideW}] bg-transparent`}>
            <div className={`w-[${slideW}]`}>
              <PokemonCard pokemon={p} fixedWidth={slideW} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
