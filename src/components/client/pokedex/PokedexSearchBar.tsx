'use client'

import { Input } from '@heroui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import useDebounce from '@/components/hooks/useDebounce'

export default function PokedexSearchBar() {
  const sp = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [value, setValue] = useState(sp.get('q') ?? '')

  const debouncedSearch = useDebounce(value, 300)

  useEffect(() => {
    const next = new URLSearchParams(sp.toString())
    if (debouncedSearch.trim()) {
      next.set('q', debouncedSearch.trim().toLowerCase())
    } else {
      next.delete('q')
    }
    next.set('page', '1')

    if (sp.toString() !== next.toString()) {
      router.replace(`${pathname}?${next.toString()}`)
    }
  }, [debouncedSearch, pathname, router])

  useEffect(() => {
    setValue(sp.get('q') ?? '')
  }, [sp])

  const clearSearch = useCallback(() => {
    setValue('')
    const next = new URLSearchParams(sp.toString())
    next.delete('q')
    next.set('page', '1')
    router.replace(`${pathname}?${next.toString()}`)
  }, [pathname, router, sp])

  return (
    <Input
      aria-label='Buscar pokémon'
      className='bg-transparent border-0 focus:ring-0 focus:ring-offset-0 pl-12 pr-10 py-3 text-sm font-sans'
      placeholder='Busca un pokemon...'
      size='lg'
      value={value}
      onValueChange={setValue as any}
      startContent={
        <div className='pointer-events-none'>
          <Search className='h-5 w-5 text-pokeblue-400' />
        </div>
      }
      endContent={
        value && (
          <button
            type='button'
            onClick={clearSearch}
            className='p-1 rounded-full text-pokegray-400 hover:bg-pokegray-100 dark:hover:bg-pokegray-800 transition-colors duration-200'
            aria-label='Limpiar búsqueda'
          >
            <X className='h-5 w-5' />
          </button>
        )
      }
    />
  )
}
