'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '@heroui/react'

export default function SearchBox() {
  const router = useRouter()
  const q = useSearchParams().get('q') ?? ''
  return (
    <Input
      defaultValue={q}
      placeholder='Busca por nombre…'
      onKeyDown={(e: any) => {
        if (e.key === 'Enter')
          router.push(`/pokedex?q=${encodeURIComponent(e.currentTarget.value)}`)
      }}
      className='max-w-md'
    />
  )
}
