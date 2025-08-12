'use client'

import { ShortPokemon, typeColors } from '@/types'
import { Card, CardHeader, CardBody, Button, Chip } from '@heroui/react'
import { ArrowRight, Heart, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function PokemonCard({
  pokemon,
  fixedWidth,
}: {
  pokemon: ShortPokemon
  fixedWidth?: string
}) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem('pokemon-favorites') || '[]'
    )
    const likes = JSON.parse(localStorage.getItem('pokemon-likes') || '[]')
    setIsFavorite(favorites.includes(pokemon.id))
    setIsLiked(likes.includes(pokemon.id))
  }, [pokemon.id])

  useEffect(() => {
    const handleStorageChange = () => {
      const favorites = JSON.parse(
        localStorage.getItem('pokemon-favorites') || '[]'
      )
      const likes = JSON.parse(localStorage.getItem('pokemon-likes') || '[]')
      setIsFavorite(favorites.includes(pokemon.id))
      setIsLiked(likes.includes(pokemon.id))
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [pokemon.id])

  const handleFav = () => {
    const favorites = JSON.parse(
      localStorage.getItem('pokemon-favorites') || '[]'
    )
    if (favorites.includes(pokemon.id)) {
      localStorage.setItem(
        'pokemon-favorites',
        JSON.stringify(favorites.filter((id: number) => id !== pokemon.id))
      )
      setIsFavorite(false)
    } else {
      localStorage.setItem(
        'pokemon-favorites',
        JSON.stringify([...favorites, pokemon.id])
      )
      setIsFavorite(true)
    }
    window.dispatchEvent(new Event('storage'))
  }

  const handleLike = () => {
    const likes = JSON.parse(localStorage.getItem('pokemon-likes') || '[]')
    if (likes.includes(pokemon.id)) {
      localStorage.setItem(
        'pokemon-likes',
        JSON.stringify(likes.filter((id: number) => id !== pokemon.id))
      )
      setIsLiked(false)
    } else {
      localStorage.setItem(
        'pokemon-likes',
        JSON.stringify([...likes, pokemon.id])
      )
      setIsLiked(true)
    }
    window.dispatchEvent(new Event('storage'))
  }

  const goToDetail = () => {
    router.push(`/pokemons/${pokemon.id}`)
  }

  return (
    <Card className='relative overflow-hidden bg-white rounded-2xl shadow-md border border-pokegray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-pikachu-300/50 min-w-[220px]'>
      <div
        className='absolute inset-0 bg-gradient-to-br from-pokeblue-50 to-pokegray-50 opacity-30'
        style={
          fixedWidth ? { width: fixedWidth, maxWidth: fixedWidth } : undefined
        }
      ></div>

      <Button
        isIconOnly
        size='sm'
        variant='light'
        onPress={goToDetail}
        className='absolute top-2 right-2 z-20 text-pokeblue-600 hover:text-pokeblue-700 transition-colors bg-pokegray-50/90 hover:bg-pokegray-100 backdrop-blur-sm shadow-sm border border-pokegray-200 hover:border-pokegray-300'
      >
        <ArrowRight className='w-4 h-4' />
      </Button>

      <CardHeader className='relative z-10 p-4 pb-2'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-sm font-sans font-medium text-pokeblue-800 bg-pokeblue-100 px-2 py-0.5 rounded-full'>
            #{pokemon.id.toString().padStart(3, '0')}
          </span>
          <div className='flex gap-1'>
            <Button
              isIconOnly
              size='sm'
              variant='light'
              className={`${
                isFavorite ? 'text-pokered-500' : 'text-pokegray-400'
              } hover:text-pokered-500 hover:bg-pokered-50 transition-colors`}
              onPress={handleFav}
            >
              <Heart
                className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`}
              />
            </Button>
            <Button
              isIconOnly
              size='sm'
              variant='light'
              className={`${
                isLiked ? 'text-pikachu-500' : 'text-pokegray-400'
              } hover:text-pikachu-500 hover:bg-pikachu-50 transition-colors`}
              onPress={handleLike}
            >
              <Star className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <div className='flex justify-center h-40 mb-1'>
        <Image
          src={pokemon.image || '/placeholder.svg'}
          alt={pokemon.name}
          width={500}
          height={500}
          className='h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xl'
          priority
        />
      </div>

      <CardBody className='relative z-10 p-4 pt-2'>
        <div className='space-y-3'>
          <h3 className='text-xl font-sans font-bold text-pokeblue-900 capitalize text-center font-google tracking-tight'>
            {pokemon.name}
          </h3>

          <div className='flex flex-wrap justify-center gap-2'>
            {pokemon.types.map((type) => (
              <Chip
                key={type}
                className={`
                  px-1 py-1 rounded-full text-xs font-semibold font-serif text-white capitalize
                  shadow-sm ${typeColors[type] || 'bg-pokegray-500'}
                  hover:shadow-md transition-shadow duration-200
                `}
              >
                {type}
              </Chip>
            ))}
          </div>
        </div>
        <div className='mt-4 space-y-2'>
          <div className='space-y-1'>
            <div className='flex items-center justify-between text-xs'>
              <span className='font-medium text-pokeblue-700 font-mono'>
                HP
              </span>
              <span className='font-bold text-pokeblue-900 font-mono'>
                {pokemon.stats.hp}
              </span>
            </div>
            <div className='h-2 bg-pokegray-200 rounded-full overflow-hidden'>
              <div
                className='h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500'
                style={{
                  width: `${Math.min(100, (pokemon.stats.hp / 255) * 100)}%`,
                }}
              />
            </div>
          </div>

          <div className='space-y-1'>
            <div className='flex items-center justify-between text-xs'>
              <span className='font-medium text-pokeblue-700 font-mono'>
                ATK
              </span>
              <span className='font-bold text-pokeblue-900 font-mono'>
                {pokemon.stats.attack}
              </span>
            </div>
            <div className='h-2 bg-pokegray-200 rounded-full overflow-hidden'>
              <div
                className='h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-500'
                style={{
                  width: `${Math.min(
                    100,
                    (pokemon.stats.attack / 255) * 100
                  )}%`,
                }}
              />
            </div>
          </div>

          <div className='space-y-1'>
            <div className='flex items-center justify-between text-xs'>
              <span className='font-medium text-pokeblue-700 font-mono'>
                DEF
              </span>
              <span className='font-bold text-pokeblue-900 font-mono'>
                {pokemon.stats.defense}
              </span>
            </div>
            <div className='h-2 bg-pokegray-200 rounded-full overflow-hidden'>
              <div
                className='h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-500'
                style={{
                  width: `${Math.min(
                    100,
                    (pokemon.stats.defense / 255) * 100
                  )}%`,
                }}
              />
            </div>
          </div>

          <div className='space-y-1'>
            <div className='flex items-center justify-between text-xs'>
              <span className='font-medium text-pokeblue-700 font-mono'>
                SPD
              </span>
              <span className='font-bold text-pokeblue-900 font-mono'>
                {pokemon.stats.speed}
              </span>
            </div>
            <div className='h-2 bg-pokegray-200 rounded-full overflow-hidden'>
              <div
                className='h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500'
                style={{
                  width: `${Math.min(100, (pokemon.stats.speed / 255) * 100)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
