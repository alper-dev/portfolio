import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
    const [activeSection, setActiveSection] = useState('home')

    const sections = {
        home: Hero,
        about: About,
        skills: Skills,
        projects: Projects,
        contact: Contact
    }

    const ActiveComponent = sections[activeSection]

    const pageVariants = {
        initial: { opacity: 0, x: 100 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: -100 }
    }

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5
    }

    return (
        <div className="h-screen bg-black text-white overflow-hidden">
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="h-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                        className="h-full"
                    >
                        <ActiveComponent />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default App
