'use client'

import Image from 'next/image'
import { Card, CardBody, Chip } from '@heroui/react'
import { ArrowRight } from 'lucide-react'
import { useGsapFadeIn } from '@/components/hooks/useGsapFadeIn'
import type { EvoNode } from '@/types'

export default function EvolutionChainClient({ nodes }: { nodes: EvoNode[] }) {
  const ref = useGsapFadeIn<HTMLDivElement>({ y: 30 })
  const slideW = 220

  return (
    <Card
      ref={ref}
      className='md:col-span-5 row-span-1 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg'
    >
      <CardBody className='p-5 space-y-4'>
        <h2 className='text-xl font-bold font-sans'>Cadena de evolución</h2>

        {nodes.length <= 1 ? (
          <p className='text-sm text-foreground-500 font-medium font-serif tracking-tight'>
            Este Pokémon no tiene evoluciones.
          </p>
        ) : (
          <div
            className='
              grid grid-flow-col auto-cols-[${slideW}px] gap-6 overflow-x-auto pb-2
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            '
          >
            {nodes.map((n, idx) => {
              const showArrow = idx < nodes.length - 1
              const conds = [
                n.minLevel != null ? `Lvl ${n.minLevel}` : null,
                n.trigger && n.trigger !== 'level-up' ? n.trigger : null,
                n.item ? `item: ${n.item}` : null,
                n.timeOfDay ? n.timeOfDay : null,
                n.moveType ? `move: ${n.moveType}` : null,
                n.location ? `loc: ${n.location}` : null,
              ].filter(Boolean) as string[]

              return (
                <div key={n.id} className='flex items-center'>
                  <div className='w-[220px]'>
                    <div className='relative mx-auto w-[180px] h-[180px] rounded-xl bg-white/70 dark:bg-indigo-950/40 border border-pokeblue-200/50 dark:border-indigo-800/50 flex items-center justify-center overflow-hidden'>
                      <Image
                        src={n.image}
                        alt={n.name}
                        width={160}
                        height={160}
                        className='object-contain w-full h-full p-4 drop-shadow-xl'
                        priority
                      />
                    </div>
                    <div className='mt-2 text-center'>
                      <div className='capitalize font-medium font-serif text-md tracking-tight'>
                        {n.name}
                      </div>
                      {!!conds.length && (
                        <div className='mt-2 flex flex-wrap justify-center gap-1'>
                          {conds.slice(0, 3).map((c) => (
                            <Chip
                              key={c}
                              size='sm'
                              className='text-xs capitalize font-medium font-mono tracking-tight'
                            >
                              {c}
                            </Chip>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {showArrow && (
                    <div className='px-3 shrink-0 flex items-center justify-center'>
                      <ArrowRight className='w-5 h-5 opacity-70' />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </CardBody>
    </Card>
  )
}
