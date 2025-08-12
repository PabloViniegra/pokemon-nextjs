'use client'

import { Card, CardHeader, CardBody, Chip } from '@heroui/react'
import { Swords, Shield, HeartPulse } from 'lucide-react'
import { typeChart } from '@/types'
import { useGsapFadeIn } from '@/components/hooks/useGsapFadeIn'

type PokemonTypeEffectivenessProps = {
  types: string[]
}

const getTypeWeaknesses = (type: string) =>
  typeChart[type as keyof typeof typeChart]?.weak || []
const getTypeResistances = (type: string) =>
  typeChart[type as keyof typeof typeChart]?.resist || []
const getTypeImmunities = (type: string) =>
  typeChart[type as keyof typeof typeChart]?.immune || []

export function PokemonTypeEffectiveness({
  types,
}: PokemonTypeEffectivenessProps) {
  const ref = useGsapFadeIn<HTMLDivElement>({ y: 40 })
  return (
    <Card
      ref={ref}
      className='md:col-span-3 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full'
    >
      <CardHeader className='pb-1'>
        <h2 className='text-xl font-bold text-pokeblue-900 dark:text-white flex items-center gap-2'>
          <Shield className='w-5 h-5 text-pikachu-500' />
          Eficacia por tipo
        </h2>
      </CardHeader>
      <CardBody className='p-2 pb-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          <div className='space-y-2'>
            <div className='flex items-center gap-2 text-pokered-600 dark:text-pokered-400'>
              <Swords className='w-5 h-5' />
              <h3 className='font-bold'>Debilidad</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {types.map((type) => {
                const weaknesses = getTypeWeaknesses(type.toLowerCase())
                return weaknesses.map((weakness) => (
                  <Chip
                    key={weakness}
                    className='capitalize font-sans font-medium text-sm px-3 py-1 bg-gradient-to-r from-pokered-400 to-pokered-500 text-white shadow-md hover:scale-105 transition-transform'
                    size='sm'
                  >
                    {weakness}
                  </Chip>
                ))
              })}
            </div>
          </div>
          <div className='space-y-2'>
            <div className='flex items-center gap-2 text-green-600 dark:text-green-400'>
              <Shield className='w-5 h-5' />
              <h3 className='font-bold'>Resistencia</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {types.map((type) => {
                const resistances = getTypeResistances(type.toLowerCase())
                return resistances.map((resistance) => (
                  <Chip
                    key={resistance}
                    className='capitalize font-sans font-medium text-sm px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:scale-105 transition-transform'
                    size='sm'
                  >
                    {resistance}
                  </Chip>
                ))
              })}
            </div>
          </div>
          <div className='space-y-2'>
            <div className='flex items-center gap-2 text-pokeblue-600 dark:text-pokeblue-400'>
              <HeartPulse className='w-5 h-5' />
              <h3 className='font-bold text-sm'>Inmune</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {types.map((type) => {
                const immunities = getTypeImmunities(type.toLowerCase())
                return immunities.map((immunity) => (
                  <Chip
                    key={immunity}
                    className='capitalize font-sans font-medium text-sm px-3 py-1 bg-gradient-to-r from-pokeblue-400 to-pokeblue-500 text-white shadow-md hover:scale-105 transition-transform'
                    size='sm'
                  >
                    {immunity}
                  </Chip>
                ))
              })}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
