'use client'

import { Card, CardBody, CardHeader, Skeleton } from '@heroui/react'

export function SectionSkeleton() {
  return (
    <section className='space-y-4'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className='space-y-3 p-4 border border-default-200 rounded-lg'
          >
            <Skeleton className='h-6 w-24 rounded-md' />
            <Skeleton className='h-8 w-16 rounded-md' />
            <Skeleton className='h-1 w-12 rounded-full' />
          </div>
        ))}
      </div>
    </section>
  )
}

export function TableSkeleton() {
  return (
    <div className='overflow-hidden rounded-lg border border-default-200'>
      <div className='p-4 space-y-4'>
        <div className='grid grid-cols-4 gap-4'>
          {[...Array(4)].map((_, i) => (
            <Skeleton key={`header-${i}`} className='h-6 rounded-md' />
          ))}
        </div>
        <div className='space-y-3'>
          {[...Array(5)].map((_, rowIndex) => (
            <div key={rowIndex} className='grid grid-cols-4 gap-4 py-2'>
              {[...Array(4)].map((_, colIndex) => (
                <Skeleton
                  key={`row-${rowIndex}-col-${colIndex}`}
                  className='h-5 rounded-md'
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RandomPokemonSkeleton() {
  const items = Array.from({ length: 5 })
  const slideW = 280

  return (
    <section
      className='
        grid grid-flow-col auto-cols-[280px] gap-4
        overflow-x-hidden pb-2 snap-x snap-mandatory
        [-ms-overflow-style:none] [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      '
      aria-label='Cargando pokémons destacados'
    >
      {items.map((_, i) => (
        <div key={i} className='snap-start'>
          <Card
            className='
              relative overflow-hidden rounded-2xl shadow-md border
              bg-white border-pokegray-200 w-full
            '
            style={{ width: slideW, maxWidth: slideW }}
          >
            <CardHeader className='p-4 pb-2'>
              <div className='flex items-center justify-between mb-2'>
                <Skeleton className='h-5 w-12 rounded-full' />
                <div className='flex gap-2'>
                  <Skeleton className='h-5 w-5 rounded-full' />
                  <Skeleton className='h-5 w-5 rounded-full' />
                </div>
              </div>
            </CardHeader>

            <div className='flex justify-center h-40 mb-1'>
              <Skeleton className='h-full w-[70%] rounded-xl' />
            </div>

            <CardBody className='p-4 pt-2 space-y-3'>
              <div className='flex justify-center'>
                <Skeleton className='h-5 w-28 rounded' />
              </div>

              <div className='flex justify-center gap-2'>
                <Skeleton className='h-6 w-14 rounded-full' />
                <Skeleton className='h-6 w-16 rounded-full' />
              </div>
              {[0, 1, 2, 3].map((k) => (
                <div key={k} className='space-y-1'>
                  <div className='flex items-center justify-between text-xs'>
                    <Skeleton className='h-3 w-10 rounded' />
                    <Skeleton className='h-3 w-8 rounded' />
                  </div>
                  <div className='h-2 bg-pokegray-200/60 rounded-full overflow-hidden'>
                    <Skeleton className='h-2 w-2/3 rounded-full' />
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      ))}
    </section>
  )
}

export function PokedexGridSkeleton({ count = 20 }: { count?: number }) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i}>
          <CardHeader className='flex-col items-start gap-2'>
            <Skeleton className='h-3 w-10 rounded' />
            <Skeleton className='h-5 w-24 rounded' />
            <div className='flex gap-2 mt-1'>
              <Skeleton className='h-5 w-12 rounded-full' />
              <Skeleton className='h-5 w-14 rounded-full' />
            </div>
          </CardHeader>
          <CardBody className='flex items-center justify-center'>
            <Skeleton className='h-40 w-40 rounded' />
          </CardBody>
        </Card>
      ))}
    </section>
  )
}

export function TypeInsightsSkeleton() {
  return (
    <Card className='h-full'>
      <CardBody className='p-4 lg:p-5 space-y-4'>
        <div className='flex items-center justify-between'>
          <Skeleton className='h-5 w-48 rounded' />
          <Skeleton className='h-3 w-24 rounded' />
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Skeleton className='h-5 w-16 rounded-full' />
                <Skeleton className='h-3 w-10 rounded' />
              </div>
              <div className='h-2 w-full bg-default-200 rounded-full overflow-hidden'>
                <Skeleton className='h-2 w-2/3 rounded-full' />
              </div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className='rounded-xl border border-default-200 p-3 space-y-3'
            >
              <div className='flex items-center gap-2'>
                <Skeleton className='h-5 w-16 rounded-full' />
                <Skeleton className='h-3 w-20 rounded' />
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className='space-y-2'>
                  <Skeleton className='h-3 w-24 rounded' />
                  <div className='flex flex-wrap gap-2'>
                    <Skeleton className='h-6 w-14 rounded-full' />
                    <Skeleton className='h-6 w-16 rounded-full' />
                    <Skeleton className='h-6 w-12 rounded-full' />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Skeleton className='h-3 w-24 rounded' />
                  <div className='flex flex-wrap gap-2'>
                    <Skeleton className='h-6 w-14 rounded-full' />
                    <Skeleton className='h-6 w-16 rounded-full' />
                    <Skeleton className='h-6 w-12 rounded-full' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export function PokemonDetailSkeleton() {
  return (
    <div className='grid gap-6 md:grid-cols-5 auto-rows-[minmax(120px,_auto)] font-sans'>
      <Card className='md:col-span-2 row-span-2 overflow-hidden bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/50 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <CardBody className='p-6 flex flex-col items-center justify-center'>
          <div className='w-full flex items-center justify-between mb-4'>
            <Skeleton className='h-6 w-16 rounded-full bg-pokeblue-100 dark:bg-pokeblue-900/50' />
            <Skeleton className='h-8 w-8 rounded-full bg-pokeblue-100 dark:bg-pokeblue-900/50' />
          </div>
          <Skeleton className='w-full aspect-[1/1] rounded-xl bg-pokeblue-200/50 dark:bg-indigo-900/50' />
        </CardBody>
      </Card>
      <Card className='md:col-span-3 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'>
        <CardBody className='p-6'>
          <div className='flex flex-col md:flex-row items-start justify-between gap-4'>
            <div className='flex-1'>
              <Skeleton className='h-9 w-48 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50 mb-3' />
              <div className='flex flex-wrap gap-2 mt-3'>
                <Skeleton className='h-7 w-20 rounded-full bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                <Skeleton className='h-7 w-16 rounded-full bg-pokeblue-200/50 dark:bg-indigo-900/50' />
              </div>
            </div>
            <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 min-w-[140px] border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
              <div className='space-y-3'>
                <div className='space-y-1'>
                  <Skeleton className='h-4 w-16 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                  <Skeleton className='h-5 w-12 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                </div>
                <div className='space-y-1'>
                  <Skeleton className='h-4 w-16 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                  <Skeleton className='h-5 w-12 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className='md:col-span-3 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'>
        <CardHeader className='pb-1'>
          <Skeleton className='h-6 w-24 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
        </CardHeader>
        <CardBody className='p-6 space-y-4'>
          {['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'].map(
            (stat, i) => (
              <div key={i} className='space-y-1'>
                <div className='flex items-center justify-between text-sm'>
                  <Skeleton className='h-3.5 w-16 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                  <Skeleton className='h-4 w-8 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                </div>
                <Skeleton className='h-2 w-full rounded-full bg-pokeblue-200/50 dark:bg-indigo-900/50' />
              </div>
            )
          )}
        </CardBody>
      </Card>
      <div className='md:col-span-2 flex flex-col gap-6'>
        <Card className='bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'>
          <CardHeader className='pb-2'>
            <Skeleton className='h-6 w-24 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
          </CardHeader>
          <CardBody className='p-6'>
            <div className='flex flex-wrap gap-2'>
              <Skeleton className='h-7 w-24 rounded-full bg-pokeblue-200/50 dark:bg-indigo-900/50' />
              <Skeleton className='h-7 w-28 rounded-full bg-pikachu-300/50 dark:bg-pikachu-900/50' />
              <Skeleton className='h-7 w-20 rounded-full bg-pokeblue-200/50 dark:bg-indigo-900/50' />
            </div>
          </CardBody>
        </Card>
        <Card className='bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible'>
          <CardHeader className='pb-2'>
            <Skeleton className='h-6 w-16 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
          </CardHeader>
          <CardBody className='p-6 overflow-visible'>
            <div className='bg-pokeblue-100/50 dark:bg-pokeblue-900/30 p-1 rounded-lg flex gap-1 mb-4 overflow-x-auto'>
              {['Front', 'Back', 'Shiny', 'Official'].map((tab) => (
                <Skeleton key={tab} className='h-7 w-16 rounded text-xs' />
              ))}
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className='flex flex-col items-center space-y-2'>
                  <Skeleton className='h-20 w-20 rounded-lg bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                  <Skeleton className='h-3 w-16 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
      <Card className='md:col-span-3 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'>
        <CardHeader className='pb-1'>
          <Skeleton className='h-6 w-40 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
        </CardHeader>
        <CardBody className='p-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                title: 'Debilidad',
                count: 4,
                color: 'from-pokered-400 to-pokered-500',
              },
              {
                title: 'Resistencia',
                count: 3,
                color: 'from-green-500 to-green-600',
              },
              {
                title: 'Inmune',
                count: 2,
                color: 'from-pokeblue-400 to-pokeblue-500',
              },
            ].map((section) => (
              <div key={section.title} className='space-y-3'>
                <Skeleton className='h-5 w-24 rounded bg-pokeblue-200/50 dark:bg-indigo-900/50' />
                <div className='flex flex-wrap gap-2'>
                  {Array.from({ length: section.count }).map((_, i) => (
                    <Skeleton
                      key={i}
                      className={`h-6 w-16 rounded-full ${section.color} bg-opacity-50`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export function PokemonEvolutionSkeleton() {
  return (
    <Card className='md:col-span-5 row-span-1'>
      <CardBody className='p-5 space-y-4'>
        <Skeleton className='h-6 w-48 rounded' />
        <div className='grid grid-flow-col auto-cols-[220px] gap-6 overflow-x-hidden'>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className='w-[220px]'>
              <div className='mx-auto w-[180px] h-[180px] rounded-xl bg-default-100 flex items-center justify-center'>
                <Skeleton className='h-[140px] w-[140px] rounded-xl' />
              </div>
              <div className='mt-2 flex flex-col items-center gap-2'>
                <Skeleton className='h-4 w-24 rounded' />
                <div className='flex gap-2'>
                  <Skeleton className='h-6 w-12 rounded-full' />
                  <Skeleton className='h-6 w-16 rounded-full' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export function PokemonMovesSkeleton() {
  return (
    <Card className='md:col-span-4 row-span-1'>
      <CardHeader>
        <Skeleton className='h-5 w-32 rounded' />
      </CardHeader>
      <CardBody className='space-y-4'>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='space-y-2'>
            <Skeleton className='h-4 w-24 rounded' />
            <div className='flex flex-wrap gap-2'>
              {[...Array(5)].map((_, j) => (
                <Skeleton key={j} className='h-6 w-20 rounded-full' />
              ))}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}

export function PokemonBreedingSkeleton() {
  return (
    <Card className='h-full bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'>
      <CardHeader className='px-6 pt-6 pb-0'>
        <Skeleton className='h-6 w-20 rounded' />
      </CardHeader>
      <CardBody className='p-6 space-y-6'>
        <div className='space-y-4'>
          {/* Egg Groups */}
          <div>
            <Skeleton className='h-4 w-24 rounded mb-2' />
            <div className='flex gap-2'>
              <Skeleton className='h-7 w-16 rounded-full' />
              <Skeleton className='h-7 w-20 rounded-full' />
            </div>
          </div>

          {/* Gender */}
          <div>
            <Skeleton className='h-4 w-20 rounded mb-2' />
            <div className='space-y-2 bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
              <div className='flex justify-between text-sm'>
                <Skeleton className='h-4 w-16 rounded' />
                <Skeleton className='h-4 w-16 rounded' />
              </div>
              <Skeleton className='h-2 w-full rounded-full' />
            </div>
          </div>

          {/* Hatch Cycles and Steps */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Skeleton className='h-4 w-28 rounded mb-2' />
              <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                <Skeleton className='h-8 w-10 rounded' />
              </div>
            </div>
            <div>
              <Skeleton className='h-4 w-28 rounded mb-2' />
              <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                <Skeleton className='h-8 w-16 rounded' />
              </div>
            </div>
          </div>

          {/* Capture Rate and Base Happiness */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <div className='flex justify-between mb-2'>
                <Skeleton className='h-4 w-24 rounded' />
                <Skeleton className='h-3 w-10 rounded' />
              </div>
              <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                <Skeleton className='h-8 w-10 rounded mb-2' />
                <Skeleton className='h-2 w-full rounded-full' />
              </div>
            </div>
            <div>
              <Skeleton className='h-4 w-24 rounded mb-2' />
              <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                <Skeleton className='h-8 w-10 rounded mb-2' />
                <Skeleton className='h-2 w-full rounded-full' />
              </div>
            </div>
          </div>

          {/* Growth Rate */}
          <div>
            <Skeleton className='h-4 w-24 rounded mb-2' />
            <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
              <Skeleton className='h-7 w-24 rounded-full' />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export function SavedPageSkeleton() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-8 w-40 rounded' />
        <div className='flex gap-2'>
          <Skeleton className='h-9 w-28 rounded' />
          <Skeleton className='h-9 w-28 rounded' />
        </div>
      </div>

      <div>
        <div className='flex gap-3 mb-4'>
          <Skeleton className='h-10 w-32 rounded-full' />
          <Skeleton className='h-10 w-32 rounded-full' />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className='rounded-2xl border border-pokegray-200'>
              <CardBody className='p-4 space-y-4'>
                <div className='flex items-center justify-between'>
                  <Skeleton className='h-5 w-16 rounded-full' />
                  <div className='flex gap-2'>
                    <Skeleton className='h-6 w-6 rounded-full' />
                    <Skeleton className='h-6 w-6 rounded-full' />
                  </div>
                </div>
                <div className='flex justify-center'>
                  <Skeleton className='h-40 w-40 rounded-xl' />
                </div>
                <Skeleton className='h-5 w-28 rounded mx-auto' />
                <div className='flex justify-center gap-2'>
                  <Skeleton className='h-6 w-14 rounded-full' />
                  <Skeleton className='h-6 w-16 rounded-full' />
                </div>
                <div className='space-y-2'>
                  <Skeleton className='h-2 w-full rounded-full' />
                  <Skeleton className='h-2 w-5/6 rounded-full' />
                  <Skeleton className='h-2 w-2/3 rounded-full' />
                  <Skeleton className='h-2 w-3/4 rounded-full' />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SavedGridSkeleton() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className='rounded-2xl border border-pokegray-200'>
          <CardBody className='p-4 space-y-4'>
            <div className='flex items-center justify-between'>
              <Skeleton className='h-5 w-16 rounded-full' />
              <div className='flex gap-2'>
                <Skeleton className='h-6 w-6 rounded-full' />
                <Skeleton className='h-6 w-6 rounded-full' />
              </div>
            </div>
            <div className='flex justify-center'>
              <Skeleton className='h-40 w-40 rounded-xl' />
            </div>
            <Skeleton className='h-5 w-28 rounded mx-auto' />
            <div className='flex justify-center gap-2'>
              <Skeleton className='h-6 w-14 rounded-full' />
              <Skeleton className='h-6 w-16 rounded-full' />
            </div>
            <div className='space-y-2'>
              <Skeleton className='h-2 w-full rounded-full' />
              <Skeleton className='h-2 w-5/6 rounded-full' />
              <Skeleton className='h-2 w-2/3 rounded-full' />
              <Skeleton className='h-2 w-3/4 rounded-full' />
            </div>
          </CardBody>
        </Card>
      ))}
    </section>
  )
}

export function RegionsSkeleton() {
  return (
    <Card>
      <CardBody className='divide-y divide-pokegray-200 p-0'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='p-4 space-y-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Skeleton className='h-4 w-10 rounded' />
                <Skeleton className='h-5 w-32 rounded' />
                <Skeleton className='h-5 w-20 rounded-full' />
              </div>
              <div className='flex gap-2'>
                <Skeleton className='h-6 w-20 rounded-full' />
                <Skeleton className='h-6 w-24 rounded-full' />
                <Skeleton className='h-6 w-24 rounded-full' />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-2'>
              <div className='border border-pokegray-200 rounded-xl p-4'>
                <Skeleton className='h-3 w-24 rounded mb-3' />
                <div className='flex gap-2'>
                  <Skeleton className='h-6 w-16 rounded-full' />
                  <Skeleton className='h-6 w-20 rounded-full' />
                </div>
              </div>
              <div className='border border-pokegray-200 rounded-xl p-4'>
                <Skeleton className='h-3 w-24 rounded mb-3' />
                <div className='flex gap-2'>
                  <Skeleton className='h-6 w-16 rounded-full' />
                  <Skeleton className='h-6 w-20 rounded-full' />
                </div>
              </div>
              <div className='border border-pokegray-200 rounded-xl p-4'>
                <Skeleton className='h-3 w-24 rounded mb-3' />
                <div className='flex gap-2'>
                  <Skeleton className='h-9 w-28 rounded' />
                  <Skeleton className='h-9 w-28 rounded' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}
