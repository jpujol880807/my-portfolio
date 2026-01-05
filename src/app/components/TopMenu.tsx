import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function TopMenu() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ["home", "about", "skills", "projects", "contact"];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex-shrink-0"
                        >
                            <a
                                href="#home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("#home");
                                }}
                                className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform inline-block"
                            >
                                JP<span className="text-gray-900 dark:text-white">.</span>
                            </a>
                        </motion.div>

                        {/* Desktop Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="hidden md:block"
                        >
                            <div className="flex items-center space-x-1">
                                {menuItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                            activeSection === item.href.replace("#", "")
                                                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Button - Desktop */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="hidden md:block"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    onClick={() => scrollToSection("#contact")}
                                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full px-6"
                                >
                                    Hire Me
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:hidden"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-700 dark:text-gray-300"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-3">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                                        activeSection === item.href.replace("#", "")
                                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, delay: menuItems.length * 0.05 }}
                                className="pt-4"
                            >
                                <Button
                                    onClick={() => scrollToSection("#contact")}
                                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full"
                                >
                                    Hire Me
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
