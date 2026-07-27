'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import ThreeDCard from './3DCard';

const TITLES = [
  'AI Systems Engineer',
  'Backend Systems Developer',
  'Multi-Agent Architect',
  'Low-Latency ML Engineer',
];

const TYPING_SPEED = 50;
const DELETING_SPEED = 25;
const PAUSE_TIME = 1000;

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = TITLES[currentTitleIndex];

    if (isTyping) {
      if (currentIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText(currentTitle.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setIsTyping(false), PAUSE_TIME);
      return () => clearTimeout(timeout);
    }

    if (currentIndex > 0) {
      const timeout = setTimeout(() => {
        setText(currentTitle.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, DELETING_SPEED);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIsTyping(true);
      setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 500);
    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, currentTitleIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-x-hidden bg-background py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 xl:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="overflow-x-visible">
                <h1 className="font-heading text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 text-foreground">
                  Building{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    Low-Latency AI Infra
                  </span>{' '}
                  &amp; Stateful Multi-Agent Backends
                </h1>
              </div>

              <div className="h-12 flex items-center justify-center lg:justify-start mb-6">
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                  {text}
                  <span
                    className={`inline-block w-1 h-7 ml-2 bg-primary ${isTyping ? 'animate-pulse' : ''}`}
                  />
                </h2>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Specializing in Python, TypeScript/Node.js, and Rust. Architecting stateful agentic
                systems, async FastAPI &amp; Node backends, sub-150ms edge inferencing, and pgvector
                knowledge retrieval.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-95 transition-all shadow-lg hover:shadow-blue-600/20"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3.5 border border-border/80 text-foreground rounded-xl font-semibold hover:bg-muted/50 transition-colors"
                >
                  View My Work
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-[400px] max-w-2xl mx-auto w-full"
          >
            <ThreeDCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
