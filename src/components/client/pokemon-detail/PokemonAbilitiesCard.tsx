'use client'

import { Card, CardHeader, CardBody, Chip, Tooltip } from '@heroui/react'
import { Ability } from '@/types'
import { useGsapFadeIn } from '@/components/hooks/useGsapFadeIn'

type PokemonAbilitiesCardProps = {
  abilities: Ability[]
}

export function PokemonAbilitiesCard({ abilities }: PokemonAbilitiesCardProps) {
  const ref = useGsapFadeIn<HTMLDivElement>({ y: 40 })
  return (
    <Card
      ref={ref}
      className='flex-1 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'
    >
      <CardHeader className='pb-2'>
        <h2 className='text-xl font-bold text-pokeblue-900 dark:text-white'>
          Habilidades
        </h2>
      </CardHeader>
      <CardBody className='p-6'>
        <div className='flex flex-wrap gap-2'>
          {abilities.map((a) => (
            <Tooltip
              key={a.ability.name}
              content={a.ability.name.replace(/-/g, ' ')}
              placement='top'
            >
              <Chip
                className={`capitalize font-sans font-medium text-sm px-3 py-1 transition-all ${
                  a.is_hidden
                    ? 'bg-gradient-to-r from-pikachu-300 to-pikachu-400 text-white'
                    : 'bg-gradient-to-r from-pokeblue-400 to-pokeblue-600 text-white'
                } shadow-md hover:scale-105`}
                size='sm'
              >
                {a.ability.name.replace(/-/g, ' ')}
                {a.is_hidden && ' (hidden)'}
              </Chip>
            </Tooltip>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
