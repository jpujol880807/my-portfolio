import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        image: string;
        imagePhone?: string;
        tech: string[];
        github: string;
        demo: string;
    };
    index: number;
    reverse?: boolean;
}

export function ProjectCard({ project, index, reverse = false }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-20 last:mb-0"
        >
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                {/* Device Mockups */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    className={`relative ${reverse ? 'lg:order-2' : ''}`}
                >
                    <div className="relative">
                        {/* Laptop Mockup */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative z-10"
                        >
                            {/* Laptop Screen */}
                            <div className="relative bg-gray-900 dark:bg-gray-800 rounded-t-2xl p-2 shadow-2xl">
                                {/* Camera notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-800 dark:bg-gray-700 rounded-b-lg"></div>

                                {/* Screen content */}
                                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden aspect-video">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Laptop Base */}
                            <div className="relative h-4 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-b-2xl shadow-lg">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                            </div>

                            {/* Laptop Shadow */}
                            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-black/10 dark:bg-black/30 blur-xl rounded-full"></div>
                        </motion.div>

                        {/* Mobile Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                            whileHover={{ y: -10 }}
                            className={`absolute -bottom-8 ${reverse ? '-left-12' : '-right-12'} w-32 z-20 hidden sm:block`}
                        >
                            {/* Phone Frame */}
                            <div className="relative bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
                                {/* Notch */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-2xl z-10"></div>

                                {/* Screen */}
                                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden aspect-[9/19]">
                                    <ImageWithFallback
                                        src={project.imagePhone ? project.imagePhone : project.image}
                                        alt={`${project.title} mobile`}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    className={reverse ? 'lg:order-1' : ''}
                >
                    <motion.h3
                        className="mb-4 dark:text-white uppercase tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                    >
                        {project.title}
                    </motion.h3>

                    <motion.p
                        className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                    >
                        {project.tech.map((tech, i) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.6 + i * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                    >
                        {project.github ? (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button asChild variant="outline" className="rounded-full">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} source on GitHub`}
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        View Code
                                    </a>
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div>
                                <Button
                                    variant="outline"
                                    className="rounded-full opacity-60 cursor-not-allowed"
                                    disabled
                                    title="Repository not available"
                                >
                                    <span className="flex items-center">
                                        <Github className="mr-2 h-4 w-4 opacity-50" />
                                        View Code
                                    </span>
                                </Button>
                            </motion.div>
                        )}

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
