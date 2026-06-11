'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Download } from 'lucide-react';
import { useRef, useState } from 'react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experience = [
    {
      title: 'AI Systems Engineer / Developer',
      company: 'Independent Research & Development',
      period: '2024 – Present',
      location: 'Remote',
      description:
        'Developing production-grade agentic platforms, edge intelligence, and reinforcement learning systems: \n• CodexEngine & Disha: Engineered agentic RAG and multi-agent workflows using LangGraph, pgvector, hybrid search, and async PostgreSQL.\n• Emotion-Aware Voice Assistant: Integrated local speech models (faster-whisper, Silero VAD, Kokoro TTS) to build a sub-200ms voice pipeline.\n• Aura Biometrics: Built a privacy-focused biometrics auth daemon for Linux running edge ONNX face models decoupled via Unix domain sockets.\n• WellnessMate & Drones: Developed a CrewAI agent platform with MediaPipe tracking, and trained reinforcement learning models (Q-learning, PPO) for drone simulation.',
      technologies: ['LangGraph', 'FastAPI', 'pgvector', 'PyTorch', 'ONNX', 'Tauri', 'Rust/WASM', 'CrewAI', 'Python'],
    },
    {
      title: 'Technical Support Executive',
      company: 'Teleperformance',
      period: 'Jul 2023 – Apr 2024',
      location: 'Jaipur, India',
      description:
        'Diagnosed software issues in production environments while maintaining a CSAT of 4.8/5. Translated user issues into technical requirements and used SQL-based analysis to improve tool reliability and system performance.',
      technologies: ['Customer Support', 'SQL', 'Salesforce', 'Japanese Language'],
    },
    {
      title: 'Freelance Developer & Technologist',
      company: 'Self-Employed',
      period: '2022 – 2024',
      location: 'Remote',
      description:
        'Delivered modular CLI utilities and custom automation scripts in Python. Configured and optimized minimalist, Linux-first local development workflows.',
      technologies: ['Python', 'CLI Tools', 'Neovim', 'Linux'],
    },
  ];

  const education = [
    {
      degree: 'Minor in Data Science and AI',
      institution: 'Indian Institute of Technology, Mandi',
      period: 'May 2025 - Feb 2026',
      description: 'Focused on ML, NLP, PCA, RAG, and Deep Learning',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Pandas'],
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Jaipur National University',
      period: 'Jun 2019 – May 2022',
      description: 'Focus on C++, JavaScript, Python, and Database Management',
      technologies: ['C++', 'JavaScript', 'Python', 'SQL', 'React.js', 'Node.js'],
    },
    {
      degree: 'BA in Political Science and Economics',
      institution: 'Symbiosis School for Liberal Arts',
      period: 'Jul 2016 – May 2020',
      description: 'Focused on Public Policy, Writing, and Leadership',
      technologies: ['Public Policy', 'Economics', 'Leadership'],
    },
    {
      degree: 'High School - Science',
      institution: 'Maheshwari Public School',
      period: '2009 - 2015',
      description: 'Completed high school with focus on Science subjects',
    },
  ];

  return (
    <section id="resume" className="py-20 relative z-10">
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
            <span className="gradient-text">Resume & Experience</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            My professional journey, education, and certifications in data science and AI.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <a
              href="/resume.pdf"
              download="Anmol_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download PDF Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 glass rounded-lg p-1">
            {[
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'experience' | 'education')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={16} />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-30" />

          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-6 top-4 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <motion.div
                    className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-lg font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={14} />
                        {exp.period}
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies &&
                        exp.technologies.map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-6 top-4 w-4 h-4 bg-secondary rounded-full border-4 border-background" />

                  <motion.div
                    className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
                        <p className="text-lg font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
