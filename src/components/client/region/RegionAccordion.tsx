'use client'

import { RegionRow } from '@/types'
import { Accordion, AccordionItem, Card, CardBody } from '@heroui/react'
import RegionHeader from '@/components/client/region/RegionHeader'
import RegionContent from '@/components/client/region/RegionContent'

const itemClasses = {
  base: 'py-0 w-full',
  title: 'font-normal text-medium',
  trigger:
    'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center',
  indicator: 'text-medium',
  content: 'text-small px-2',
}

export default function RegionAccordion({ rows }: { rows: RegionRow[] }) {
  return (
    <Card>
      <CardBody className='p-0'>
        <Accordion
          selectionMode='multiple'
          variant='splitted'
          itemClasses={itemClasses}
          className='w-full'
        >
          {rows.map((region) => (
            <AccordionItem
              key={region.id}
              aria-label={region.name}
              title={<RegionHeader region={region} />}
            >
              <RegionContent region={region} />
            </AccordionItem>
          ))}
        </Accordion>
      </CardBody>
    </Card>
  )
}
