'use client'

import { motion } from 'framer-motion'
import { useScrollVelocity } from '@/hooks/use-scroll-velocity'

export function FluidBackground() {
    const { velocity } = useScrollVelocity()

    // Interaction intensity: higher when still, lower when scrolling
    // This helps keep focus on content during scroll
    const intensity = Math.max(0.4, 1 - velocity * 1.5)

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-50 bg-[#fafaf6]">
            {/* Soft gradient orbs */}
            <motion.div
                className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[100px]"
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -30, 50, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 20 * intensity,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px]"
                animate={{
                    x: [0, -50, 30, 0],
                    y: [0, 60, -30, 0],
                    scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                    duration: 25 * intensity,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            <motion.div
                className="absolute -bottom-[10%] left-[20%] w-[55%] h-[55%] rounded-full bg-primary/5 blur-[100px]"
                animate={{
                    x: [0, 30, -40, 0],
                    y: [0, -50, 20, 0],
                    scale: [1, 1.15, 0.85, 1],
                }}
                transition={{
                    duration: 30 * intensity,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
            />

            {/* Subtle organic mesh (optional gradient texture) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_100%)]" />
        </div>
    )
}
