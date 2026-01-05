// typescript
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
    Github,
    Linkedin,
    Mail,
    Code,
    Database,
    Rocket,
    Palette,
    Figma,
    Layers,
} from "lucide-react";

import {
    FaPhp,
    FaLaravel,
    FaVuejs,
    FaReact,
    FaDocker,
    FaNode
} from "react-icons/fa";

import { SiPostgresql } from "react-icons/si";
import {useEffect, useState} from 'react';

const floatingIcons = [
    { Icon: FaPhp, color: "bg-purple-600" },
    { Icon: FaLaravel, color: "bg-red-600" },
    { Icon: FaVuejs, color: "bg-green-500" },
    { Icon: FaReact, color: "bg-cyan-400" },
    { Icon: FaDocker, color: "bg-blue-600" },
    { Icon: FaNode, color: "bg-green-700" },
    { Icon: SiPostgresql, color: "bg-indigo-600" },
];

export function Hero() {
    const scrollToSection = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth" });
    };
    const [orbitRadius, setOrbitRadius] = useState<number>(250);
    const orbitDuration = 80;

    useEffect(() => {
        const updateRadius = () => {
            const w = window.innerWidth;
            if (w < 400) {
                setOrbitRadius(175);   // teléfonos muy pequeños
            } else if (w < 480) {
                setOrbitRadius(200);   // teléfonos pequeños
            } else if (w < 640) {
                setOrbitRadius(250);  // móviles grandes
            } else if (w < 1024) {
                setOrbitRadius(250);  // tablets / pantallas medianas
            } else {
                setOrbitRadius(250);  // desktop
            }
        };

        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-blue-600 dark:text-blue-400 mb-4 italic"
                        >
                            Do You Know Me?
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h1 className="mb-2 dark:text-white leading-tight">
                                👋 I'm <br />
                                <span className="text-blue-600 dark:text-blue-400">
                                  Julio Cesar Pujol Fonseca
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg leading-relaxed"
                        >
                            I’m a full‑stack developer who loves building things that actually make people’s lives easier.
                            I’ve spent the last years working across backend systems, modern frontends, and cloud
                            infrastructure, always trying to leave every project cleaner,
                            faster, and more reliable than I found it.
                            I care about good engineering, clear communication,
                            and creating products that feel solid and thoughtful.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex gap-4 mb-8"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={() => scrollToSection("contact")}
                                    size="lg"
                                    className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8"
                                >
                                    Contact Me
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="flex gap-4"
                        >
                            <motion.a
                                href="https://github.com/jpujol880807"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/jpujol88"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="mailto:jpujol880807@gmail.com"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Mail className="w-6 h-6" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image with Floating Icons */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Orbiting Circle Path */}
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Dashed Circle Border */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 60,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {/* Profile Image Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute inset-[15%] rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden shadow-2xl"
                            >
                                <div className="text-center">
                                    <img src={'images/profile.jpg'}/>
                                </div>
                            </motion.div>

                            {/* Floating Icons */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 w-0 h-0"
                                style={{ transformOrigin: "50% 50%" }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
                            >
                                {floatingIcons.map(({ Icon, color }, index) => {
                                    const angle = (index * 360) / floatingIcons.length;

                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                position: "absolute",
                                                // posiciona en la circunferencia: centro -> rotar al ángulo -> desplazar radius
                                                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${orbitRadius}px)`,
                                                transformOrigin: "50% 50%",
                                            }}
                                        >
                                            {/* Se inicializa rotando -angle y se anima a -angle - 360 para cancelar la rotación del wrapper */}
                                            <motion.div
                                                initial={{ rotate: -angle }}
                                                animate={{ rotate: -angle - 360 }}
                                                transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
                                                whileHover={{ scale: 1.50 }}
                                                whileTap={{ scale: 1.30 }}
                                                onClick={() => scrollToSection("skills")}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        e.preventDefault();
                                                        scrollToSection("skills");
                                                    }
                                                }}
                                                role="button"
                                                tabIndex={0}
                                                className={`${color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                                            >
                                                <Icon className="w-7 h-7 text-white" />
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="text-gray-400 dark:text-gray-600 cursor-pointer"
                        onClick={() => scrollToSection("about")}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
