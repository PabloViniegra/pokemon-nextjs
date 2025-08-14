'use client'

import { useEffect, useState } from 'react'

export function useFavs(id: number) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem('pokemon-favorites') || '[]'
    )
    setIsFavorite(favorites.includes(id))
  }, [id])

  useEffect(() => {
    const handleStorageChange = () => {
      const favorites = JSON.parse(
        localStorage.getItem('pokemon-favorites') || '[]'
      )
      setIsFavorite(favorites.includes(id))
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [id])

  const toggleFav = () => {
    const favorites = JSON.parse(
      localStorage.getItem('pokemon-favorites') || '[]'
    )
    if (favorites.includes(id)) {
      localStorage.setItem(
        'pokemon-favorites',
        JSON.stringify(favorites.filter((id: number) => id !== id))
      )
      setIsFavorite(false)
    } else {
      localStorage.setItem(
        'pokemon-favorites',
        JSON.stringify([...favorites, id])
      )
      setIsFavorite(true)
    }
    window.dispatchEvent(new Event('storage'))
  }

  return { isFavorite, toggleFav }
}
