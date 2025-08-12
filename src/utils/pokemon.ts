import { Pokemon, ShortPokemon } from '@/types'

export function convertPokemonToShortPokemon(pokemon: Pokemon): ShortPokemon {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image:
      pokemon.sprites?.other?.['official-artwork']?.front_default ??
      pokemon.sprites?.front_default,
    types: pokemon.types.map((t) => t.type.name),
    stats: pokemon.stats.reduce((acc, stat) => {
      acc[stat.stat.name as keyof typeof acc] = stat.base_stat
      return acc
    }, {} as { hp: number; attack: number; defense: number; speed: number; special_attack: number; special_defense: number }),
  }
}
