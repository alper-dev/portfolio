import React, { useState, useEffect, useRef } from 'react'

const Contact = () => {
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

    const socialLinks = [
        {
            name: 'Email',
            url: 'mailto:contact@alperdev.codes',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: 'purple'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/alper-dev',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            color: 'cyan'
        },
        {
            name: 'Discord',
            url: 'https://discord.gg/8gFVSw9e2s',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
            ),
            color: 'purple'
        }
    ]

    const getColorClass = (color) => {
        const colors = {
            cyan: 'hover:border-cyan-400 hover:text-cyan-400 hover:shadow-cyan-400/20',
            blue: 'hover:border-blue-400 hover:text-blue-400 hover:shadow-blue-400/20',
            purple: 'hover:border-purple-400 hover:text-purple-400 hover:shadow-purple-400/20'
        }
        return colors[color] || 'hover:border-cyan-400 hover:text-cyan-400 hover:shadow-cyan-400/20'
    }

    return (
        <section id="contact" ref={sectionRef} className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">04.</span>
                            <span className="text-white font-mono text-sm uppercase tracking-wider ml-2">Contact</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-white">Let's </span>
                            <span className="holographic">Connect</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Ready to build the future together? Let's create something extraordinary.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="card-modern p-8">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 pulse-animation"></span>
                                    Get In Touch
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    I'm always excited to collaborate on innovative projects and explore new technologies.
                                    Whether you have a groundbreaking idea or just want to discuss the future of tech,
                                    I'd love to hear from you.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-cyan-400/10 border border-cyan-400/20 rounded-lg">
                                            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 font-medium">Email</p>
                                            <p className="text-cyan-400 font-mono">contact@alperdev.codes</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-purple-400/10 border border-purple-400/20 rounded-lg">
                                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 font-medium">Location</p>
                                            <p className="text-purple-400">Turkiye</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-pink-400/10 border border-pink-400/20 rounded-lg">
                                            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 font-medium">Response Time</p>
                                            <p className="text-pink-400">Usually within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Social Links */}
                        <div className="space-y-8">
                            <div className="card-modern p-8">
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 pulse-animation"></span>
                                    Connect With Me
                                </h3>

                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group p-6 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${getColorClass(social.color)}`}
                                        >
                                            <div className="flex flex-col items-center space-y-3">
                                                <div className="p-3 bg-gray-700/50 rounded-lg group-hover:bg-transparent transition-colors duration-300">
                                                    {social.icon}
                                                </div>
                                                <span className="font-medium text-sm">{social.name}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Status */}
                            <div className="card-modern p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-3 h-3 bg-green-400 rounded-full pulse-animation"></div>
                                    <span className="text-white font-medium">Currently Available</span>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    Open to new opportunities and exciting collaborations.
                                    Let's build something amazing together!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-20 pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-500 text-sm">
                            © 2025 alperdev.codes
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact