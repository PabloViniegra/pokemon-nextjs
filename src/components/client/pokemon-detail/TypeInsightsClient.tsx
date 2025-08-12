'use client'

import { Row, typeColors } from '@/types'
import { Card, CardBody, Chip } from '@heroui/react'

export default function TypeInsightsClient({ rows }: { rows: Row[] }) {
  const top = rows.slice(0, 8)
  const max = top[0]?.count ?? 1

  return (
    <Card className='h-full bg-white/80 backdrop-blur-sm border border-pokegray-200 shadow-sm hover:shadow-md transition-shadow duration-300'>
      <CardBody className='p-4 lg:p-6'>
        <div className='flex items-center justify-between mb-4 pb-2 border-b border-pokegray-100'>
          <h3 className='text-lg font-medium text-black font-sans'>
            Tipos: Prevalencia y Afinidades
          </h3>
          <span className='text-xs text-pokegray-500 font-mono'>PokéAPI</span>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
          {top.map((t) => (
            <div key={t.name} className='space-y-2 group'>
              <div className='flex items-center justify-between'>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium font-serif capitalize shadow-sm transition-all duration-200 ${
                    typeColors[t.name] || 'bg-pokegray-300 text-pokegray-800'
                  } group-hover:scale-105`}
                >
                  {t.name}
                </span>
                <span className='text-xs font-mono text-pokegray-600 bg-pokegray-100 px-2 py-0.5 rounded'>
                  {t.count}
                </span>
              </div>
              <div className='h-1.5 w-full bg-pokegray-100 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-gradient-to-r from-pikachu-400 to-pikachu-600 rounded-full transition-all duration-1000 ease-out'
                  style={{
                    width: `${Math.min(100, (t.count / max) * 100)}%`,
                    opacity: 0.9,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {rows.slice(0, 2).map((t) => (
            <div
              key={t.name}
              className='bg-gradient-to-br from-white to-pokegray-50 rounded-xl border border-pokegray-200 p-4 shadow-sm hover:shadow transition-shadow duration-300 group'
            >
              <div className='flex items-center gap-3 mb-3 pb-2 border-b border-pokegray-100'>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium font-serif capitalize shadow-sm ${
                    typeColors[t.name] || 'bg-pokegray-300 text-pokegray-800'
                  }`}
                >
                  {t.name}
                </span>
                <div className='flex-1 h-px bg-gradient-to-r from-pokegray-200 to-transparent' />
                <span className='text-xs font-medium font-mono text-pokegray-500'>
                  Afinidades
                </span>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-xs font-semibold text-pokegray-700 mb-2 flex items-center gap-1'>
                    <span className='inline-block w-2 h-2 rounded-full bg-pikachu-500 font-serif font-medium tracking-tight' />
                    Ataca x2 a
                  </p>
                  <div className='flex flex-wrap gap-1.5'>
                    {t.strong.length ? (
                      t.strong.map((n) => (
                        <Chip
                          key={`${t.name}-to-${n}`}
                          size='sm'
                          className={`text-xs font-medium font-serif px-2.5 py-1 capitalize transition-transform hover:scale-105 ${
                            typeColors[n]
                              ? `${typeColors[n]} text-white`
                              : 'bg-pokegray-200 text-pokegray-800'
                          }`}
                        >
                          {n}
                        </Chip>
                      ))
                    ) : (
                      <span className='text-xs text-pokegray-400 italic'>
                        Ninguno
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <p className='text-xs font-semibold text-pokegray-700 mb-2 flex items-center gap-1'>
                    <span className='inline-block w-2 h-2 rounded-full bg-pokeblue-500 font-serif font-medium tracking-tight' />
                    Recibe x2 de
                  </p>
                  <div className='flex flex-wrap gap-1.5'>
                    {t.weak.length ? (
                      t.weak.map((n) => (
                        <Chip
                          key={`${t.name}-from-${n}`}
                          size='sm'
                          className={`text-xs font-medium px-2.5 py-1 capitalize transition-transform hover:scale-105 ${
                            typeColors[n]
                              ? `${typeColors[n]} text-white`
                              : 'bg-pokegray-200 text-pokegray-800'
                          }`}
                        >
                          {n}
                        </Chip>
                      ))
                    ) : (
                      <span className='text-xs text-pokegray-400 italic font-serif font-medium tracking-tight'>
                        Ninguno
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
