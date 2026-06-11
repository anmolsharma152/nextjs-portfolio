'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: 'Generative AI & LLMOps',
      items: [
        'Multi-Agent Orchestration',
        'Agentic RAG',
        'LLM Evaluation (Eval)',
        'Vector Search (pgvector, FAISS)',
        'Hybrid Semantic Search',
        'Prompt Engineering',
      ],
    },
    {
      category: 'Machine Learning & CV',
      items: [
        'Deep Learning (PyTorch, TensorFlow)',
        'Computer Vision (YOLO, OpenCV)',
        'Recommender Systems (RL-based)',
        'Reinforcement Learning (Q-learning, PPO)',
        'Time-Series Forecasting',
      ],
    },
    {
      category: 'AI Systems & Deployment',
      items: [
        'Low-Latency CPU Inference',
        'ONNX Runtime',
        'WebAssembly (WASM)',
        'Unix Domain Sockets',
        'PAM Modules',
        'MediaPipe Tracking',
      ],
    },
    {
      category: 'Production & Backend Engineering',
      items: [
        'Python (FastAPI, Asyncio)',
        'SQL & PostgreSQL (Async I/O)',
        'Docker Containerization',
        'Linux Systems',
        'CI/CD (GitHub Actions)',
        'Tauri Desktop Shells',
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.03,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise in data science, machine
            learning, and AI.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              custom={index}
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <motion.h3
                  className="text-2xl font-bold text-center"
                  whileHover={{
                    color: 'var(--primary)',
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                >
                  {category.category}
                </motion.h3>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    custom={skillIndex}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      borderColor: 'hsl(var(--primary))',
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                    }}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-secondary/30 border border-border/50 text-foreground/90 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="mt-12 glass p-8 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <motion.h3
            className="text-2xl font-bold mb-6 text-center"
            whileHover={{ color: 'var(--primary)' }}
            transition={{ duration: 0.3 }}
          >
            Additional Expertise
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Statistical Analysis',
                description:
                  'Hypothesis testing, regression analysis, experimental design, and statistical modeling',
              },
              {
                title: 'Deep Learning',
                description:
                  'Neural networks, CNN, RNN, transformers, and computer vision applications',
              },
              {
                title: 'Big Data',
                description:
                  'Spark, Hadoop, distributed computing, and large-scale data processing',
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                className="text-center p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-semibold mb-3">{expertise.title}</h4>
                <p className="text-muted-foreground text-sm">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
