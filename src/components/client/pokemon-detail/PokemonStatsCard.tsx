'use client'

import { Card, CardHeader, CardBody } from '@heroui/react'
import { Stat } from '@/types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

type PokemonStatsCardProps = {
  stats: Stat[]
}

export function PokemonStatsCard({ stats }: PokemonStatsCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLDivElement>('.stat-row')
      rows.forEach((row) => {
        const bar = row.querySelector<HTMLElement>('.stat-bar')
        const valueEl = row.querySelector<HTMLElement>('.stat-value')
        const targetPct = Number(bar?.dataset.w || 0)
        const targetVal = Number(valueEl?.dataset.value || 0)

        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${Math.min(100, targetPct)}%`,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: row, start: 'top 85%', once: true },
          }
        )
        gsap.fromTo(
          { n: 0 },
          { n: targetVal },
          {
            duration: 0.8,
            ease: 'power2.out',
            onUpdate: function () {
              if (valueEl)
                valueEl.textContent = Math.round(this.targets()[0].n).toString()
            },
            scrollTrigger: { trigger: row, start: 'top 85%', once: true },
          }
        )
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])
  return (
    <Card
      ref={containerRef}
      className='md:col-span-3 row-span-1 bg-gradient-to-br from-pokeblue-50 to-pokeblue-100/70 dark:from-indigo-900/30 dark:to-indigo-950/40 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300'
    >
      <CardHeader className='pb-2'>
        <h2 className='text-xl font-bold text-pokeblue-900 dark:text-white flex items-center gap-2'>
          <span className='w-2 h-6 bg-pikachu-500 rounded-full' />
          Estadísticas
        </h2>
      </CardHeader>
      <CardBody className='p-6 space-y-4'>
        {stats.map((s) => {
          const statValue = s.base_stat
          const percentage = Math.min(100, (statValue / 255) * 100)
          let barColor = 'bg-pikachu-500'

          if (statValue < 50) barColor = 'bg-pokered-400'
          else if (statValue < 80) barColor = 'bg-thunder-400'
          else if (statValue < 100) barColor = 'bg-pikachu-500'
          else barColor = 'bg-pokeblue-600'

          return (
            <div key={s.stat.name} className='space-y-1 group'>
              <div className='flex items-center justify-between text-sm'>
                <span className='capitalize font-sans font-medium text-pokeblue-800 dark:text-pokeblue-200'>
                  {s.stat.name.replace('-', ' ')}
                  <span className='ml-1 text-xs opacity-70 group-hover:opacity-100 transition-opacity'>
                    ({statValue})
                  </span>
                </span>
                <span className='font-sans font-bold text-pokeblue-900 dark:text-white'>
                  {statValue}
                </span>
              </div>
              <div className='h-2.5 bg-pokeblue-100 dark:bg-pokeblue-900/50 rounded-full overflow-hidden'>
                <div
                  className={`h-full ${barColor} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: `${percentage}%`,
                    boxShadow: '0 0 8px rgba(255, 216, 47, 0.3)',
                  }}
                />
              </div>
            </div>
          )
        })}
      </CardBody>
    </Card>
  )
}
