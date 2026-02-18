'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Key, Eye, EyeOff, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    }

    return (
        <motion.div
            className="w-full max-w-md mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Header Section */}
            <div className="text-center mb-8 space-y-4">
                <motion.div
                    className="flex items-center justify-center gap-2"
                    variants={itemVariants}
                    custom={0}
                >
                    <span className="text-4xl font-bold tracking-tighter text-foreground font-display">
                        hibu
                    </span>
                    <span className="text-3xl font-light text-muted-foreground/80 font-display">
                        Performance Dashboard
                    </span>
                </motion.div>

                <motion.p
                    className="text-sm text-muted-foreground"
                    variants={itemVariants}
                    custom={1}
                >
                    Former Signpost software clients{' '}
                    <Link href="#" className="text-accent hover:underline font-medium transition-colors">
                        login here
                    </Link>.
                </motion.p>
            </div>

            {/* Form Section */}
            <div className="space-y-4">
                {/* Email Field */}
                <motion.div
                    className="relative group"
                    variants={itemVariants}
                    custom={2}
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={20} className="text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-card border border-border/60 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/60 text-lg shadow-sm"
                    />
                </motion.div>

                {/* Password Field */}
                <motion.div
                    className="relative group"
                    variants={itemVariants}
                    custom={3}
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Key size={20} className="text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-20 py-4 bg-card border border-border/60 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/60 text-lg shadow-sm"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-accent text-xs font-bold hover:text-accent/80 transition-colors uppercase tracking-wider"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </motion.div>

                {/* Keep me logged in */}
                <motion.div
                    className="flex items-center gap-2 px-1"
                    variants={itemVariants}
                    custom={4}
                >
                    <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20 cursor-pointer"
                    />
                    <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer select-none">
                        Keep me logged in
                    </label>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                    className="pt-4"
                    variants={itemVariants}
                    custom={5}
                >
                    <button
                        className="w-full py-4 bg-transparent border-2 border-primary text-primary font-bold text-xl rounded-xl hover:bg-primary hover:text-primary-foreground transform active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/10 flex items-center justify-center gap-2 group uppercase tracking-widest"
                    >
                        Log In
                    </button>
                </motion.div>
            </div>

            {/* Footer Links */}
            <motion.div
                className="mt-12 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium text-accent"
                variants={itemVariants}
                custom={6}
            >
                <Link href="#" className="hover:underline hover:text-accent/80 transition-colors">First Time User?</Link>
                <Link href="#" className="hover:underline hover:text-accent/80 transition-colors">Forgot password?</Link>
                <Link href="#" className="hover:underline hover:text-accent/80 transition-colors">Log In help</Link>
                <span className="text-muted-foreground/60 no-underline cursor-default">
                    Hotline: <span className="text-accent">1-877-237-6120</span>
                </span>
            </motion.div>
        </motion.div>
    )
}
