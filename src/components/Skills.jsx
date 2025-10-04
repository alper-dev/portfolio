import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code,
    Database,
    Smartphone,
    Cloud,
    GitBranch,
    Shield
} from 'lucide-react';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = ['JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'Python', 'React', 'Tailwind CSS', 'MongoDB'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                duration: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative h-full flex items-center py-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
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
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Skills
                            </span>
                            <span className="text-white"> & Expertise</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Technologies and tools I work with to build amazing digital experiences
                        </p>
                    </motion.div>

                    {/* Skills Tags */}
                    <motion.div variants={itemVariants}>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                    <span className="text-gray-300 hover:text-cyan-400 font-medium text-sm">
                                        {skill}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom Text */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto">
                            <p className="text-gray-300 leading-relaxed">
                                I'm passionate about learning new technologies and staying up-to-date with the latest trends in software development.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
