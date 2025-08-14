import { getPokemon } from '@/lib/pokemon'
import PokemonDetailClient from '@/components/client/pokemon-detail/PokemonDetailClient'

export default async function PokemonDetailServer({ id }: { id: number }) {
  const pokemon = await getPokemon(id)

  const artwork =
    pokemon.sprites.other?.['official-artwork']?.front_default ??
    pokemon.sprites.other?.home?.front_default ??
    pokemon.sprites.front_default

  const types = pokemon.types.map((t) => t.type.name)

  return (
    <PokemonDetailClient
      id={pokemon.id}
      name={pokemon.name}
      height={pokemon.height}
      weight={pokemon.weight}
      types={types}
      artwork={artwork}
      sprites={pokemon.sprites}
      stats={pokemon.stats}
      abilities={pokemon.abilities}
      cries={pokemon.cries}
      moves={pokemon.moves}
    />
  )
}
