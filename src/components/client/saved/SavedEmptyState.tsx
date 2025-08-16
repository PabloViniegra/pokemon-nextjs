'use client'

import { Card, CardBody } from '@heroui/react'

type EmptyStateKind = 'favs' | 'likes'

interface SavedEmptyStateProps {
  kind: EmptyStateKind
}

export default function SavedEmptyState({ kind }: SavedEmptyStateProps) {
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
