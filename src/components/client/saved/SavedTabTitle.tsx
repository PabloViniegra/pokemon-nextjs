import { Heart, Star } from 'lucide-react'

interface SavedTabTitleProps {
  kind: 'favs' | 'likes'
  count: number
}

export default function SavedTabTitle({ kind, count }: SavedTabTitleProps) {
  const icon =
    kind === 'favs' ? (
      <Heart className='w-4 h-4 text-pokered-500' />
    ) : (
      <Star className='w-4 h-4 text-pikachu-500' />
    )

  const label = kind === 'favs' ? 'Me gusta' : 'Favoritos'

  return (
    <div className='flex items-center gap-2'>
      {icon}
      <span>{label}</span>
      <span className='text-foreground-400 text-xs'>({count})</span>
    </div>
  )
}
