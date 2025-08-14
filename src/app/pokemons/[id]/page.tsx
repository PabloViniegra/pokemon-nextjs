import { Suspense } from 'react'
import PokemonDetailServer from '@/components/server/PokemonDetailServer'
import PokemonDetailSkeleton, {
  PokemonBreedingSkeleton,
} from '@/components/client/skeletons/skeletons'
import PokemonEvolutionServer from '@/components/server/PokemonEvolutionServer'
import PokemonEvolutionSkeleton from '@/components/client/skeletons/skeletons'
import type { Metadata } from 'next'
import PokemonBreedingServer from '@/components/server/PokemonBreedingServer'
import { getPokemonName } from '@/lib/pokemon'

type Props = { params: { id: string } }

export const revalidate = 3600

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const pokemonName = await getPokemonName(Number(id))
  const title = `${
    pokemonName ? `${pokemonName} | ` : ''
  }Pokémon #${id} | Pokédex`
  const description = `Discover detailed information about ${
    pokemonName || `Pokémon #${id}`
  }, including stats, abilities, evolutions, and more in our comprehensive Pokédex.`

  return {
    title,
    description,
    keywords: [
      'Pokémon',
      pokemonName || '',
      'Pokédex',
      'Pokémon stats',
      'Pokémon abilities',
      'Pokémon evolutions',
      'Pokémon details',
      'Pokémon information',
    ].filter(Boolean) as string[],
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'en_US',
      url: `https://yourdomain.com/pokemons/${id}`,
      siteName: 'Pokémon Dashboard',
      images: [
        {
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          width: 1024,
          height: 1024,
          alt: pokemonName || `Pokémon #${id}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      ],
    },
    alternates: {
      canonical: `https://yourdomain.com/pokemons/${id}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  }
}

export default async function PokemonDetailPage({ params }: Props) {
  const { id } = await params
  return (
    <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6'>
      <Suspense fallback={<PokemonDetailSkeleton />}>
        <PokemonDetailServer id={Number(id)} />
      </Suspense>
      <Suspense fallback={<PokemonEvolutionSkeleton />}>
        <PokemonEvolutionServer idOrName={id} />
      </Suspense>
      <Suspense fallback={<PokemonBreedingSkeleton />}>
        <PokemonBreedingServer idOrName={id} />
      </Suspense>
    </main>
  )
}
