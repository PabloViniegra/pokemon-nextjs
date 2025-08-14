'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='min-h-screen bg-gradient-to-br from-pokeblue-50 via-white to-pikachu-50 dark:from-indigo-950 dark:via-indigo-900 dark:to-indigo-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-pikachu-200 rounded-full opacity-20 dark:opacity-10 animate-float'></div>
        <div className='absolute -bottom-20 -left-20 w-96 h-96 bg-thunder-200 rounded-full opacity-20 dark:opacity-10 animate-float animation-delay-2000'></div>
        <div className='absolute top-1/4 -right-20 w-64 h-64 bg-pokeblue-200 rounded-full opacity-15 dark:opacity-5 animate-float animation-delay-3000'></div>
      </div>

      <div className='relative z-10 max-w-4xl w-full bg-white/80 dark:bg-indigo-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1'>
        <div className='relative'>
          <div className='w-40 h-40 mx-auto mb-8 relative'>
            <div className='absolute inset-0 bg-pokered-100 dark:bg-pokered-900 rounded-full animate-ping opacity-20'></div>
            <div className='relative w-full h-full flex items-center justify-center'>
              <Image
                src='/images/pikachu-sad.jpg'
                alt='Pikachu triste'
                width={400}
                height={400}
                className='object-contain rounded-lg border-4 border-white dark:border-indigo-900 shadow-lg'
                priority
              />
            </div>
          </div>

          <h1 className='text-5xl md:text-6xl font-bold text-pokeblue-800 dark:text-pokeblue-200 mb-6 font-display tracking-tight'>
            <span className='font-sans font-semibold tracking-tight'>
              ¡Ups! Algo ha fallado
            </span>
          </h1>
          <p className='text-xl text-pokegray-700 dark:text-pokegray-300 mb-8 font-serif max-w-2xl mx-auto leading-relaxed'>
            Parece que Pikachu ha causado un cortocircuito. No te preocupes,
            nuestro equipo de entrenadores ya está trabajando en solucionarlo.
          </p>

          {error.digest && (
            <div className='mb-8 p-3 bg-pokeblue-50 dark:bg-indigo-900/50 rounded-lg inline-block'>
              <code className='text-sm font-mono text-pokeblue-700 dark:text-pokeblue-300'>
                Código: {error.digest}
              </code>
            </div>
          )}

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() => reset()}
              className='font-sans px-8 py-3.5 bg-gradient-to-r from-pikachu-400 to-pikachu-500 hover:from-pikachu-500 hover:to-pikachu-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-pikachu-200/50 transform hover:-translate-y-0.5 flex items-center justify-center gap-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z'
                  clipRule='evenodd'
                />
              </svg>
              Reintentar
            </button>
            <Link
              href='/'
              className='font-sans px-8 py-3.5 bg-gradient-to-r from-pokeblue-500 to-pokeblue-600 hover:from-pokeblue-600 hover:to-pokeblue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-pokeblue-200/50 transform hover:-translate-y-0.5 flex items-center justify-center gap-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
              </svg>
              Volver al inicio
            </Link>
          </div>

          <div className='mt-10 pt-6 border-t border-gray-200 dark:border-indigo-700'>
            <p className='text-sm font-serif text-pokegray-500 dark:text-pokegray-400'>
              ¿Necesitas ayuda?{' '}
              <a
                href='#'
                className='text-pokeblue-600 dark:text-pokeblue-400 hover:underline font-medium'
                onClick={(e) => {
                  e.preventDefault()
                  alert(
                    '¡Gracias por reportar el problema! Nuestro equipo lo revisará pronto.'
                  )
                }}
              >
                Contacta con soporte
              </a>
            </p>
          </div>
        </div>
      </div>

      <p className='mt-8 font-serif text-pokegray-800 dark:text-pokegray-400'>
        Si el problema persiste, por favor contacta con el soporte técnico.
      </p>
    </div>
  )
}
