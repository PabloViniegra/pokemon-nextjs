'use client'

import Image from 'next/image'
import { Card, CardBody, Button, Tooltip } from '@heroui/react'
import { Volume2, Zap } from 'lucide-react'
import { Cries } from '@/types'
import { useGsapFadeIn } from '@/components/hooks/useGsapFadeIn'

type PokemonImageCardProps = {
  id: number
  name: string
  artwork?: string | null
  cries: Cries
}

export function PokemonImageCard({
  id,
  name,
  artwork,
  cries,
}: PokemonImageCardProps) {
  const ref = useGsapFadeIn<HTMLDivElement>({ y: 40 })
  const playCry = (which: 'latest' | 'legacy') => {
    const url = cries?.[which]
    if (url) new Audio(url).play().catch(() => {})
  }

  return (
    <Card
      ref={ref}
      className='md:col-span-2 row-span-2 overflow-hidden bg-gradient-to-br from-pokeblue-50 to-pokeblue-100 dark:from-indigo-900/30 dark:to-indigo-950/50 border-2 border-pokeblue-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-shadow duration-300'
    >
      <CardBody className='p-6 flex flex-col items-center justify-center'>
        <div className='w-full flex items-center justify-between mb-4'>
          <span className='text-sm font-medium text-pokeblue-700 dark:text-pokeblue-300 bg-pokeblue-100 dark:bg-pokeblue-900/50 px-3 py-1 rounded-full'>
            #{String(id).padStart(3, '0')}
          </span>
          <div className='flex gap-2'>
            {cries?.latest && (
              <Tooltip content='Escuchar grito' placement='top'>
                <Button
                  isIconOnly
                  size='sm'
                  variant='flat'
                  onPress={() => playCry('latest')}
                  className='bg-pokeblue-100/80 hover:bg-pokeblue-200/80 dark:bg-pokeblue-900/50 dark:hover:bg-pokeblue-800/70 text-pokeblue-700 dark:text-pokeblue-300 transition-colors'
                >
                  <Volume2 className='w-4 h-4' />
                </Button>
              </Tooltip>
            )}
            {cries?.legacy && (
              <Tooltip content='Grito clásico' placement='top'>
                <Button
                  isIconOnly
                  size='sm'
                  variant='light'
                  onPress={() => playCry('legacy')}
                  className='bg-pokeblue-100/80 hover:bg-pokeblue-200/80 dark:bg-pokeblue-900/50 dark:hover:bg-pokeblue-800/70 text-pokeblue-700 dark:text-pokeblue-300 transition-colors'
                >
                  <Zap className='w-4 h-4' />
                </Button>
              </Tooltip>
            )}
          </div>
        </div>
        <div className='relative aspect-[1/1] w-full max-w-[380px] group'>
          {artwork ? (
            <div className='relative w-full h-full'>
              <div className='absolute inset-0 bg-gradient-to-br from-pikachu-300/20 to-pikachu-500/10 dark:from-pikachu-500/10 dark:to-pikachu-700/5 rounded-full blur-xl scale-90 group-hover:scale-95 transition-transform duration-500' />
              <Image
                src={artwork}
                alt={name}
                fill
                className='object-contain drop-shadow-2xl z-10 relative transform transition-all duration-300 group-hover:scale-105'
                sizes='(max-width:768px) 80vw, 380px'
                priority
              />
            </div>
          ) : (
            <div className='w-full h-full bg-pokeblue-100/50 dark:bg-pokeblue-900/20 rounded-xl' />
          )}
        </div>
      </CardBody>
    </Card>
  )
}
