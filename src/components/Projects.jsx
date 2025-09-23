import React, { useState, useEffect, useRef } from 'react'

const Projects = () => {
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

    const projects = [
        {
            id: 1,
            title: "Aylink Bypasser",
            description: "A Tampermonkey userscript that automatically resolves aylink.co short links and redirects to the original URL. ",
            image: "https://i.imgur.com/1a030Ei.png",
            technologies: ["JavaScript", "Tampermonkey"],
            github: "https://github.com/alper-dev/aylink.co-bypasser",
            category: "Userscript"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A portfolio website built with React and Tailwind CSS.",
            image: "https://i.imgur.com/i7b6kK5.png",
            technologies: ["React", "Tailwind"],
            github: "https://github.com/alper-dev/portfolio",
            category: "Website"
        }
    ]

    return (
        <section id="projects" ref={sectionRef} className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block mb-4">
                            <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">03.</span>
                            <span className="text-white font-mono text-sm uppercase tracking-wider ml-2">Work</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-white">My </span>
                            <span className="holographic">Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Exploring the frontiers of technology through innovative projects that push the boundaries of what's possible
                        </p>
                    </div>

                    <div className="mb-20">
                        <div className="grid lg:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group card-modern overflow-hidden"
                                    style={{
                                        animationDelay: `${index * 200}ms`
                                    }}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="flex space-x-4">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-110"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-110"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects