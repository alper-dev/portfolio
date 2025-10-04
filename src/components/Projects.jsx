import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'TRLink Bypasser',
            description: 'A Tampermonkey userscript to bypass aylink.co and ay.live links.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/alper-dev/aylink.co-bypasser',
            live: null
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'My personal portfolio website that you are currently viewing.',
            technologies: ['React', 'Tailwind CSS'],
            github: 'https://github.com/alper-dev/portfolio',
            live: 'https://alperdev.codes'
        }
    ];

    return (
        <section className="relative h-full flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-5 pt-24">
                <div className="space-y-8 h-full flex flex-col justify-center">
                    {/* Header */}
                    <div className="text-center mt-8">
                        <div className="flex items-center justify-center mb-4">
                            <h2 className="text-3xl sm:text-4xl font-bold">
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    My
                                </span>
                                <span className="text-white"> Projects</span>
                            </h2>
                        </div>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6"></div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-y-auto scrollbar-hide">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col h-80 hover:[animation-play-state:paused]"
                            >
                                {/* Project Header */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600/50 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3 mt-auto">
                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                                        >
                                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Code
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-700/20 rounded-lg text-gray-500 cursor-not-allowed text-sm font-medium opacity-50"
                                        >
                                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Code
                                        </button>
                                    )}

                                    {project.live ? (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-700/20 rounded-lg text-gray-500 cursor-not-allowed text-sm font-medium opacity-50"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;