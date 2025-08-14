import HeaderText from '@/components/client/home/HeaderText'
import RandomPokemonSkeleton, {
  SectionSkeleton,
  TypeInsightsSkeleton,
} from '@/components/client/skeletons/skeletons'
import KpiCards from '@/components/server/KpiCards'
import RandomPokemonCards from '@/components/server/RandomPokemonCards'
import TypeInsightsPanel from '@/components/server/TypeInsightsPanel'
import { Suspense } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pokémon Dashboard | Explore Pokémon Stats & Insights',
  description:
    'Discover comprehensive Pokémon statistics, type insights, and random Pokémon information. Your ultimate dashboard for all things Pokémon!',
  keywords: [
    'Pokémon',
    'Pokemon stats',
    'Pokemon types',
    'Pokemon dashboard',
    'Pokemon insights',
  ],
  openGraph: {
    title: 'Pokémon Dashboard | Explore Pokémon Stats & Insights',
    description:
      'Your ultimate dashboard for all things Pokémon! Explore stats, types, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Pokémon Dashboard',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokémon Dashboard | Explore Pokémon Stats & Insights',
    description: 'Your ultimate dashboard for all things Pokémon!',
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a202c' },
  ],
}

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
