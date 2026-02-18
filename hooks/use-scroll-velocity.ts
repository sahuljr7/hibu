'use client'

import { useState, useEffect, useRef } from 'react'

export function useScrollVelocity() {
    const [velocity, setVelocity] = useState(0)
    const lastScrollY = useRef(0)
    const lastTimestamp = useRef(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const currentTimestamp = Date.now()

            if (lastTimestamp.current > 0) {
                const deltaY = Math.abs(currentScrollY - lastScrollY.current)
                const deltaTime = currentTimestamp - lastTimestamp.current

                if (deltaTime > 0) {
                    // Pixels per millisecond
                    const currentVelocity = deltaY / deltaTime
                    setVelocity(currentVelocity)
                }
            }

            lastScrollY.current = currentScrollY
            lastTimestamp.current = currentTimestamp
            setIsScrolling(true)

            if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false)
                setVelocity(0)
            }, 150)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
        }
    }, [])

    return { velocity, isScrolling }
}
