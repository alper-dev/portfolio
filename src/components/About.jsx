import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section className="relative h-full flex items-center py-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-24">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center space-y-12"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                                About
                            </span>
                            <span className="text-white"> Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Passionate full-stack developer crafting digital experiences with modern technologies
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I'm a full-stack developer who loves turning ideas into reality. I enjoy building
                                clean, functional applications that solve real problems and make a difference.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies, contributing to
                                open-source projects, or sharing knowledge with the developer community.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
