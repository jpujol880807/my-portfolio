import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { useMemo } from "react";
import {
    FaPhp,
    FaLaravel,
    FaVuejs,
    FaReact,
    FaNode,
    FaGit,
    FaGithub,
    FaAws,
    FaLinux,
    FaDatabase,
    FaCube,
    FaRegSquare, FaAngular, FaHtml5, FaCss3, FaFigma,
} from "react-icons/fa";
import {
    SiPostgresql,
    SiTypescript,
    SiTailwindcss,
    SiPrisma,
    SiMongodb,
    SiNextdotjs,
    SiSanity,
    SiContentful,
    SiVercel,
    SiRedis,
    SiMysql,
    SiGrafana,
    SiDatadog,
    SiDocker, SiNuxtdotjs, SiIonic, SiExpress, SiMagento, SiJest, SiAmazondynamodb, SiCircleci, SiCypress,
    SiGithubactions, SiPrometheus, SiAmazoncloudwatch, SiGraphql, SiCheerio, SiNodedotjs,
} from "react-icons/si";
import {FaFolderTree} from 'react-icons/fa6';

const skillCategories = [
    {
        title: "Frontend",
        skills: ["Vue", "Nuxt", "React", "Angular", "Ionic", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        title: "Backend",
        skills: ["PHP", "Laravel", "Magento", "Node", "Express", "TypeScript", "Jest", "PHPUnit", "Cypress"],
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "ElasticSearch"],
    },
    {
        title: "Infra & Deployment",
        skills: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
    },
    {
        title: "Monitoring & Logging",
        skills: ["Prometheus", "Grafana", "Datadog", "CloudWatch"],
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Cheerio", "DDD", "Linux"],
    }
];

const ICONS: Record<string, any> = {
    Angular: FaAngular,
    Ionic: SiIonic,
    React: FaReact,
    NextJS: SiNextdotjs,
    Vue: FaVuejs,
    Nuxt: SiNuxtdotjs, // fallback
    TypeScript: SiTypescript,
    "TypeScript (backend)": SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    HTML5: FaHtml5,
    CSS3: FaCss3,
    Motion: FaCube,
    Sanity: SiSanity,
    Contentful: SiContentful,
    Figma: FaFigma,
    NodeJS: FaNode,
    ExpressJS: SiExpress,
    PHP: FaPhp,
    Laravel: FaLaravel,
    Magento: SiMagento,
    Prisma: SiPrisma,
    Jest: SiJest,
    PHPUnit: FaPhp,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    Redis: SiRedis,
    DynamoDB: SiAmazondynamodb,
    ElasticSearch: FaDatabase,
    AWS: FaAws,
    Docker: SiDocker,
    Git: FaGit,
    GitHub: FaGithub,
    "GitHub Actions": SiGithubactions,
    "CI/CD": SiCircleci,
    Vercel: SiVercel,
    Linux: FaLinux,
    Cypress: SiCypress,
    Express: SiExpress,
    Prometheus: SiPrometheus,
    Grafana: SiGrafana,
    Datadog: SiDatadog,
    CloudWatch: SiAmazoncloudwatch,
    GraphQL: SiGraphql,
    Cheerio: SiCheerio,
    Node: SiNodedotjs,
    DDD: FaFolderTree
};

const ICON_COLORS: Record<string, string> = {
    Vue: "text-green-500",
    Nuxt: "text-teal-500",
    React: "text-cyan-400",
    Angular: "text-red-600",
    Ionic: "text-blue-600",
    HTML5: "text-orange-500",
    CSS3: "text-blue-500",
    "Tailwind CSS": "text-teal-400",

    PHP: "text-purple-600",
    Laravel: "text-red-600",
    Magento: "text-orange-600",
    Node: "text-green-600",
    Express: "text-gray-700",
    TypeScript: "text-sky-600",
    Jest: "text-pink-500",
    PHPUnit: "text-violet-600",
    Cypress: "text-green-600",

    PostgreSQL: "text-indigo-600",
    MySQL: "text-blue-600",
    MongoDB: "text-green-500",
    DynamoDB: "text-orange-500",
    Redis: "text-red-500",
    ElasticSearch: "text-yellow-600",

    AWS: "text-orange-500",
    Docker: "text-blue-600",
    "GitHub Actions": "text-blue-600",
    "CI/CD": "text-gray-600",

    Prometheus: "text-orange-500",
    Grafana: "text-orange-500",
    Datadog: "text-purple-600",
    CloudWatch: "text-blue-600",

    Git: "text-orange-600",
    Cheerio: "text-amber-600",
    DDD: "text-gray-600",
    Linux: "text-orange-500",
};

function SkillPill({ name }: { name: string }) {
    const Icon = ICONS[name];
    const colorClass = ICON_COLORS[name] ?? "text-gray-600";

    return (
        <motion.div
            whileHover={{ translateY: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex-shrink-0"
        >
            <Badge
                variant="secondary"
                className="rounded-full px-4 py-3 flex items-center gap-4 border bg-transparent text-gray-800 dark:text-gray-200 shadow-sm
                   border-gray-200/30 dark:border-white/10"
            >
                {Icon ? (
                    <span className={`flex items-center justify-center w-7 h-7 ${colorClass}`}>
            <Icon className="w-6 h-6" />
          </span>
                ) : (
                    <span className="w-7 h-7 flex items-center justify-center text-gray-500">
            <FaRegSquare className="w-6 h-6" />
          </span>
                )}
                <span className="text-sm font-medium">{name}</span>
            </Badge>
        </motion.div>
    );
}

export function Skills() {
    const columns = useMemo(
        () => (typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1),
        []
    );

    return (
        <section id="skills" className="py-20 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                        The Magic Behind
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                <div className={`grid gap-8 ${columns === 3 ? "md:grid-cols-3" : "grid-cols-1"}`}>
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative p-6 rounded-lg overflow-hidden"
                            style={{
                                background: "transparent", // transparent so hero/background shows through
                                border: "1px solid rgba(0,0,0,0.04)",
                            }}
                        >
                            <h3 className="mb-6 text-center font-medium text-gray-800 dark:text-gray-200">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-4 justify-center">
                                {category.skills.map((s) => (
                                    <SkillPill key={s} name={s} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
