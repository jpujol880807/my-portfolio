// src/app/components/Projects.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { ProjectCard } from "@/app/components/ProjectCard";

const professionalProjects = [
    {
        title: "Tiendamia",
        description:
            "Tiendamia is a premier cross-border e-commerce platform that acts as a global intermediary, enabling users in Latin America to purchase products from major U.S. retailers like Amazon, eBay, and Walmart through a single localized site.",
        image: "images/Tiendamia1.png",
        imageLight: "images/Tiendamia1.png",
        imagePhone: "images/Tiendamia Mobile.png",
        imagePhoneLight: "images/Tiendamia Mobile.png",
        tech: ["Magento", "Node.js", "PHP", "AWS", "RabbitMQ", "OpenSearch", "Docker"],
        github: "",
        demo: "https://www.tiendamia.com",
    },
    {
        title: "Rezglo",
        description:
            "Rezglo is an all-in-one transportation management and B2B dispatch platform designed for specialized transport sectors, including NEMT (Non-Emergency Medical Transportation), taxis, limos, and shuttle services.",
        image: "images/Rezglo Web.png",
        imageLight: "images/Rezglo Web.png",
        imagePhone: "images/Rezglo1.png",
        imagePhoneLight: "images/Rezglo1.png",
        tech: ["React", "TypeScript", "Laravel", "MongoDB", "DDD", "GraphQL", "Kohana", "Docker"],
        github: "",
        demo: "https://play.google.com/store/apps/details?id=app.Rezglo.passenger",
    },
    {
        title: "HomeAlliance",
        description:
            "Home Alliance is a technology-driven home services marketplace that connects homeowners and property managers with a nationwide network of vetted service professionals for repair, installation, and maintenance.",
        image: "images/HomeAlliance1.png",
        imageLight: "images/HomeAlliance1.png",
        imagePhone: "images/HomeAlliance Mobile.png",
        imagePhoneLight: "images/HomeAlliance Mobile.png",
        tech: ["Laravel", "JQuery", "Socket.io", "Redis", "PostgresQL", "Google Maps", "Twilio", "Docker"],
        github: "",
        demo: "https://homealliance.com",
    },
    {
        title: "Smart145",
        description:
            "Smart145 is a cloud-based Enterprise Resource Planning (ERP) software designed specifically for the aviation industry, primarily focusing on Maintenance, Repair, and Overhaul (MRO) stations and parts suppliers.",
        image: "images/Smart145 Desktop.png",
        imageLight: "images/Smart145 Desktop.png",
        imagePhone: "images/Smart145 Mobile.png",
        imagePhoneLight: "images/Smart145 Mobile.png",
        tech: ["Laravel", "PHP", "MySQL", "Vue", "Cypress", "PHPUnit", "CircleCI"],
        github: "",
        demo: "https://smart145.com",
    },
    {
        title: "Donde Hay",
        description:
            "Donde Hay! is a digital application in Cuba used by consumers to locate and check prices of products in real-time within the Cadena de Tiendas Panamericanas, which is part of the CIMEX corporation.",
        image: "images/Donde Hay Desktop.png",
        imageLight: "images/Donde Hay Desktop.png",
        imagePhone: "images/Donde Hay1.png",
        imagePhoneLight: "images/Donde Hay1.png",
        tech: ["Ionic", "Angular", "Open Street Maps", "Leaflet", "PostgresQL", "Google Maps"],
        github: "",
        demo: "https://www.apklis.cu/application/com.datacimex.dondehay",
    },
];

const personalProjects = [
    {
        title: "Next-Ecommerce Prototype",
        description:
            "A modern e-commerce application built with NextJS, React and PostgreSQL. It's a work in progress.",
        image: "images/Next eCommerce Desktop.png",
        imageLight: "images/Next eCommerce Desktop Light.png",
        imagePhone: "images/Next ECommerce Mobile.png",
        imagePhoneLight: "images/Next ECommerce Mobile Light.png",
        tech: ["NextJS", "PostgreSQL", "Vercel", "Neon DB", "React", "ShadCn", "TailwindCSS"],
        github: "",
        demo: "https://e-commerce-frontend-prototype.vercel.app",
    },
    {
        title: "Modern Portfolio Website",
        description:
            "A responsive portfolio website with smooth animations and dark mode support.",
        image: "images/Portfolio1.png",
        imageLight: "images/Portfolio1 Light.png",
        imagePhone: "images/Portfolio Mobile.png",
        imagePhoneLight: "images/Portfolio Mobile Light.png",
        tech: ["React", "Typescript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/jpujol880807/my-portfolio",
        demo: "https://jpujol880807.github.io/my-portfolio",
    },
    {
        title: "E-commerce App",
        description:
            "A modern e-commerce application built with Nuxt 4, Vue 3, Vuetify, and Drizzle ORM following Domain-Driven Design (DDD) architecture.",
        image: "images/Ecommerce Web.png",
        imageLight: "images/Ecommerce Web Light.png",
        imagePhone: "images/Ecommerce Mobile.png",
        imagePhoneLight: "images/Ecommerce Mobile Light.png",
        tech: ["Vue", "Nuxt", "Vercel", "Turso DB", "Vuetify", "DDD"],
        github: "https://github.com/jpujol880807/ecommerce-app",
        demo: "https://ecommerce-app-tau-silk.vercel.app",
    },
];

type Project = {
    title: string;
    description: string;
    image: string;
    imageLight: string;
    imagePhone: string;
    imagePhoneLight: string;
    tech: string[];
    github: string;
    demo: string
};

export function Projects() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function getImageToUse(project: Project ) {
        return mounted && theme === "light" && project.imageLight ? project.imageLight : project.image;
    }

    function getPhoneImageToUse(project: Project ) {
        return mounted && theme === "light" && project.imagePhoneLight ? project.imagePhoneLight : project.imagePhone;
    }

    return (
        <section id="projects" className="py-20 px-4 relative bg-gray-200/50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Personal Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="mb-4 dark:text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Personal Projects
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-blue-500 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                    <p className="mt-4 text-gray-400">Side projects and experiments to explore new technologies</p>
                </motion.div>

                <div className="space-y-20">
                    {personalProjects.map((project, index) => {
                        const imageToUse = getImageToUse(project);
                        const mobileImageToUse = getPhoneImageToUse(project);
                        const projectWithThemeImage = { ...project, image: imageToUse, imagePhone: mobileImageToUse };
                        return <ProjectCard key={project.title} project={projectWithThemeImage} index={index} reverse={index % 2 !== 0} />;
                    })}
                </div>

                {/* Professional Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 mt-32"
                >
                    <motion.h2
                        className="mb-4 dark:text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Projects I've Worked In
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-blue-500 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                    <p className="mt-4 text-gray-400">Professional projects built for clients and companies</p>
                </motion.div>

                <div className="space-y-20 mb-32">
                    {professionalProjects.map((project, index) => {
                        const imageToUse = getImageToUse(project);
                        const mobileImageToUse = getPhoneImageToUse(project);
                        const projectWithThemeImage = { ...project, image: imageToUse, imagePhone: mobileImageToUse };
                        return <ProjectCard key={project.title} project={projectWithThemeImage} index={index} reverse={index % 2 !== 0} />;
                    })}
                </div>
            </div>
        </section>
    );
}
