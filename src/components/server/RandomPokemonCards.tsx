import { getRandomPokemonBatch } from '@/lib/pokemon'
import { convertPokemonToShortPokemon } from '@/utils/pokemon'
import { Pokemon } from '@/types'
import CarouselRandomCards from '@/components/client/pokedex/CarouselRandomCards'

export const dynamic = 'force-dynamic'

export default async function RandomPokemonCards() {
  const pokemons: Pokemon[] = await getRandomPokemonBatch(10)
  const items = pokemons.map(convertPokemonToShortPokemon)

  return (
    <>
      <h2 className='text-xl font-medium text-foreground font-sans mb-4'>
        Pokémons Destacados
      </h2>
      <CarouselRandomCards items={items} />
    </>
  )
}
