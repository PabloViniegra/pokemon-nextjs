'use client'

import { useEffect, useState, useTransition } from 'react'
import { Tabs, Tab } from '@heroui/react'
import { getShortPokemonsByIds } from '@/app/actions/pokemon'
import SavedGridSkeleton from '@/components/client/skeletons/skeletons'
import { readIds, getCounts } from '@/lib/storage-utils'
import SavedActions from './SavedActions'
import SavedTabTitle from './SavedTabTitle'
import SavedGrid from './SavedGrid'
import SavedEmptyState from './SavedEmptyState'
import type { ShortPokemon } from '@/types'

type TabKey = 'favs' | 'likes'

export default function SavedClient() {
  const [tab, setTab] = useState<TabKey>('favs')
  const [items, setItems] = useState<ShortPokemon[]>([])
  const [isPending, startTransition] = useTransition()
  const [counts, setCounts] = useState(getCounts())

  const load = (k: TabKey) => {
    const key = k === 'favs' ? 'pokemon-favorites' : 'pokemon-likes'
    const ids = readIds(key)
    startTransition(async () => {
      const data = await getShortPokemonsByIds(ids)
      setItems(data)
      setCounts(getCounts())
    })
  }

  useEffect(() => {
    setCounts(getCounts())
    load(tab)
  }, [tab])

  useEffect(() => {
    const onStorage = () => {
      setCounts(getCounts())
      load(tab)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [tab])

  const empty = items.length === 0 && !isPending
  const currentCount = tab === 'favs' ? counts.favs : counts.likes

  const clearCurrent = () => {
    const key = tab === 'favs' ? 'pokemon-favorites' : 'pokemon-likes'
    localStorage.setItem(key, JSON.stringify([]))
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='text-foreground-500 font-serif'>
          {tab === 'favs' ? `${counts.favs} favoritos` : `${counts.likes} me gusta`}
        </div>
        <SavedActions
          tab={tab}
          count={currentCount}
          isPending={isPending}
          onClear={clearCurrent}
        />
      </div>

      <Tabs
        selectedKey={tab}
        onSelectionChange={(k) => setTab(k as TabKey)}
        aria-label='Favoritos y Me gusta'
        className='w-full'
      >
        <Tab
          key='favs'
          title={<SavedTabTitle kind='favs' count={counts.favs} />}
        >
          {isPending ? (
            <SavedGridSkeleton />
          ) : empty ? (
            <SavedEmptyState kind='favs' />
          ) : (
            <SavedGrid items={items} />
          )}
        </Tab>

        <Tab
          key='likes'
          title={<SavedTabTitle kind='likes' count={counts.likes} />}
        >
          {isPending ? (
            <SavedGridSkeleton />
          ) : empty ? (
            <SavedEmptyState kind='likes' />
          ) : (
            <SavedGrid items={items} />
          )}
        </Tab>
      </Tabs>
    </>
  )
}
