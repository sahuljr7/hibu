'use client'

import { motion } from 'framer-motion'
import { LoginForm } from '@/components/login-form'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background is already handled by RootLayout's DynamicBackground component */}

            {/* Back Button */}
            <motion.div
                className="absolute top-8 left-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group"
                >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </motion.div>

            <div className="w-full max-w-2xl relative z-10">
                <LoginForm />
            </div>

            {/* Subtle Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square pointer-events-none -z-10">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
            </div>
        </div>
    )
}
