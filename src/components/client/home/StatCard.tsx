'use client'
import { Card, CardBody } from '@heroui/react'

export default function StatCard({
  label,
  value,
}: {
  label: string
  value: string | number
}) {
  return (
    <Card className='h-full'>
      <CardBody className='flex flex-col gap-1'>
        <span className='text-sm text-foreground-500 font-mono'>{label}</span>
        <span className='text-3xl font-semibold font-serif'>{value}</span>
      </CardBody>
    </Card>
  )
}
