import HeaderText from '@/components/client/home/HeaderText'
import RandomPokemonSkeleton, {
  SectionSkeleton,
  TypeInsightsSkeleton,
} from '@/components/client/skeletons/skeletons'
import KpiCards from '@/components/server/KpiCards'
import RandomPokemonCards from '@/components/server/RandomPokemonCards'
import TypeInsightsPanel from '@/components/server/TypeInsightsPanel'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-auto mt-5'>
      <div className='relative w-full mb-12 mt-12 flex flex-col items-center'>
        <HeaderText text='Pokemon Dashboard' />
      </div>

      <section className='grid gap-6 md:grid-cols-6 auto-rows-[minmax(150px,_auto)]'>
        <div className='md:col-span-4 row-span-1'>
          <Suspense fallback={<SectionSkeleton />}>
            <KpiCards />
          </Suspense>
        </div>
        <div className='md:col-span-2 row-span-2'>
          <Suspense fallback={<RandomPokemonSkeleton />}>
            <RandomPokemonCards />
          </Suspense>
        </div>
        <div className='md:col-span-4 row-span-1'>
          <Suspense fallback={<TypeInsightsSkeleton />}>
            <TypeInsightsPanel />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
