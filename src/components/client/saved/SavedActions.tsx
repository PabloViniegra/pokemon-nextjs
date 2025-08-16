'use client'

import { Button } from '@heroui/react'
import Link from 'next/link'
import { Trash2 } from 'lucide-react'

interface SavedActionsProps {
  tab: 'favs' | 'likes'
  count: number
  isPending: boolean
  onClear: () => void
}

export default function SavedActions({
  tab,
  count,
  isPending,
  onClear,
}: SavedActionsProps) {
  return (
    <div className='flex gap-2'>
      <Button
        variant='solid'
        color='danger'
        startContent={<Trash2 className='w-4 h-4' />}
        onPress={onClear}
        isDisabled={isPending || count === 0}
        className='font-sans font-medium tracking-tight transition-all hover:scale-105 hover:shadow-md bg-pokered-500 hover:bg-pokered-600 text-white'
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
  )
}
