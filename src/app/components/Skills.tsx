import { motion } from "motion/react";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Vue", "Nuxt", "React", "Angular", "Ionic", "HTML5", "CSS3", "cypress"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Magento", "Node.js", "Express", "TypeScript", "Jest", "PHPUnit"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "ElasticSearch"],
  },
  {
    title: "Infrastructure & DevOps",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "Datadog", "CloudWatch"],
  },
  {
    title: "Tools & Others",
    skills: ["GraphQL", "Cheerio (web scraping)", "Prometheus", "Grafana"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 dark:text-white">Skills & Technologies</h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="mb-4 text-center dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <Badge variant="secondary">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
