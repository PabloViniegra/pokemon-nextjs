'use client'

import { Card, CardBody, CardHeader, Chip, Tooltip } from '@heroui/react'
import { useGsapFadeIn } from '@/components/hooks/useGsapFadeIn'

export default function PokemonBreedingCard({
  gender,
  eggGroups,
  hatch,
  captureRate,
  baseHappiness,
  growthRate,
}: {
  gender: { male: number; female: number; genderless: boolean }
  eggGroups: string[]
  hatch: { cycles: number; steps: number }
  captureRate: number | null
  baseHappiness: number | null
  growthRate: string | null
}) {
  const capPct =
    captureRate != null
      ? Math.min(100, Math.max(0, (captureRate / 255) * 100))
      : null
  const ref = useGsapFadeIn<HTMLDivElement>({ y: 40 })

  return (
    <Card
      ref={ref}
      className='h-full bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'
    >
      <CardHeader className='px-6 pt-6 pb-0'>
        <h2 className='text-xl font-bold font-sans tracking-tight text-pokeblue-900 dark:text-white mb-2'>
          Cría
        </h2>
      </CardHeader>
      <CardBody className='p-6 space-y-6'>
        <div className='space-y-4'>
          <div>
            <h3 className='text-sm font-sans font-semibold text-pokeblue-700 dark:text-pokeblue-300 mb-2 flex items-center gap-1'>
              <span>Grupos Huevo</span>
            </h3>
            <div className='flex flex-wrap gap-2'>
              {eggGroups.length ? (
                eggGroups.map((g) => (
                  <Chip
                    key={g}
                    size='sm'
                    className='capitalize font-medium font-serif text-sm px-3 py-1 bg-white/80 dark:bg-indigo-900/50 text-pokeblue-800 dark:text-pokeblue-200 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-md hover:scale-105 transition-transform'
                  >
                    {g}
                  </Chip>
                ))
              ) : (
                <span className='text-sm text-pokeblue-700/70 dark:text-pokeblue-300/70'>
                  —
                </span>
              )}
            </div>
          </div>
          <div>
            <h3 className='text-sm font-sans font-semibold text-pokeblue-700 dark:text-pokeblue-300 mb-2 flex items-center gap-1'>
              <span>Género</span>
            </h3>
            {gender.genderless ? (
              <Chip
                size='sm'
                className='font-medium font-serif text-sm px-3 py-1 bg-white/80 dark:bg-indigo-900/50 text-pokeblue-800 dark:text-pokeblue-200 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-md hover:scale-105 transition-transform'
              >
                Sin género
              </Chip>
            ) : (
              <div className='space-y-2 bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                <div className='flex items-center justify-between text-sm text-pokeblue-800 dark:text-pokeblue-200'>
                  <span className='text-blue-600 dark:text-blue-400 font-medium'>
                    ♂ {gender.male.toFixed(1)}%
                  </span>
                  <span className='text-pink-600 dark:text-pink-400 font-medium'>
                    ♀ {gender.female.toFixed(1)}%
                  </span>
                </div>
                <div className='h-2 w-full bg-pokeblue-100 dark:bg-indigo-900/70 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-1000 ease-out'
                    style={{ width: '100%' }}
                  >
                    <div
                      className='h-full bg-pokeblue-100 dark:bg-indigo-900/70 float-right transition-all duration-1000 ease-out'
                      style={{ width: `${100 - gender.male}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h3 className='text-sm font-sans font-semibold text-pokeblue-700 dark:text-pokeblue-300 mb-2 flex items-center gap-1'>
                <span>Ciclos de eclosión</span>
              </h3>
              <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                <p className='text-2xl font-bold text-pokeblue-900 dark:text-white'>
                  {hatch.cycles}
                </p>
              </div>
            </div>
            <div>
              <h3 className='text-sm font-sans font-semibold text-pokeblue-700 dark:text-pokeblue-300 mb-2 flex items-center gap-1'>
                <span>Pasos estimados</span>
              </h3>
              <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                <p className='text-2xl font-serif font-bold text-pokeblue-900 dark:text-white'>
                  {hatch.steps.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <h3 className='text-sm font-sans font-semibold text-pokeblue-700 dark:text-pokeblue-300 flex items-center gap-1'>
                  <span>Ratio de captura</span>
                </h3>
                {captureRate != null && (
                  <Tooltip content='0–255 (más alto = más fácil)'>
                    <span className='font-mono text-[10px] text-pokeblue-600/70 dark:text-pokeblue-300/70 bg-white/50 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded-full border border-pokeblue-200/50 dark:border-indigo-800/50'>
                      escala GB
                    </span>
                  </Tooltip>
                )}
              </div>
              {captureRate != null ? (
                <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                  <p className='text-2xl font-bold text-pokeblue-900 dark:text-white mb-2'>
                    {captureRate}
                  </p>
                  <div className='h-2 bg-pokeblue-100 dark:bg-indigo-900/70 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-pokeblue-400 to-pokeblue-600 rounded-full transition-all duration-1000 ease-out'
                      style={{ width: `${capPct}%` }}
                    />
                  </div>
                </div>
              ) : (
                <span className='text-sm text-pokeblue-700/70 dark:text-pokeblue-300/70'>
                  —
                </span>
              )}
            </div>

            <div>
              <h3 className='text-sm font-semibold font-sans text-pokeblue-700 dark:text-pokeblue-300 mb-2 flex items-center gap-1'>
                <span>Felicidad base</span>
              </h3>
              {baseHappiness != null ? (
                <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                  <p className='text-2xl font-bold text-pokeblue-900 dark:text-white mb-2'>
                    {baseHappiness}
                  </p>
                  <div className='h-2 bg-pokeblue-100 dark:bg-indigo-900/70 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full transition-all duration-1000 ease-out'
                      style={{ width: `${(baseHappiness / 255) * 100}%` }}
                    />
                  </div>
                </div>
              ) : (
                <span className='text-sm text-pokeblue-700/70 dark:text-pokeblue-300/70'>
                  —
                </span>
              )}
            </div>
          </div>
          <div>
            <h3 className='text-sm font-semibold font-sans text-pokeblue-700 dark:text-pokeblue-300 mb-2 flex items-center gap-1'>
              <span>Crecimiento</span>
            </h3>
            {growthRate ? (
              <div className='bg-white/60 dark:bg-indigo-950/40 backdrop-blur-sm rounded-xl p-4 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-inner'>
                <Chip
                  size='sm'
                  className='capitalize font-medium font-serif text-sm px-3 py-1 bg-white/80 dark:bg-indigo-900/50 text-pokeblue-800 dark:text-pokeblue-200 border border-pokeblue-200/50 dark:border-indigo-800/50 shadow-md hover:scale-105 transition-transform'
                >
                  {growthRate.replace(/-/g, ' ')}
                </Chip>
              </div>
            ) : (
              <span className='text-sm text-pokeblue-700/70 dark:text-pokeblue-300/70'>
                —
              </span>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
