import { Suspense } from 'react'
import SavedClient from '@/components/client/saved/SavedClient'
import SavedPageSkeleton from '@/components/client/skeletons/skeletons'

export const dynamic = 'force-dynamic'

export default async function SavedPage() {
  return (
    <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 font-sans'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Guardados</h1>
      </div>

      <Suspense fallback={<SavedPageSkeleton />}>
        <SavedClient />
      </Suspense>
    </main>
  )
}
