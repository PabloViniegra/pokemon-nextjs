import { Suspense } from 'react'
import PokedexSearchBar from '@/components/client/pokedex/PokedexSearchBar'
import PokedexFilters from '@/components/client/pokedex/PokedexFilters'
import PokedexGrid from '@/components/server/PokedexGrid'
import { PokedexGridSkeleton } from '@/components/client/skeletons/skeletons'
import { getAllPokemonNames, getNamesByTypes } from '@/lib/pokemon'
import PokedexPagination from '@/components/client/pokedex/PokedexPagination'

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
  const q = (searchParams.q ?? '').toLowerCase().trim()
  const page = Math.max(1, Number(searchParams.page ?? '1'))
  const perPage = Math.min(60, Math.max(10, Number(searchParams.perPage ?? 20)))

  const typesSelected = (searchParams.types ?? '')
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)

  const allNames = await getAllPokemonNames()

  let filteredNames = allNames
  if (typesSelected.length > 0) {
    const byTypes = await getNamesByTypes(typesSelected)
    filteredNames = allNames.filter((n) => byTypes.has(n))
  }

  if (q) {
    filteredNames = filteredNames.filter((name) => name.includes(q))
  }

  const total = filteredNames.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const start = (page - 1) * perPage
  const pageNames =
    page > totalPages ? [] : filteredNames.slice(start, start + perPage)

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

      <Suspense fallback={<PokedexGridSkeleton count={perPage} />}>
        <PokedexGrid names={pageNames} />
      </Suspense>
      <PokedexPagination page={page} totalPages={totalPages} />
    </main>
  )
}
