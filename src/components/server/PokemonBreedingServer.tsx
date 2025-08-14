import { getSpeciesBreeding } from '@/lib/pokemon'
import PokemonBreedingCard from '@/components/client/pokemon-detail/PokemonBreedingCard'

export default async function PokemonBreedingServer({
  idOrName,
}: {
  idOrName: string | null
}) {
  const species = await getSpeciesBreeding(idOrName ?? '')
  if (!species) {
    return null
  }

  const female = species.gender_rate === -1 ? 0 : species.gender_rate * 12.5
  const male = species.gender_rate === -1 ? 0 : 100 - female
  const genderless = species.gender_rate === -1

  const cycles = species.hatch_counter ?? 0
  const steps = cycles * 255

  return (
    <PokemonBreedingCard
      gender={{ male, female, genderless }}
      eggGroups={species.egg_groups.map((g) => g.name)}
      hatch={{ cycles, steps }}
      captureRate={species.capture_rate ?? null}
      baseHappiness={species.base_happiness ?? null}
      growthRate={species.growth_rate?.name ?? null}
    />
  )
}
