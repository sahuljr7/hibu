'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ParticleBackground } from './backgrounds/particle-background'
import { FluidBackground } from './backgrounds/fluid-background'
import { motion, AnimatePresence } from 'framer-motion'

export function DynamicBackground() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1]">
            <AnimatePresence mode="wait">
                {resolvedTheme === 'dark' ? (
                    <motion.div
                        key="dark-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <ParticleBackground />
                    </motion.div>
                ) : (
                    <motion.div
                        key="light-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <FluidBackground />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
