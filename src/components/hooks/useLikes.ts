'use client'
import { useEffect, useState } from 'react'

export function useLikes(pokemonId: number) {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('pokemon-likes') || '[]')
    setIsLiked(likes.includes(pokemonId))
  }, [pokemonId])

  useEffect(() => {
    const handleStorageChange = () => {
      const likes = JSON.parse(localStorage.getItem('pokemon-likes') || '[]')
      setIsLiked(likes.includes(pokemonId))
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [pokemonId])

  const toggleLike = () => {
    const likes = JSON.parse(localStorage.getItem('pokemon-likes') || '[]')
    if (likes.includes(pokemonId)) {
      localStorage.setItem(
        'pokemon-likes',
        JSON.stringify(likes.filter((id: number) => id !== pokemonId))
      )
      setIsLiked(false)
    } else {
      localStorage.setItem(
        'pokemon-likes',
        JSON.stringify([...likes, pokemonId])
      )
      setIsLiked(true)
    }
    window.dispatchEvent(new Event('storage'))
  }

  return { isLiked, toggleLike }
}
