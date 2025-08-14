'use client'

import { RegionRow } from '@/types'
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Chip,
  Button,
} from '@heroui/react'
import Link from 'next/link'

const pretty = (s: string) => s.replace(/-/g, ' ')

export default function RegionsClient({ rows }: { rows: RegionRow[] }) {
  return (
    <Card>
      <CardBody className='p-0'>
        <Accordion selectionMode='multiple' variant='splitted'>
          {rows.map((r) => (
            <AccordionItem
              key={r.id}
              aria-label={r.name}
              title={
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center gap-3'>
                    <span className='text-sm text-foreground-500 font-mono'>
                      #{String(r.id).padStart(2, '0')}
                    </span>
                    <span className='capitalize font-semibold'>
                      {pretty(r.name)}
                    </span>
                    {r.generation && (
                      <Chip
                        size='sm'
                        variant='flat'
                        color='primary'
                        className='capitalize font-serif text-pokeblue-900'
                      >
                        {pretty(r.generation)}
                      </Chip>
                    )}
                  </div>
                  <div className='flex items-center gap-2'>
                    <Chip
                      size='sm'
                      variant='flat'
                      className='bg-pokeblue-100 text-pokeblue-700'
                    >
                      {r.pokedexes.length} pokedéx
                    </Chip>
                    <Chip
                      size='sm'
                      variant='flat'
                      className='bg-pikachu-100 text-pokeblue-700'
                    >
                      {r.versionGroups.length} versiones
                    </Chip>
                    <Chip
                      size='sm'
                      variant='flat'
                      className='bg-pokegray-200 text-foreground-700'
                    >
                      {r.locationsCount} localizaciones
                    </Chip>
                  </div>
                </div>
              }
            >
              <div className='px-2 md:px-4 pb-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='rounded-xl border border-pokegray-200 p-4'>
                    <p className='text-sm text-foreground-500 mb-2'>Pokedéx</p>
                    <div className='flex flex-wrap gap-2'>
                      {r.pokedexes.length ? (
                        r.pokedexes.map((p) => (
                          <Chip key={p} size='sm' className='capitalize'>
                            {pretty(p)}
                          </Chip>
                        ))
                      ) : (
                        <span className='text-sm text-foreground-400'>—</span>
                      )}
                    </div>
                  </div>
                  <div className='rounded-xl border border-pokegray-200 p-4'>
                    <p className='text-sm text-foreground-500 mb-2'>
                      Versiones
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {r.versionGroups.length ? (
                        r.versionGroups.map((v) => (
                          <Chip
                            key={v}
                            size='sm'
                            variant='flat'
                            className='capitalize'
                          >
                            {pretty(v)}
                          </Chip>
                        ))
                      ) : (
                        <span className='text-sm text-foreground-400'>—</span>
                      )}
                    </div>
                  </div>
                  <div className='rounded-xl border border-pokegray-200 p-4'>
                    <p className='text-sm text-foreground-500 mb-2'>Acciones</p>
                    <div className='flex flex-wrap gap-2'>
                      <Button
                        as={Link}
                        href={`/pokedex?q=${encodeURIComponent(r.name)}`}
                        variant='flat'
                        size='sm'
                      >
                        Buscar en Pokédex
                      </Button>
                      {r.generation && (
                        <Button
                          as={Link}
                          href={`/pokedex?types=&q=&page=1&perPage=20`}
                          variant='bordered'
                          size='sm'
                        >
                          Ver generación
                        </Button>
                      )}
                    </div>
                    <p className='mt-3 text-xs text-foreground-500'>
                      Tip: usa la barra de búsqueda de la Pokédex para explorar
                      Pokémon asociados a “{pretty(r.name)}”.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </CardBody>
    </Card>
  )
}
