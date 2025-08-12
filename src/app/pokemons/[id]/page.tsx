import { Suspense } from 'react'
import PokemonDetailServer from '@/components/server/PokemonDetailServer'
import PokemonDetailSkeleton from '@/components/client/skeletons/skeletons'
import PokemonEvolutionServer from '@/components/server/PokemonEvolutionServer'
import PokemonEvolutionSkeleton from '@/components/client/skeletons/skeletons'
import type { Metadata } from 'next'

type Props = { params: { id: string } }

export const revalidate = 3600

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Pokémon #${params.id} | Pokédex`,
    description: `Detalle del Pokémon #${params.id}`,
  }
}

export default function PokemonDetailPage({ params }: Props) {
  const id = Number(params.id)
  return (
    <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6'>
      <Suspense fallback={<PokemonDetailSkeleton />}>
        <PokemonDetailServer id={id} />
      </Suspense>
      <Suspense fallback={<PokemonEvolutionSkeleton />}>
        <PokemonEvolutionServer idOrName={params.id} />
      </Suspense>
    </main>
  )
}
