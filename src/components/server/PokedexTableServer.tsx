import PokemonTable from '@/components/client/pokedex/PokemonTable'
import { getPokemons } from '@/lib/pokemon'

export default async function PokedexTableServer({
  page,
  q,
}: {
  page: number
  q: string
}) {
  const limit = 20
  const offset = (page - 1) * limit
  const list = await getPokemons({ limit, offset })

  const filtered = (
    q ? list.results.filter((r) => r.name.includes(q)) : list.results
  ).map((r) => ({ name: r.name }))

  return <PokemonTable rows={filtered} />
}
