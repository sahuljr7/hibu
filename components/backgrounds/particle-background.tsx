'use client'

import { useEffect, useRef } from 'react'
import { useScrollVelocity } from '@/hooks/use-scroll-velocity'

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { velocity } = useScrollVelocity()
    const particles = useRef<Particle[]>([])
    const animationFrameId = useRef<number>(0)

    class Particle {
        x: number
        y: number
        size: number
        baseSpeedX: number
        baseSpeedY: number
        speedX: number
        speedY: number
        opacity: number
        color: string

        constructor(width: number, height: number) {
            this.x = Math.random() * width
            this.y = Math.random() * height
            this.size = Math.random() * 1.5 + 0.5
            this.baseSpeedX = Math.random() * 0.4 - 0.2
            this.baseSpeedY = Math.random() * 0.4 - 0.2
            this.speedX = this.baseSpeedX
            this.speedY = this.baseSpeedY
            // Use Hibu primary-ish colors for some particles
            const colors = ['rgba(168, 85, 247, 0.3)', 'rgba(6, 182, 212, 0.2)', 'rgba(255, 255, 255, 0.15)']
            this.color = colors[Math.floor(Math.random() * colors.length)]
            this.opacity = Math.random() * 0.5 + 0.2
        }

        update(width: number, height: number, velocityScale: number) {
            // Reduce speed when user scrolls fast to avoid distraction
            const currentSpeedScale = 1 / (1 + velocityScale * 2)
            this.x += this.speedX * currentSpeedScale
            this.y += this.speedY * currentSpeedScale

            if (this.x > width) this.x = 0
            else if (this.x < 0) this.x = width
            if (this.y > height) this.y = 0
            else if (this.y < 0) this.y = height
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        const initParticles = () => {
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
            particles.current = Array.from({ length: Math.min(particleCount, 100) }, () => new Particle(canvas.width, canvas.height))
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.current.forEach(particle => {
                particle.update(canvas.width, canvas.height, velocity)
                particle.draw(ctx)
            })

            animationFrameId.current = requestAnimationFrame(animate)
        }

        window.addEventListener('resize', resize)
        resize()
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [velocity])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[-1] opacity-60"
            style={{ filter: 'blur(0.5px)' }}
        />
    )
}
