'use client'

import { Mfe } from '@/types'
import { Card, CardHeader, CardBody } from '@heroui/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface PokemonMovesProps {
  moves: Mfe[]
}

const getMethodColor = (method: string) => {
  switch (method) {
    case 'level-up':
      return 'bg-pokeblue-50 border-pokeblue-200 text-pokeblue-800 hover:bg-pokeblue-100 hover:border-pokeblue-300'
    case 'machine':
      return 'bg-pokered-50 border-pokered-200 text-pokered-800 hover:bg-pokered-100 hover:border-pokered-300'
    case 'tutor':
      return 'bg-thunder-50 border-thunder-200 text-thunder-800 hover:bg-thunder-100 hover:border-thunder-300'
    case 'egg':
      return 'bg-pikachu-50 border-pikachu-200 text-pikachu-800 hover:bg-pikachu-100 hover:border-pikachu-300'
    default:
      return 'bg-pokegray-50 border-pokegray-200 text-pokegray-800 hover:bg-pokegray-100 hover:border-pokegray-300'
  }
}

export function PokemonMoves({ moves }: PokemonMovesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        containerRef.current.querySelectorAll('.move-chip'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      )
    }
  }, [])

  const grouped: Record<string, Mfe[]> = {}
  moves.forEach((m) => {
    m.version_group_details.forEach((vd) => {
      const method = vd.move_learn_method.name
      if (!grouped[method]) grouped[method] = []
      if (!grouped[method].some((move) => move.move.name === m.move.name)) {
        grouped[method].push(m)
      }
    })
  })

  const methodOrder = [
    'level-up',
    'machine',
    'tutor',
    'egg',
    'stadium-surfing-pikachu',
  ]
  const sortedMethods = Object.keys(grouped).sort(
    (a, b) => methodOrder.indexOf(a) - methodOrder.indexOf(b)
  )

  return (
    <Card
      className='w-full h-full bg-gradient-to-br from-pokeblue-50 to-pokeblue-100 dark:from-pokeblue-900/90 dark:to-pokeblue-800/80 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden border border-pokeblue-200 dark:border-pokeblue-800 hover:shadow-xl transition-all duration-300 flex flex-col group'
      ref={containerRef}
    >
      <CardHeader className='p-5 pb-3 border-b border-pokeblue-200 dark:border-pokeblue-800/50'>
        <div ref={headerRef} className='opacity-0'>
          <div className='flex items-center gap-3'>
            <div>
              <h2 className='text-xl font-bold font-sans tracking-tight text-pokeblue-900 dark:text-white'>
                Movimientos
              </h2>
              <p className='text-sm text-pokeblue-600/80 dark:text-pokeblue-300/80 mt-0.5 font-sans'>
                Habilidades que puede aprender
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className='p-5 pt-4 flex-1 overflow-y-auto custom-scrollbar'>
        {sortedMethods.map((method) => (
          <div key={method} className='mb-6 last:mb-0 group/method'>
            <div className='flex items-center justify-between mb-3 pb-2 border-b border-pokegray-100 dark:border-pokegray-800'>
              <h3 className='capitalize font-semibold font-sans text-md text-pokeblue-800 dark:text-pokeblue-200 flex items-center gap-2'>
                <span className='inline-block w-2 h-2 rounded-full bg-current'></span>
                {method
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </h3>
              <span className='text-xs font-medium font-mono px-2.5 py-1 rounded-full bg-pikachu-200/80 dark:bg-pikachu-800/60 text-pikachu-900 dark:text-pikachu-100 border border-pikachu-300/50 dark:border-pikachu-700/50 shadow-sm'>
                {grouped[method].length} movimientos
              </span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {grouped[method].map((m) => (
                <span
                  key={m.move.name}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium font-serif tracking-tight transition-all duration-200 cursor-default border move-chip ${getMethodColor(
                    method
                  )} hover:shadow-sm hover:-translate-y-0.5`}
                  title={m.move.name.replace(/-/g, ' ')}
                >
                  {m.move.name
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </span>
              ))}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}
