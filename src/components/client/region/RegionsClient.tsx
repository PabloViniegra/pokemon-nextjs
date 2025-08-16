'use client'

import { RegionRow } from '@/types'
import RegionAccordion from '@/components/client/region/RegionAccordion'

export default function RegionsClient({ rows }: { rows: RegionRow[] }) {
  return <RegionAccordion rows={rows} />
}
