export const readIds = (key: 'pokemon-favorites' | 'pokemon-likes'): number[] => {
  try {
    const raw = localStorage.getItem(key)
    const arr = raw ? (JSON.parse(raw) as number[]) : []
    return Array.isArray(arr) ? arr.filter((n) => Number.isInteger(n)) : []
  } catch {
    return []
  }
}

export const clearStorage = (key: 'pokemon-favorites' | 'pokemon-likes') => {
  localStorage.setItem(key, JSON.stringify([]))
  window.dispatchEvent(new Event('storage'))
}

export const getCounts = () => ({
  favs: readIds('pokemon-favorites').length,
  likes: readIds('pokemon-likes').length,
})
