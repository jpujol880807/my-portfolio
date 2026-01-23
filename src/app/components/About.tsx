import { motion } from "motion/react";
import { Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-200/50 dark:bg-gray-900/50 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 dark:text-white">About Me</h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg p-8 flex items-center justify-center aspect-square"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Code className="w-32 h-32 text-blue-600 dark:text-blue-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p
              className="mb-4 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
                I’m a Senior Full Stack Web Developer with more than 9 years of experience building scalable platforms,
                APIs, and internal tools. I specialize in Laravel, PHP, Vue.js, and Node.js, and
                I’ve led projects involving high‑traffic e‑commerce systems, data pipelines,
                and cloud‑based architectures using AWS, Docker, and modern DevOps practices.
            </motion.p>
            <motion.p
              className="mb-4 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
                I enjoy taking ownership of complex problems, refactoring legacy code, and helping teams adopt clean,
                maintainable engineering standards.
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
                My work spans from backend systems and scraping engines to modern frontend applications,
                always with a focus on performance, reliability, and thoughtful design.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
