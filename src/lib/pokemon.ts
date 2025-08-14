import {
  EvolutionChainResp,
  EvolutionDetail,
  EvolutionNode,
  NamedAPI,
  Pokemon,
  PokemonList,
  RegionDetail,
  SpeciesBreeding,
  SpeciesResp,
  TypeResp,
} from '@/types'

const POKEMON_API = process.env.NEXT_POKEAPI_URL

export const getPokemons = async ({
  limit = 20,
  offset = 0,
}: {
  limit: number
  offset: number
}): Promise<PokemonList> => {
  const res = await fetch(
    `${POKEMON_API}/pokemon?limit=${limit}&offset=${offset}`,
    { cache: 'no-store' }
  )
  return await res.json()
}

export async function getPokemon(id: number): Promise<Pokemon> {
  const res = await fetch(`${POKEMON_API}/pokemon/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('No se encontró el pokémon')
  return res.json()
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const res = await fetch(`${POKEMON_API}/pokemon/${name}`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('No se encontró el pokémon')
  return res.json()
}

export async function getKpis() {
  const [species, items, abilities] = await Promise.all([
    fetch(`${POKEMON_API}/pokemon-species?limit=1`, { cache: 'no-store' }),
    fetch(`${POKEMON_API}/item?limit=1`, { cache: 'no-store' }),
    fetch(`${POKEMON_API}/ability?limit=1`, { cache: 'no-store' }),
  ])
  const parse = async (r: Response) => (await r.json()).count as number
  return {
    species: await parse(species),
    items: await parse(items),
    abilities: await parse(abilities),
  }
}

export async function getPokemonCount(): Promise<number> {
  const res = await fetch(`${POKEMON_API}/pokemon?limit=1`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('No se pudo obtener el total de pokémon')
  const data = await res.json()
  return data.count as number
}

export async function getRandomPokemonBatch(n = 5): Promise<Pokemon[]> {
  const total = await getPokemonCount()
  const offset = Math.max(0, Math.floor(Math.random() * Math.max(1, total - n)))
  const listRes = await fetch(
    `${POKEMON_API}/pokemon?limit=${n}&offset=${offset}`,
    {
      cache: 'no-store',
    }
  )
  if (!listRes.ok) throw new Error('No se pudo obtener la lista de pokémon')
  const list = (await listRes.json()).results as { name: string; url: string }[]
  return Promise.all(list.map((p) => getPokemonByName(p.name)))
}

export async function getAllPokemonNames(): Promise<string[]> {
  const res = await fetch(`${POKEMON_API}/pokemon?limit=20000&offset=0`, {
    next: { revalidate: 86400 },
  })
  if (!res.ok) throw new Error('No se pudo obtener la lista de nombres')
  const data = await res.json()
  return data.results.map((r: any) => r.name as string)
}

export async function getNamesByTypes(types: string[]): Promise<Set<string>> {
  const lists = await Promise.all(
    types.map(async (t) => {
      const r = await fetch(`${POKEMON_API}/type/${t}`, {
        next: { revalidate: 86400 },
      })
      if (!r.ok) return new Set<string>()
      const data = await r.json()
      return new Set<string>(
        data.pokemon.map((p: any) => p.pokemon.name as string)
      )
    })
  )

  if (lists.length === 0) return new Set<string>()

  return lists.reduce((acc, set) => {
    if (acc === null) return new Set(set)
    const next = new Set<string>()
    acc.forEach((name) => set.has(name) && next.add(name))
    return next
  }, null as Set<string> | null) as Set<string>
}

export async function getType(name: string): Promise<TypeResp> {
  const r = await fetch(`${POKEMON_API}/type/${name}`, {
    next: { revalidate: 86400 },
  })
  if (!r.ok) throw new Error('No se pudo obtener el tipo ' + name)
  return r.json()
}

export async function getSpecies(idOrName: string) {
  const r = await fetch(`${POKEMON_API}/pokemon-species/${idOrName}`, {
    next: { revalidate: 86400 },
  })

  if (!r.ok) {
    console.warn(`Species no encontrada para ${idOrName}`)
    return null
  }

  return (await r.json()) as SpeciesResp
}

export async function getPokemonImage(name: string) {
  const r = await fetch(`${POKEMON_API}/pokemon/${name}`, {
    next: { revalidate: 86400 },
  })
  if (!r.ok) return null
  const data = await r.json()
  return (
    data?.sprites?.other?.['official-artwork']?.front_default ??
    data?.sprites?.front_default ??
    null
  )
}

export async function getSpeciesBreeding(
  idOrName: string
): Promise<SpeciesBreeding | null> {
  const r = await fetch(`${POKEMON_API}/pokemon-species/${idOrName}`, {
    next: { revalidate: 86400 },
  })

  if (!r.ok) {
    console.warn(`No se encontró species (breeding) para ${idOrName}`)
    return null
  }

  const data = await r.json()
  return {
    gender_rate: data.gender_rate,
    hatch_counter: data.hatch_counter,
    egg_groups: data.egg_groups,
    capture_rate: data.capture_rate,
    base_happiness: data.base_happiness,
    growth_rate: data.growth_rate,
  }
}

export async function getPokemonName(id: number): Promise<string | null> {
  const response = await fetch(`${POKEMON_API}/pokemon/${id}`)
  if (!response.ok) return null
  const data = await response.json()
  return data.name || null
}

export async function getRegionsList(): Promise<NamedAPI[]> {
  const r = await fetch(`${POKEMON_API}/region?limit=1000`, {
    next: { revalidate: 86400 },
  })
  if (!r.ok) throw new Error('No se pudo obtener la lista de regiones')
  const data = await r.json()
  return data.results as NamedAPI[]
}

export async function getRegionDetail(url: string): Promise<RegionDetail> {
  const r = await fetch(url, { next: { revalidate: 86400 } })
  if (!r.ok) throw new Error('No se pudo obtener una región')
  const d = await r.json()
  return {
    id: d.id,
    name: d.name,
    main_generation: d.main_generation ?? null,
    pokedexes: d.pokedexes ?? [],
    version_groups: d.version_groups ?? [],
    locations: d.locations ?? [],
  }
}

export async function fetchJson<T>(
  url: string,
  revalidate = 86400
): Promise<T> {
  const r = await fetch(url, { next: { revalidate } })
  if (!r.ok) throw new Error(String(r.status))
  return r.json()
}
