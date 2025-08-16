// components/client/PokedexFilters.tsx
'use client'
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Chip,
} from '@heroui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MapPin, SlidersHorizontal } from 'lucide-react'
import { useMemo } from 'react'
import { ALL_REGIONS, ALL_TYPES } from '@/types'

export default function PokedexFilters() {
  const sp = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const selectedTypes = useMemo(() => {
    return new Set((sp.get('types') ?? '').split(',').filter(Boolean))
  }, [sp])

  const applyTypes = (types: Set<string>) => {
    const next = new URLSearchParams(sp.toString())
    if (types.size) next.set('types', Array.from(types).join(','))
    else next.delete('types')
    next.set('page', '1')
    router.replace(`${pathname}?${next.toString()}`)
  }

  const toggleType = (type: string) => {
    const copy = new Set(selectedTypes)
    copy.has(type) ? copy.delete(type) : copy.add(type)
    applyTypes(copy)
  }

  const selectedRegions = useMemo(() => {
    return new Set((sp.get('regions') ?? '').split(',').filter(Boolean))
  }, [sp])

  const applyRegions = (regions: Set<string>) => {
    const next = new URLSearchParams(sp.toString())
    if (regions.size) next.set('regions', Array.from(regions).join(','))
    else next.delete('regions')
    next.set('page', '1')
    router.replace(`${pathname}?${next.toString()}`)
  }

  const toggleRegion = (region: string) => {
    const copy = new Set(selectedRegions)
    copy.has(region) ? copy.delete(region) : copy.add(region)
    applyRegions(copy)
  }

  return (
    <div className='flex items-center gap-3'>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant='flat'
            className='bg-white/80 dark:bg-pokegray-800/80 hover:bg-white dark:hover:bg-pokegray-700/80 text-pokegray-700 dark:text-pokegray-200 border border-pokegray-200 dark:border-pokegray-700 px-4 py-2 rounded-lg transition-colors duration-200'
            startContent={
              <SlidersHorizontal className='w-4 h-4 text-pokeblue-500' />
            }
          >
            <span className='font-medium font-sans'>Filtros</span>
            {selectedTypes.size > 0 && (
              <span className='ml-1.5 bg-pikachu-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                {selectedTypes.size}
              </span>
            )}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Filtrar por tipo'
          closeOnSelect={false}
          selectionMode='multiple'
          selectedKeys={selectedTypes}
          onAction={(key) => toggleType(String(key))}
          className='bg-white dark:bg-pokegray-800 border border-pokegray-100 dark:border-pokegray-700 rounded-lg shadow-lg p-2 min-w-[200px]'
        >
          {ALL_TYPES.map((t) => (
            <DropdownItem
              key={t}
              className={`capitalize px-3 py-2 rounded-md text-pokegray-700 dark:text-pokegray-200 hover:bg-pokegray-100 dark:hover:bg-pokegray-700/50 transition-colors duration-200 ${
                selectedTypes.has(t)
                  ? 'bg-pikachu-100 dark:bg-pikachu-900/30 text-pikachu-700 dark:text-pikachu-300'
                  : ''
              }`}
            >
              <div className='flex items-center justify-between w-full'>
                <span>{t}</span>
                {selectedTypes.has(t) && (
                  <span className='text-pikachu-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <polyline points='20 6 9 17 4 12' />
                    </svg>
                  </span>
                )}
              </div>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant='flat'
            className='bg-white/80 dark:bg-pokegray-800/80 hover:bg-white dark:hover:bg-pokegray-700/80 text-pokegray-700 dark:text-pokegray-200 border border-pokegray-200 dark:border-pokegray-700 px-4 py-2 rounded-lg transition-colors duration-200'
            startContent={<MapPin className='w-4 h-4 text-pokeblue-500' />}
          >
            <span className='font-medium font-sans'>Regiones</span>
            {selectedRegions.size > 0 && (
              <span className='ml-1.5 bg-pikachu-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                {selectedRegions.size}
              </span>
            )}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Filtrar por región'
          closeOnSelect={false}
          selectionMode='multiple'
          selectedKeys={selectedRegions}
          onAction={(key) => toggleRegion(String(key))}
          className='bg-white dark:bg-pokegray-800 border border-pokegray-100 dark:border-pokegray-700 rounded-lg shadow-lg p-2 min-w-[200px]'
        >
          {ALL_REGIONS.map((r) => (
            <DropdownItem
              key={r}
              className={`capitalize px-3 py-2 rounded-md ${
                selectedRegions.has(r)
                  ? 'bg-pikachu-100 dark:bg-pikachu-900/30 text-pikachu-700 dark:text-pikachu-300'
                  : 'text-pokegray-700 dark:text-pokegray-200 hover:bg-pokegray-100 dark:hover:bg-pokegray-700/50'
              }`}
            >
              {r}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <div className='hidden md:flex flex-wrap items-center gap-2'>
        {Array.from(selectedTypes).map((t) => (
          <Chip
            key={t}
            onClose={() => toggleType(t)}
            className='capitalize bg-pikachu-100 dark:bg-pikachu-900/30 text-pikachu-700 dark:text-pikachu-300'
          >
            {t}
          </Chip>
        ))}
        {Array.from(selectedRegions).map((r) => (
          <Chip
            key={r}
            onClose={() => toggleRegion(r)}
            className='capitalize bg-pikachu-100 dark:bg-pikachu-900/30 text-pikachu-700 dark:text-pikachu-300'
          >
            {r}
          </Chip>
        ))}
      </div>
    </div>
  )
}
