'use server'

import { getPokemon } from '@/lib/pokemon'
import { convertPokemonToShortPokemon } from '@/utils/pokemon'
import type { ShortPokemon } from '@/types'

export async function getShortPokemonsByIds(
  ids: number[]
): Promise<ShortPokemon[]> {
  if (!ids.length) return []
  const uniq = Array.from(new Set(ids)).sort((a, b) => a - b)

  const pokemons = await Promise.all(
    uniq.map(async (id) => {
      try {
        const pokemon = await getPokemon(id)
        return convertPokemonToShortPokemon(pokemon)
      } catch (error) {
        console.error(`Error al obtener el pokémon ${id}:`, error)
        return null
      }
    })
  )
  return pokemons.filter(Boolean) as ShortPokemon[]
}
