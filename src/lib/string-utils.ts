export const pretty = (s: string): string => s.replace(/-/g, ' ')

export const formatId = (id: number): string => `#${String(id).padStart(2, '0')}`
