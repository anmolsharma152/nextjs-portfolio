'use client';

import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { Brain, Cpu, Globe, Target, Terminal, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

// Extracted strings to satisfy both ESLint quotes and Prettier formatting rules
const INTRO_TEXT =
  "I'm a Python-focused AI Engineer and Systems Developer specializing in Generative AI, agentic systems, and low-latency Machine Learning deployment. I bridge the gap between advanced research (IIT Mandi) and production-grade engineering to build reliable, high-performance intelligent systems.";
const MISSION_SUBTITLE =
  "I'm passionate about engineering reliable AI products that make a real difference, whether it's:";
const QUOTE_TEXT =
  '"Technology should work for people, not the other way around. I build solutions that empower users and drive meaningful outcomes."';

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
      title: 'Generative AI & Agents',
      description:
        'Orchestrating multi-agent systems with LangGraph, CrewAI, async pgvector memory, and hybrid search',
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: 'Machine Learning & CV',
      description:
        'Building deep learning models (PyTorch) and CPU-optimized computer vision pipelines (YOLO, DeepFace)',
    },
    {
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      title: 'Edge & Low-Latency AI',
      description:
        'Optimizing local speech inference (whisper + Kokoro) and building offline Linux biometric authentication daemons',
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-500" />,
      title: 'Liberal Arts Perspective',
      description:
        'Leveraging a background in economics and public policy (SSLA) for human-centric design and communication',
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8 rounded-full"></div>
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
              <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <Target className="w-6 h-6 mr-2 text-primary" />
                My Mission
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                I specialize in creating data-driven solutions that deliver real business value. My
                approach combines analytical thinking with technical expertise to build systems that
                are not just functional, but intelligent and intuitive.
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
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
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
              <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <Globe className="w-6 h-6 mr-2 text-primary" />
                Real-World Impact
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed">{MISSION_SUBTITLE}</p>
              <ul className="space-y-4">
                {[
                  'Developing CodexEngine, a production-grade Agentic RAG platform with hybrid search',
                  'Achieving sub-200ms speech interaction via local Silero VAD, Whisper, and WASM audio engines',
                  'Training reinforcement learning algorithms for autonomous drone flight physics and simulated navigation',
                  'Designing recommender models (RecSys_RL) and multi-agent health assistants (WellnessMate)',
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
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 italic">{QUOTE_TEXT}</p>
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
                <Image
                  src="/images/Anmol.webp"
                  alt="Anmol Sharma"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
