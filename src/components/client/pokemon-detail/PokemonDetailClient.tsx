'use client'

import { PokemonImageCard } from './PokemonImageCard'
import { PokemonInfoCard } from './PokemonInfoCard'
import { PokemonStatsCard } from './PokemonStatsCard'
import { PokemonAbilitiesCard } from './PokemonAbilitiesCard'
import { PokemonSpritesCard } from './PokemonSpritesCard'
import { PokemonTypeEffectiveness } from './PokemonTypeEffectiveness'
import { Ability, Cries, Mfe, Sprites, Stat } from '@/types'
import { PokemonMoves } from '@/components/client/pokemon-detail/PokemonMoves'

export default function PokemonDetailClient({
  id,
  name,
  types,
  height,
  weight,
  artwork,
  sprites,
  stats,
  abilities,
  cries,
  moves,
}: {
  id: number
  name: string
  types: string[]
  height: number
  weight: number
  artwork?: string | null
  sprites: Sprites
  stats: Stat[]
  abilities: Ability[]
  cries: Cries
  moves: Mfe[]
}) {
  return (
    <>
      <div className='grid gap-6 md:grid-cols-5 auto-rows-[minmax(120px,_auto)] font-sans'>
        <PokemonImageCard id={id} name={name} artwork={artwork} cries={cries} />

        <PokemonInfoCard
          name={name}
          types={types}
          height={height}
          weight={weight}
        />

        <PokemonStatsCard stats={stats} />

        <div className='md:col-span-2 flex flex-col gap-6'>
          <PokemonAbilitiesCard abilities={abilities} />
          <PokemonSpritesCard name={name} sprites={sprites} />
        </div>

        <PokemonTypeEffectiveness types={types} />
      </div>
      <PokemonMoves moves={moves} />
    </>
  )
}
