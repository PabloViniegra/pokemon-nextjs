'use client'
import { Pagination } from '@heroui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function PokedexPagination({
  page,
  totalPages,
}: {
  page: number
  totalPages: number
}) {
  const pathname = usePathname()
  const router = useRouter()
  const sp = useSearchParams()

  const onChange = (newPage: number) => {
    const next = new URLSearchParams(sp)
    next.set('page', String(newPage))
    router.replace(`${pathname}?${next.toString()}`, { scroll: false })
  }

  return (
    <div className='flex justify-center'>
      <Pagination
        total={totalPages}
        page={page}
        onChange={onChange}
        showControls
        boundaries={1}
        siblings={1}
      />
    </div>
  )
}
