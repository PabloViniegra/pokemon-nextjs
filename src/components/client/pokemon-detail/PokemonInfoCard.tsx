'use client'

import { Card, CardBody, Chip } from '@heroui/react'
import { Ruler, Weight } from 'lucide-react'
import { typeColors } from '@/types'
import { useGsapFadeIn } from '@/components/hooks/useGsapFadeIn'

type PokemonInfoCardProps = {
  name: string
  types: string[]
  height: number
  weight: number
}

export function PokemonInfoCard({
  name,
  types,
  height,
  weight,
}: PokemonInfoCardProps) {
  const ref = useGsapFadeIn<HTMLDivElement>({ y: 40 })
  return (
    <Card
      ref={ref}
      className='md:col-span-3 row-span-1 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'
    >
      <CardBody className='p-6'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-4'>
          <div className='flex-1'>
            <h1 className='text-3xl font-bold font-display capitalize text-pokeblue-900 dark:text-white mb-2 tracking-tight'>
              <span className='text-pokeblue-900 dark:text-white'>{name}</span>
            </h1>
            <div className='flex flex-wrap gap-2 mt-3'>
              {types.map((t) => {
                const typeColor =
                  typeColors[t.toLowerCase()] || 'bg-neutral-500'
                return (
                  <Chip
                    key={t}
                    className={`capitalize font-sans font-medium text-sm px-3 py-1 text-white ${typeColor} shadow-md hover:scale-105 transition-transform`}
                    size='sm'
                  >
                    {t}
                  </Chip>
                )
              })}
            </div>
          </div>
          <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 min-w-[140px] border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center gap-2 text-pokeblue-800 dark:text-pokeblue-200'>
                <Ruler className='w-4 h-4 text-pokeblue-600 dark:text-pokeblue-400' />
                <span>
                  Altura: <span className='font-semibold'>{height / 10}m</span>
                </span>
              </div>
              <div className='flex items-center gap-2 text-pokeblue-800 dark:text-pokeblue-200'>
                <Weight className='w-4 h-4 text-pokeblue-600 dark:text-pokeblue-400' />
                <span>
                  Peso: <span className='font-semibold'>{weight / 10}kg</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
