'use client'

import { RegionRow } from '@/types'
import RegionSection from '@/components/client/region/RegionSection'
import { pretty } from '@/lib/string-utils'

export default function RegionContent({ region }: { region: RegionRow }) {
  return (
    <div className='px-2 md:px-4 pb-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <RegionSection title='Pokedéx'>
          {region.pokedexes.length ? (
            region.pokedexes.map((p) => (
              <span key={p} className='chip capitalize'>
                {pretty(p)}
              </span>
            ))
          ) : (
            <span className='text-sm text-foreground-400'>—</span>
          )}
        </RegionSection>

        <RegionSection title='Versiones'>
          {region.versionGroups.length ? (
            region.versionGroups.map((v) => (
              <span key={v} className='chip capitalize variant-flat'>
                {pretty(v)}
              </span>
            ))
          ) : (
            <span className='text-sm text-foreground-400'>—</span>
          )}
        </RegionSection>

        <RegionSection title='Acciones'>
          <div className='flex flex-col gap-3'>
            <a
              href={`/pokedex?regions=${encodeURIComponent(region.name)}`}
              className='btn btn-flat btn-sm'
            >
              Buscar en Pokédex
            </a>
            <p className='text-xs text-foreground-500'>
              Tip: usa la barra de búsqueda de la Pokédex para explorar Pokémon
              asociados a “{pretty(region.name)}”.
            </p>
          </div>
        </RegionSection>
      </div>
    </div>
  )
}
