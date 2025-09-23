import React, { useState, useEffect, useRef } from 'react'

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const skills = [
        { name: 'React', level: 95, color: 'cyan' },
        { name: 'JavaScript', level: 90, color: 'blue' },
        { name: 'TypeScript', level: 90, color: 'blue' },
        { name: 'Node.js', level: 85, color: 'green' },
        { name: 'DiscordJS', level: 80, color: 'purple' },
        { name: 'Python', level: 80, color: 'yellow' },
        { name: 'Tauri', level: 75, color: 'pink' }
    ]

    const getColorClass = (color) => {
        const colors = {
            cyan: 'from-cyan-400 to-cyan-600',
            blue: 'from-blue-400 to-blue-600',
            green: 'from-green-400 to-green-600',
            yellow: 'from-yellow-400 to-yellow-600',
            purple: 'from-purple-400 to-purple-600',
            pink: 'from-pink-400 to-pink-600'
        }
        return colors[color] || 'from-cyan-400 to-cyan-600'
    }

    return (
        <section id="about" ref={sectionRef} className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">02.</span>
                            <span className="text-white font-mono text-sm uppercase tracking-wider ml-2">About</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-white">About </span>
                            <span className="holographic">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="card-modern p-8">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 pulse-animation"></span>
                                    The Vision
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    I'm a digital architect crafting the future through code. With a passion for
                                    cutting-edge technology and innovative solutions, I transform complex ideas into
                                    elegant digital experiences that push the boundaries of what's possible.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    My journey spans across the realms of web development, artificial intelligence,
                                    and emerging technologies. I believe in the power of code to create meaningful
                                    connections and solve real-world problems.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Skills */}
                        <div className="space-y-8">
                            <div className="card-modern p-8">
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 pulse-animation"></span>
                                    Skills
                                </h3>

                                <div className="space-y-6">
                                    {skills.map((skill, index) => (
                                        <div key={skill.name} className="group">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                                <span className="text-cyan-400 text-sm font-mono">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${getColorClass(skill.color)} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                                                    style={{
                                                        width: isVisible ? `${skill.level}%` : '0%',
                                                        transitionDelay: `${index * 150}ms`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About