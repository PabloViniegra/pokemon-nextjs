'use client'

import ShinyText from '@/components/client/ui/ShinyText'

interface HeaderTextProps {
  text: string
  className?: string
}

export default function HeaderText({ text, className = '' }: HeaderTextProps) {
  const baseClasses = [
    'text-5xl md:text-6xl lg:text-7xl font-extrabold text-center font-display',
    'bg-clip-text text-transparent bg-gradient-to-r from-pikachu-400 via-pikachu-500 to-pikachu-600',
    'tracking-tight leading-tight',
    'drop-shadow-md',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <h1 className={baseClasses}>
      <ShinyText
        text={text}
        disabled={false}
        speed={5}
        className='font-google'
      />
    </h1>
  )
}
