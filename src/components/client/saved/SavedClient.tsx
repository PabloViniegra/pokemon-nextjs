'use client'

import { useEffect, useState, useTransition } from 'react'
import Link from 'next/link'
import { Tabs, Tab, Button, Card, CardBody } from '@heroui/react'
import { Heart, Star, Trash2 } from 'lucide-react'
import { PokemonCard } from '@/components/client/pokedex/PokemonCard'
import type { ShortPokemon } from '@/types'
import { getShortPokemonsByIds } from '@/app/actions/pokemon'
import SavedGridSkeleton from '@/components/client/skeletons/skeletons'

type TabKey = 'favs' | 'likes'

export default function SavedClient() {
  const [tab, setTab] = useState<TabKey>('favs')
  const [items, setItems] = useState<ShortPokemon[]>([])
  const [isPending, startTransition] = useTransition()
  const [counts, setCounts] = useState({ favs: 0, likes: 0 })

  const readIds = (key: 'pokemon-favorites' | 'pokemon-likes') => {
    try {
      const raw = localStorage.getItem(key)
      const arr = raw ? (JSON.parse(raw) as number[]) : []
      return Array.isArray(arr) ? arr.filter((n) => Number.isInteger(n)) : []
    } catch {
      return []
    }
  }

  const load = (k: TabKey) => {
    const key = k === 'favs' ? 'pokemon-favorites' : 'pokemon-likes'
    const ids = readIds(key)
    startTransition(async () => {
      const data = await getShortPokemonsByIds(ids)
      setItems(data)
      setCounts({
        favs: readIds('pokemon-favorites').length,
        likes: readIds('pokemon-likes').length,
      })
    })
  }

  useEffect(() => {
    setCounts({
      favs: readIds('pokemon-favorites').length,
      likes: readIds('pokemon-likes').length,
    })
    load(tab)
  }, [tab])

  useEffect(() => {
    const onStorage = () => {
      setCounts({
        favs: readIds('pokemon-favorites').length,
        likes: readIds('pokemon-likes').length,
      })
      load(tab)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [tab])

  const empty = items.length === 0 && !isPending

  const clearCurrent = () => {
    const key = tab === 'favs' ? 'pokemon-favorites' : 'pokemon-likes'
    localStorage.setItem(key, JSON.stringify([]))
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='text-foreground-500 font-serif'>
          {tab === 'favs'
            ? `${counts.favs} favoritos`
            : `${counts.likes} me gusta`}
        </div>
        <div className='flex gap-2'>
          <Button
            variant='solid'
            color='danger'
            startContent={<Trash2 className='w-4 h-4' />}
            onPress={clearCurrent}
            isDisabled={isPending || empty}
            className='font-sans font-medium  tracking-tight transition-all hover:scale-105 hover:shadow-md bg-pokered-500 hover:bg-pokered-600 text-white'
            radius='md'
          >
            Vaciar lista
          </Button>
          <Button
            as={Link}
            href='/pokedex'
            variant='solid'
            className='font-sans font-medium tracking-tight transition-all hover:scale-105 hover:shadow-lg bg-pokeblue-600 hover:bg-pokeblue-700 text-white'
            radius='md'
          >
            Ir a Pokédex
          </Button>
        </div>
      </div>

      <Tabs
        selectedKey={tab}
        onSelectionChange={(k) => setTab(k as TabKey)}
        aria-label='Favoritos y Me gusta'
        className='w-full'
      >
        <Tab
          key='favs'
          title={
            <div className='flex items-center gap-2'>
              <Heart className='w-4 h-4 text-pokered-500' />
              <span>Me gusta</span>
              <span className='text-foreground-400 text-xs'>
                ({counts.favs})
              </span>
            </div>
          }
        >
          {isPending ? (
            <SavedGridSkeleton />
          ) : empty ? (
            <EmptyState kind='favs' />
          ) : (
            <Grid items={items} />
          )}
        </Tab>

        <Tab
          key='likes'
          title={
            <div className='flex items-center gap-2'>
              <Star className='w-4 h-4 text-pikachu-500' />
              <span>Favoritos</span>
              <span className='text-foreground-400 text-xs'>
                ({counts.likes})
              </span>
            </div>
          }
        >
          {isPending ? (
            <SavedGridSkeleton />
          ) : empty ? (
            <EmptyState kind='likes' />
          ) : (
            <Grid items={items} />
          )}
        </Tab>
      </Tabs>
    </>
  )
}

function Grid({ items }: { items: ShortPokemon[] }) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
      {items.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </section>
  )
}

function EmptyState({ kind }: { kind: 'favs' | 'likes' }) {
  return (
    <Card className='mt-6 bg-pokegray-100 border border-pokegray-200'>
      <CardBody className='p-8 text-center'>
        <p className='text-foreground-600'>
          {kind === 'favs'
            ? 'Aún no tienes Pokémon en favoritos.'
            : 'Aún no has marcado “me gusta” en ningún Pokémon.'}
        </p>
        <p className='text-foreground-500 text-sm mt-1'>
          Ve a la Pokédex y usa el ❤️ o ⭐ en las cards.
        </p>
      </CardBody>
    </Card>
  )
}
