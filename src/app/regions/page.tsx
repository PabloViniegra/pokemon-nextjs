import { Suspense } from 'react'
import RegionsServer from '@/components/server/RegionServer'
import RegionsSkeleton from '@/components/client/skeletons/skeletons'

export const revalidate = 86400

export default async function RegionsPage() {
  return (
    <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 font-sans'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Regiones Pokémon</h1>
        <p className='text-foreground-500 text-sm'>Fuente: PokéAPI</p>
      </div>

      <Suspense fallback={<RegionsSkeleton />}>
        <RegionsServer />
      </Suspense>
    </main>
  )
}
