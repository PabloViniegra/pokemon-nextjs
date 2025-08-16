'use client'

import { RegionRow } from '@/types'
import { Chip } from '@heroui/react'
import { pretty } from '@/lib/string-utils'

function RegionStats({ region }: { region: RegionRow }) {
  return (
    <div className='flex items-center gap-2'>
      <Chip
        size='sm'
        variant='flat'
        className='bg-pokeblue-100 text-pokeblue-700'
      >
        {region.pokedexes.length} pokedéx
      </Chip>
      <Chip
        size='sm'
        variant='flat'
        className='bg-pikachu-100 text-pokeblue-700'
      >
        {region.versionGroups.length} versiones
      </Chip>
      <Chip
        size='sm'
        variant='flat'
        className='bg-pokegray-200 text-foreground-700'
      >
        {region.locationsCount} localizaciones
      </Chip>
    </div>
  )
}

export default function RegionHeader({ region }: { region: RegionRow }) {
  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex items-center gap-3'>
        <span className='text-sm text-foreground-500 font-mono'>
          #{String(region.id).padStart(2, '0')}
        </span>
        <span className='capitalize font-semibold'>{pretty(region.name)}</span>
        {region.generation && (
          <Chip
            size='sm'
            variant='flat'
            color='primary'
            className='capitalize font-serif text-pokeblue-900'
          >
            {pretty(region.generation)}
          </Chip>
        )}
      </div>
      <RegionStats region={region} />
    </div>
  )
}
