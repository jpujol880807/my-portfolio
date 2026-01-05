import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const professionalProjects = [
  {
    title: "Tiendamia",
    description:
      "Tiendamia is a premier cross-border e-commerce platform that acts as a global intermediary, enabling users in Latin America to purchase products from major U.S. retailers like Amazon, eBay, and Walmart through a single localized site.",
    image: "/images/Tiendamia1.png",
    tech: ["Magento", "Node.js", "PHP", "AWS", "RabbitMQ", "OpenSearch", "Docker"],
    github: "",
    demo: "https://www.tiendamia.com",
  },
  {
    title: "Rezglo",
    description: "Rezglo is an all-in-one transportation management and B2B dispatch platform designed for specialized transport sectors, including NEMT (Non-Emergency Medical Transportation), taxis, limos, and shuttle services.",
    image: "/images/Rezglo1.png",
    tech: ["React", "TypeScript", "Laravel", "MongoDB", "DDD", "GraphQL", "Kohana", "Docker"],
    github: "",
    demo: "https://play.google.com/store/apps/details?id=app.Rezglo.passenger",
  },
  {
    title: "HomeAlliance",
    description:
      "Home Alliance is a technology-driven home services marketplace that connects homeowners and property managers with a nationwide network of vetted service professionals for repair, installation, and maintenance.",
    image: "/images/HomeAlliance1.png",
    tech: ["Laravel", "JQuery", "Socket.io", "Redis", "PostgresQL", "Google Maps", "Twilio", "Docker"],
    github: "",
    demo: "https://homealliance.com",
  },
  {
    title: "Donde Hay",
    description:
      "Donde Hay! is a digital application in Cuba used by consumers to locate and check prices of products in real-time within the Cadena de Tiendas Panamericanas, which is part of the CIMEX corporation.",
    image: "/images/Donde Hay1.png",
    tech: ["Ionic", "Angular", "Open Street Maps", "Leaflet", "PostgresQL", "Google Maps"],
    github: "",
    demo: "https://www.apklis.cu/application/com.datacimex.dondehay",
  },
];

const personalProjects = [
  {
    title: "Modern Portfolio Website",
    description:
      "A responsive portfolio website with smooth animations and dark mode support.",
    image: "/images/Portfolio1.png",
    tech: ["React", "Typescript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "#home",
  },
  {
    title: "E-commerce App",
    description:
      "A modern e-commerce application built with Nuxt 4, Vue 3, Vuetify, and Drizzle ORM following Domain-Driven Design (DDD) architecture.",
    image: "/images/Ecommerce App1.png",
    tech: ["Vue", "Nuxt", "Vercel", "Turso DB", "Vuetify", "DDD"],
    github: "https://github.com/jpujol880807/ecommerce-app",
    demo: "https://ecommerce-app-tau-silk.vercel.app",
  },
];

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-400">
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
            <div className="flex gap-4">
                {project.github ? (
                    <Button asChild variant="outline" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                        </a>
                    </Button>
                ) : (
                    <Button variant="outline" className="flex-1" disabled>
                      <span className="flex items-center opacity-50 cursor-not-allowed">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </span>
                    </Button>
                )}
                <Button asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                </Button>
            </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Professional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
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
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Professional projects built for clients and companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-20"
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
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Side projects and experiments to explore new technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
