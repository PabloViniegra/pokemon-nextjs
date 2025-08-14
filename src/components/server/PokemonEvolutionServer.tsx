import EvolutionChainClient from '@/components/client/pokemon-detail/PokemonEvolutionClient'
import { getPokemonImage, getSpecies } from '@/lib/pokemon'
import { EvolutionNode, EvolutionChainResp, FlatNode, EvoDetail } from '@/types'

function extractIdFromUrl(url: string) {
  const parts = url.split('/').filter(Boolean)
  return Number(parts[parts.length - 1])
}

function flattenChain(
  node: EvolutionNode,
  acc: FlatNode[] = [],
  from?: string,
  stage: number = 0
): FlatNode[] {
  const speciesId = extractIdFromUrl(node.species.url)
  const details = (node.evolution_details?.[0] ?? {}) as EvoDetail

  acc.push({
    name: node.species.name,
    id: speciesId,
    from,
    stage,
    minLevel: details.min_level ?? null,
    trigger: details?.trigger?.name ?? null,
    item: details?.item?.name ?? details?.held_item?.name ?? null,
    timeOfDay: details?.time_of_day ?? null,
    moveType: details?.known_move_type?.name ?? null,
    location: details?.location?.name ?? null,
  })

  node.evolves_to?.forEach((child) =>
    flattenChain(child, acc, node.species.name, stage + 1)
  )

  return acc
}

async function getChainByUrl(url: string) {
  const r = await fetch(url, { next: { revalidate: 86400 } })
  if (!r.ok) throw new Error('No se pudo obtener evolution-chain')
  const data = (await r.json()) as EvolutionChainResp
  return flattenChain(data.chain)
}

export default async function PokemonEvolutionServer({
  idOrName,
}: {
  idOrName: string
}) {
  const species = await getSpecies(idOrName)
  if (!species?.evolution_chain?.url) {
    return null
  }

  const rows = await getChainByUrl(species.evolution_chain.url)

  const nodes = await Promise.all(
    rows.map(async (n) => ({
      ...n,
      image: await getPokemonImage(n.name),
    }))
  )

  nodes.sort((a, b) => a.stage - b.stage)

  return <EvolutionChainClient nodes={nodes} />
}
