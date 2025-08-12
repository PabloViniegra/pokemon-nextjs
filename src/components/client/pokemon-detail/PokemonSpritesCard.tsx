'use client'

import Image from 'next/image'
import { Card, CardHeader, CardBody, Tabs, Tab } from '@heroui/react'
import { Sprites } from '@/types'
import { useGsapFadeIn } from '@/components/hooks/useGsapFadeIn'

type PokemonSpritesCardProps = {
  name: string
  sprites: Sprites
}

export function PokemonSpritesCard({ name, sprites }: PokemonSpritesCardProps) {
  const ref = useGsapFadeIn<HTMLDivElement>({ y: 40 })
  const spriteTabs = [
    { key: 'default', label: 'Front', src: sprites.front_default },
    { key: 'back', label: 'Back', src: sprites.back_default },
    { key: 'shiny', label: 'Shiny', src: sprites.front_shiny },
    { key: 'backShiny', label: 'Back Shiny', src: sprites.back_shiny },
    {
      key: 'dream',
      label: 'Official',
      src: sprites.other?.['official-artwork']?.front_default,
    },
  ].filter((s) => s.src)

  return (
    <Card
      ref={ref}
      className='flex-1 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible'
    >
      <CardHeader className='pb-2'>
        <h2 className='text-xl font-bold text-pokeblue-900 dark:text-white'>
          Sprites
        </h2>
      </CardHeader>
      <CardBody className='p-6 overflow-visible'>
        <Tabs
          aria-label='Sprites'
          size='sm'
          classNames={{
            base: 'overflow-visible',
            tabList:
              'bg-pokeblue-100/50 dark:bg-pokeblue-900/30 p-1 rounded-lg flex-nowrap overflow-x-auto no-scrollbar',
            tab: 'px-3 h-8 text-xs font-sans font-medium whitespace-nowrap',
            tabContent: 'group-data-[selected=true]:text-white',
            cursor: 'bg-pokeblue-600 dark:bg-pikachu-500',
            panel: 'overflow-visible',
          }}
        >
          {spriteTabs.map((s) => (
            <Tab
              key={s.key}
              title={
                <div className='flex items-center gap-1.5 text-xs font-sans'>
                  <span className='group-data-[selected=true]:text-white'>
                    {s.label}
                  </span>
                </div>
              }
            >
              <div className='flex items-center justify-center p-3 bg-white/60 dark:bg-indigo-950/40 rounded-xl border border-pokeblue-200/50 dark:border-indigo-800/50 hover:bg-white/80 dark:hover:bg-indigo-950/60 transition-colors group min-h-[120px]'>
                <div className='relative group-hover:scale-110 transition-transform'>
                  <div className='absolute inset-0 bg-pikachu-400/10 rounded-full blur-md group-hover:blur-lg transition-all' />
                  <Image
                    src={s.src!}
                    alt={`${name} ${s.label}`}
                    width={96}
                    height={96}
                    className='object-contain h-24 w-24 relative z-10'
                  />
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      </CardBody>
    </Card>
  )
}
