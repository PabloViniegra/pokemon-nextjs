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
import { SlidersHorizontal } from 'lucide-react'
import { useMemo } from 'react'
import { ALL_TYPES } from '@/types'

export default function PokedexFilters() {
  const sp = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const selected = useMemo(() => {
    return new Set((sp.get('types') ?? '').split(',').filter(Boolean))
  }, [sp])

  const apply = (types: Set<string>) => {
    const next = new URLSearchParams(sp.toString())
    if (types.size) next.set('types', Array.from(types).join(','))
    else next.delete('types')
    next.set('page', '1')
    router.replace(`${pathname}?${next.toString()}`)
  }

  const toggle = (type: string) => {
    const copy = new Set(selected)
    copy.has(type) ? copy.delete(type) : copy.add(type)
    apply(copy)
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
            {selected.size > 0 && (
              <span className='ml-1.5 bg-pikachu-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                {selected.size}
              </span>
            )}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Filtrar por tipo'
          closeOnSelect={false}
          selectionMode='multiple'
          selectedKeys={selected}
          onAction={(key) => toggle(String(key))}
          className='bg-white dark:bg-pokegray-800 border border-pokegray-100 dark:border-pokegray-700 rounded-lg shadow-lg p-2 min-w-[200px]'
        >
          {ALL_TYPES.map((t) => (
            <DropdownItem
              key={t}
              className={`capitalize px-3 py-2 rounded-md text-pokegray-700 dark:text-pokegray-200 hover:bg-pokegray-100 dark:hover:bg-pokegray-700/50 transition-colors duration-200 ${
                selected.has(t)
                  ? 'bg-pikachu-100 dark:bg-pikachu-900/30 text-pikachu-700 dark:text-pikachu-300'
                  : ''
              }`}
            >
              <div className='flex items-center justify-between w-full'>
                <span>{t}</span>
                {selected.has(t) && (
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

      <div className='hidden md:flex flex-wrap items-center gap-2'>
        {Array.from(selected).map((t) => (
          <Chip
            key={t}
            onClose={() => toggle(t)}
            className='capitalize bg-pikachu-100 dark:bg-pikachu-900/30 text-pikachu-700 dark:text-pikachu-300 border border-pikachu-200 dark:border-pikachu-800 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-pikachu-200 dark:hover:bg-pikachu-800/50'
          >
            {t}
          </Chip>
        ))}
      </div>
    </div>
  )
}
