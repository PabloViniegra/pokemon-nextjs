import { getPokemonByName } from '@/lib/pokemon'
import { convertPokemonToShortPokemon } from '@/utils/pokemon'
import { PokemonCard } from '@/components/client/pokedex/PokemonCard'

export default async function PokedexGrid({ names }: { names: string[] }) {
  const pokemons = await Promise.all(names.map(getPokemonByName))

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
      {pokemons.map((p) => {
        const shortP = convertPokemonToShortPokemon(p)
        return <PokemonCard key={shortP.id} pokemon={shortP} />
      })}
    </section>
  )
}
