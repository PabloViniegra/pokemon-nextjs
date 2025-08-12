'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapFadeIn<T extends HTMLElement>(options?: {
  y?: number
  delay?: number
}) {
  const ref = useRef<T>(null)
  useLayoutEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        autoAlpha: 0,
        y: options?.y ?? 20,
        duration: 0.6,
        ease: 'power2.out',
        delay: options?.delay ?? 0,
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [options])

  return ref
}
