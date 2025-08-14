import { Suspense } from 'react'
import PokedexSearchBar from '@/components/client/pokedex/PokedexSearchBar'
import PokedexFilters from '@/components/client/pokedex/PokedexFilters'
import PokedexGrid from '@/components/server/PokedexGrid'
import { PokedexGridSkeleton } from '@/components/client/skeletons/skeletons'
import { getAllPokemonNames, getNamesByTypes } from '@/lib/pokemon'
import PokedexPagination from '@/components/client/pokedex/PokedexPagination'
import { Metadata } from 'next'

const baseMetadata = {
  title: 'Pokédex | Explore All Pokémon | Pokémon Dashboard',
  description:
    'Search and explore all Pokémon in the National Pokédex. Filter by type, find your favorite Pokémon, and discover new ones!',
  keywords: [
    'Pokédex',
    'Pokémon list',
    'Pokémon search',
    'National Pokédex',
    'Pokémon types',
    'Pokémon filter',
    'All Pokémon',
  ],
  openGraph: {
    title: 'Pokédex | Explore All Pokémon | Pokémon Dashboard',
    description:
      'Search and filter through the complete National Pokédex. Find detailed information about all Pokémon in one place!',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com/pokedex',
    siteName: 'Pokémon Dashboard',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokédex | Explore All Pokémon | Pokémon Dashboard',
    description: 'Search and explore all Pokémon in the National Pokédex',
  },
  alternates: {
    canonical: 'https://yourdomain.com/pokedex',
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

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { q, types } = searchParams || {}
  const typesSelected = (types ?? '').split(',').filter(Boolean)
  const metadata = { ...baseMetadata }
  let title = 'Pokédex | Explore All Pokémon'
  let description = 'Search and explore all Pokémon in the National Pokédex.'

  if (q) {
    title = `Search: ${q} | Pokédex`
    description = `Search results for "${q}" in the Pokédex.`
  }

  if (typesSelected.length > 0) {
    const typeList = typesSelected.join(', ')
    title = `${
      typeList.charAt(0).toUpperCase() + typeList.slice(1)
    } Type Pokémon | Pokédex`
    description = `Filtered by type: ${typeList}. ${description}`
  }

  metadata.title = title
  metadata.description = description
  metadata.openGraph = {
    ...metadata.openGraph,
    title,
    description,
  }
  metadata.twitter = {
    ...metadata.twitter,
    title,
    description,
  }

  return metadata
}

type Props = {
  searchParams: {
    q?: string
    page?: string
    types?: string
    perPage?: string
  }
}

export const dynamic = 'force-dynamic'

export default async function Pokedex({ searchParams }: Props) {
  const { q, page, perPage, types } = await searchParams
  const qLower = (q ?? '').toLowerCase().trim()
  const pageNum = Math.max(1, Number(page ?? '1'))
  const perPageNum = Math.min(60, Math.max(10, Number(perPage ?? 20)))
  const typesSelected = (types ?? '')
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)

  const allNames = await getAllPokemonNames()

  let filteredNames = allNames
  if (typesSelected.length > 0) {
    const byTypes = await getNamesByTypes(typesSelected)
    filteredNames = allNames.filter((n) => byTypes.has(n))
  }

  if (qLower) {
    filteredNames = filteredNames.filter((name) => name.includes(qLower))
  }

  const total = filteredNames.length
  const totalPages = Math.max(1, Math.ceil(total / perPageNum))
  const start = (pageNum - 1) * perPageNum
  const pageNames =
    pageNum > totalPages ? [] : filteredNames.slice(start, start + perPageNum)

  return (
    <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <h1 className='text-2xl font-semibold font-sans'>Pokédex</h1>
        <div className='flex gap-3 w-full sm:w-auto'>
          <PokedexSearchBar />
          <PokedexFilters />
        </div>
      </div>

      <p className='text-sm text-foreground-500 font-mono'>
        {total.toLocaleString()} resultados
        {q && (
          <>
            {' '}
            para “<span className='font-medium'>{q}</span>”
          </>
        )}
        {typesSelected.length > 0 && (
          <>
            {' '}
            · tipos:{' '}
            <span className='font-medium capitalize'>
              {typesSelected.join(', ')}
            </span>
          </>
        )}
      </p>

      <Suspense fallback={<PokedexGridSkeleton count={perPageNum} />}>
        <PokedexGrid names={pageNames} />
      </Suspense>
      <PokedexPagination page={pageNum} totalPages={totalPages} />
    </main>
  )
}
