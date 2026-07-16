import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-surface w-full flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full flex flex-col items-center pt-[72px]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
