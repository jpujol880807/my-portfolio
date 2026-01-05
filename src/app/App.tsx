import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {AnimatedBackground} from "./components/AnimatedBackground";
import {ThemeProvider} from "./components/ThemeProvider";
import {ThemeToggle} from "./components/ThemeToggle";
import {TopMenu} from './components/TopMenu';

export default function App() {
    return (
        <ThemeProvider>
            <div className="size-full relative bg-white dark:bg-gray-950 transition-colors duration-300">
                <AnimatedBackground/>
                <ThemeToggle/>
                <div className="relative z-10">
                    <TopMenu/>
                    <Hero/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </ThemeProvider>
    );
}
