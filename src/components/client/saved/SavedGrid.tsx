'use client'

import { PokemonCard } from '@/components/client/pokedex/PokemonCard'
import type { ShortPokemon } from '@/types'

interface SavedGridProps {
  items: ShortPokemon[]
}

export default function SavedGrid({ items }: SavedGridProps) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
      {items.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  )
}
