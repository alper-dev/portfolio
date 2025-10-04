import { motion } from 'framer-motion';

const Hero = () => {

    return (
        <section className="relative h-full flex items-center justify-center overflow-hidden">
            {/* Modern Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12"
                >
                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-40 h-40">
                            {/* Outer glow ring - furthest back */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-lg animate-pulse z-0"></div>

                            {/* Animated rotating ring */}
                            <motion.div
                                className="absolute inset-2 rounded-full p-1 z-10"
                                style={{
                                    background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #06b6d4)',
                                }}
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <div className="w-full h-full rounded-full bg-black p-1">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black"></div>
                                </div>
                            </motion.div>

                            {/* Avatar container */}
                            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shadow-cyan-500/30 z-20">
                                <img
                                    src="https://i.imgur.com/LTfhP5s.jpeg"
                                    alt="Alper Dev Avatar"
                                    className="w-full h-full object-cover"
                                />

                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                        >
                            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                                alperdev
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="space-y-4"
                        >
                            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                End to end developer focused on software
                            </p>
                            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
