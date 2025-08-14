'use server'

import RegionsClient from '@/components/client/region/RegionsClient'
import { getRegionDetail, getRegionsList } from '@/lib/pokemon'

export default async function RegionsServer() {
  const regions = await getRegionsList()
  const details = await Promise.all(regions.map((r) => getRegionDetail(r.url)))

  details.sort((a, b) => a.id - b.id)

  const rows = details.map((r) => ({
    id: r.id,
    name: r.name,
    generation: r.main_generation?.name ?? null,
    pokedexes: r.pokedexes.map((p) => p.name),
    versionGroups: r.version_groups.map((v) => v.name),
    locationsCount: r.locations.length,
  }))

  return <RegionsClient rows={rows} />
}
