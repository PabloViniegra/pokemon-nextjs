'use client'

import { ReactNode } from 'react'

interface RegionSectionProps {
  title: string
  children: ReactNode
}

export default function RegionSection({ title, children }: RegionSectionProps) {
  return (
    <div className='rounded-xl border border-pokegray-200 p-4'>
      <p className='text-sm text-foreground-500 mb-2'>{title}</p>
      <div className='flex flex-wrap gap-2'>{children}</div>
    </div>
  )
}
