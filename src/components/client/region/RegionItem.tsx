'use client'

import { RegionRow } from '@/types'
import { AccordionItem } from '@heroui/react'
import RegionHeader from '@/components/client/region/RegionHeader'
import RegionContent from '@/components/client/region/RegionContent'

export default function RegionItem({ region }: { region: RegionRow }) {
  return (
    <AccordionItem
      key={region.id}
      aria-label={region.name}
      title={<RegionHeader region={region} />}
    >
      <RegionContent region={region} />
    </AccordionItem>
  )
}
