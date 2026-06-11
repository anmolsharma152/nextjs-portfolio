import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';

const Home = () => {
  return (
    <main className="min-h-screen">
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="resume" className="scroll-mt-20">
        <Resume />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
