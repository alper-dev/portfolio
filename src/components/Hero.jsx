import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        const roles = ['Developer', 'Designer', 'Creator', 'Innovator']
        const currentRole = roles[currentIndex]

        const typeWriter = () => {
            if (!isDeleting) {
                // Typing phase
                if (currentText.length < currentRole.length) {
                    setCurrentText(currentRole.slice(0, currentText.length + 1))
                } else {
                    // Start deleting after pause
                    setTimeout(() => {
                        setIsDeleting(true)
                    }, 1500)
                }
            } else {
                // Deleting phase
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1))
                } else {
                    // Move to next role after deleting
                    setIsDeleting(false)
                    setCurrentIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }

        const typingSpeed = 100
        const deletingSpeed = 50

        const timer = setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed)
        return () => clearTimeout(timer)
    }, [currentText, currentIndex, isDeleting])

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Subtle animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/8 to-transparent rounded-full blur-3xl float-animation" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/8 to-transparent rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-400/8 to-transparent rounded-full blur-3xl pulse-animation" />
                <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-gradient-to-br from-green-400/6 to-transparent rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />
            </div>

            {/* Subtle matrix rain effect */}
            <div className="absolute inset-0 opacity-5">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-cyan-400/30 font-mono text-xs matrix-char"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 15}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    >
                        {String.fromCharCode(0x30A0 + Math.random() * 96)}
                    </div>
                ))}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {/* Main heading */}
                    <div className="mb-8">
                        <h1 className="text-6xl md:text-8xl font-bold mb-4">
                            <span className="text-white">Hi, I'm </span>
                            <span className="holographic">Alper</span>
                        </h1>
                        <div className="text-2xl md:text-4xl text-gray-400 font-light">
                            <span className="text-cyan-400">I'm a </span>
                            <span className="text-white font-mono">{currentText}</span>
                            <span className="text-cyan-400 animate-pulse">|</span>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Crafting digital experiences that push boundaries and inspire innovation.
                        Welcome to my cyberpunk universe of code and creativity.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Years</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Passion</div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Hero