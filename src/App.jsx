import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="min-h-screen text-white overflow-x-hidden relative">
            {/* Cyber grid background */}
            <div className="fixed inset-0 cyber-grid opacity-10 pointer-events-none" />

            {/* Floating orbs background */}
            <div className="background-animation">
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
                <div className="floating-orb orb-3"></div>
                <div className="floating-orb orb-4"></div>
            </div>

            <main className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    )
}

export default App