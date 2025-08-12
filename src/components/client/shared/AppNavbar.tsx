'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link as HeroLink,
  NavbarBrand,
  Button,
} from '@heroui/react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Home, BookOpen } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Dashboard', href: '/', icon: Home },
  { label: 'Pokédex', href: '/pokedex?page=1', icon: BookOpen },
]

export default function AppNavbar() {
  const pathname = usePathname()

  return (
    <Navbar
      maxWidth='full'
      className='bg-gradient-to-r from-pokeblue-800 to-indigo-800 shadow-lg border-b-2 border-pikachu-400/30'
      classNames={{
        wrapper: 'px-4 sm:px-6 lg:px-8',
      }}
    >
      <NavbarBrand
        as={HeroLink}
        href='/'
        className='flex items-center hover:opacity-90 transition-opacity py-2'
      >
        <div className='relative h-16 w-auto flex-shrink-0'>
          <Image
            src='/images/logo.png'
            alt='Pokémon Logo'
            width={150}
            height={60}
            className='h-full w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-200'
            priority
          />
        </div>
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-2 ml-6' justify='center'>
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <NavbarItem
              key={link.href}
              isActive={isActive}
              className='relative group'
            >
              <Link
                href={link.href}
                className={`
                  flex items-center gap-2 text-base font-serif tracking-tight font-medium px-4 py-2 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? 'text-white bg-pikachu-500/20 hover:bg-pikachu-500/30'
                      : 'text-white/90 hover:bg-pokeblue-700/50 hover:text-white'
                  }
                `}
              >
                <link.icon className='size-5 text-yellow-300' />
                <span>{link.label}</span>
              </Link>
              {isActive && (
                <div className='absolute -bottom-3 left-1/2 w-1/2 h-1 bg-pikachu-400 rounded-full -translate-x-1/2' />
              )}
            </NavbarItem>
          )
        })}
      </NavbarContent>
    </Navbar>
  )
}
