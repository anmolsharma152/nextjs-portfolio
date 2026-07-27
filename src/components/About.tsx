'use client';

import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { Brain, Cpu, Globe, Target, Terminal, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

// Extracted strings to satisfy both ESLint quotes and Prettier formatting rules
const INTRO_TEXT =
  'I bridge the gap between academic research (IIT Mandi) and production systems engineering. With a unique background spanning economics, public policy, and artificial intelligence, I am passionate about privacy-first local computing, minimalist Linux workflows, and building software that feels seamless and invisible.';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isZoomed, setIsZoomed] = useState(false);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const expertise = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: 'Stateful Agentic Orchestration',
      description:
        'Building resilient multi-agent graphs with LangGraph, async PostgreSQL state management, and long-term memory.',
    },
    {
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      title: 'Sub-150ms Edge & Speech Pipelines',
      description:
        'Optimizing local voice activity detection (VAD), speech inference, Rust/WASM, and ONNX Runtime execution.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: 'Hybrid RAG & Knowledge Retrieval',
      description:
        'Engineering production-grade RAG architectures combining vector embeddings (pgvector), keyword search, and reranking.',
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-500" />,
      title: 'Decoupled Systems & Production Backends',
      description:
        'Developing Unix domain socket daemons, low-level Linux authentication modules, and async FastAPI & Node.js backends.',
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <div
            onClick={() => setIsZoomed(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsZoomed(true);
              }
            }}
            role="button"
            tabIndex={0}
            className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 cursor-zoom-in"
          >
            <Image
              src="/images/Anmol.webp"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed text-center">
            {INTRO_TEXT}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 }}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center text-foreground">
                <Target className="w-6 h-6 mr-2 text-primary" />
                My Mission
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                To build high-performance AI systems that eliminate cloud vendor lock-in, deliver
                sub-150ms real-time interactions, and bring privacy-first agentic intelligence
                directly to local environments.
              </p>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-primary/20 py-2"
                  >
                    <div className="absolute left-[-9px] top-3 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.6 }}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center text-foreground">
                <Globe className="w-6 h-6 mr-2 text-primary" />
                Beyond the Code
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                When I&apos;m not engineering AI systems, I&apos;m usually:
              </p>
              <ul className="space-y-4">
                {[
                  'Reading about public policy, economics, and how technology reshapes institutions.',
                  'Tinkering with Linux ricing, DWM configs, and minimalist developer workflows.',
                  'Exploring Japanese language and culture, which shaped how I think about precision.',
                  'Writing documentation and technical notes that actually help people.',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative pl-6"
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground italic">
                  {
                    '"The best AI systems are fast, local, and invisible: users forget they are even there."'
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-3xl max-h-[85vh] w-full p-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200 z-50"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
                <Image src="/images/Anmol.webp" alt="Anmol Sharma" fill className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
