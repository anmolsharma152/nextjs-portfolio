'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Download,
  Award,
  Cpu,
  Cloud,
  Code,
  Database,
} from 'lucide-react';
import { useRef, useState } from 'react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'education' | 'honors'>(
    'experience'
  );

  const experience = [
    {
      title: 'AI & Data Solutions Engineer',
      company: 'The Bullseye',
      period: '04/2024 – Present',
      location: 'Jaipur, India',
      description:
        'Architected automated Python and SQL ETL/ELT pipelines across 10+ B2B SaaS client accounts, aggregating cross-channel attribution and onboarding metrics into PostgreSQL with 99.5% pipeline reliability.\nEngineered multi-stage growth automation workflows using n8n, Zapier, and enterprise REST webhooks, automating LinkedIn lead capture, email sequencing pipelines, and bidirectional CRM synchronization.\nDeveloped LLM-driven reporting pipelines (FastAPI, Groq/OpenAI APIs) integrated with n8n to dynamically synthesize weekly client performance digests, cutting manual reporting turnaround by 65%.',
      technologies: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'SQL',
        'n8n',
        'Zapier',
        'Groq API',
        'OpenAI API',
        'ETL/ELT',
        'Webhooks',
      ],
    },
    {
      title: 'Technical Support Executive',
      company: 'Teleperformance',
      period: '06/2023 – 03/2024',
      location: 'Jaipur, India',
      description:
        'Delivered enterprise technical support across 9.5-hour shifts handling software troubleshooting, client security SOPs (Norton / Microsoft), and system diagnostics under strict enterprise SLA targets.\nUtilized SQL queries and structured log analysis to diagnose system anomalies, verify database transactions, triage application errors, and escalate complex edge cases within enterprise escalation frameworks.',
      technologies: [
        'SQL Queries',
        'Log Analysis',
        'System Diagnostics',
        'Enterprise SLAs',
        'Security SOPs',
        'Troubleshooting',
      ],
    },
  ];

  const education = [
    {
      degree: 'Minor in Data Science and Artificial Intelligence',
      institution: 'Indian Institute of Technology (IIT), Mandi (CCE)',
      period: '05/2025 – 06/2026',
      description:
        'CGPA: 8.44 / 10. Rigorous curriculum covering Mathematical Foundations, Classical Machine Learning, Deep Learning (Transformers, Self-Attention, CNNs, Optimization), NLP, and Computer Vision.',
      technologies: [
        'Mathematical Foundations',
        'Classical ML',
        'Deep Learning',
        'Transformers',
        'Self-Attention',
        'CNNs',
        'PyTorch',
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Jaipur National University',
      period: '06/2019 – 05/2022',
      description:
        'Grade: 77.4% — First Division. Core coursework in Object-Oriented Programming (C++), Linux Environment, Database Systems & SQL, Visual Programming, Web Design, and Management Information Systems.',
      technologies: [
        'C++',
        'Linux Programming',
        'SQL & Databases',
        'Visual Programming',
        'Web Design',
        'MIS',
      ],
    },
  ];

  const honors = [
    {
      title: "Director's Certificate of Appreciation",
      organization: 'Student Council, Symbiosis School for Liberal Arts (SSLA), Pune',
      period: '2019 - 2020',
      description:
        'Awarded for leadership, student representation, and organizing university academic and cultural initiatives.',
      technologies: ['Leadership', 'Student Representation', 'Academic Initiatives'],
    },
    {
      title: 'NTSE Scholar',
      organization: 'National Talent Search Examination (NCERT)',
      period: 'National Merit Honor',
      description:
        'Awarded prestigious national scholarship recognition for high analytical and logical reasoning performance.',
      technologies: ['National Honor', 'Analytical Reasoning', 'Mathematics & Logic'],
    },
  ];

  const skillsGrid = [
    {
      category: 'Agentic & AI Orchestration',
      icon: Cpu,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
      skills: [
        'LangGraph',
        'LangChain',
        'Multi-Agent Systems',
        'State Routing',
        'Tool Calling',
        'Structured Outputs',
        'NeMo Guardrails',
        'RAG',
        'PyTorch',
      ],
    },
    {
      category: 'Cloud, LLMOps & Observability',
      icon: Cloud,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
      skills: [
        'AWS (Bedrock, S3, EC2)',
        'Azure',
        'GCP',
        'LangSmith',
        'Langfuse',
        'RAGAS',
        'OpenTelemetry',
      ],
    },
    {
      category: 'Languages & Systems Engineering',
      icon: Code,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      skills: [
        'Python',
        'FastAPI',
        'Linux',
        'Docker',
        'Rust',
        'WebSockets',
        'Server-Sent Events (SSE)',
        'SQL',
        'TypeScript',
        'Node.js',
      ],
    },
    {
      category: 'Databases & Data Pipelines',
      icon: Database,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
      skills: [
        'PostgreSQL 16',
        'pgvector',
        'Redis',
        'FAISS',
        'Data Modeling',
        'ETL/ELT Pipelines',
        'n8n',
        'Zapier',
      ],
    },
  ];

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-extrabold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Experience & Credentials
            </span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional trajectory, architectural milestones, verified education credentials, and
            technical skills grid.
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
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download PDF Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 glass rounded-lg p-1.5">
            {[
              { id: 'experience', label: 'Work Experience', icon: Briefcase },
              { id: 'skills', label: 'Skills Grid', icon: Cpu },
              { id: 'education', label: 'Education (BGV)', icon: GraduationCap },
              { id: 'honors', label: 'Honors & Leadership', icon: Award },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as 'experience' | 'skills' | 'education' | 'honors')
                }
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <tab.icon size={16} />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <div className="relative">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary opacity-30 hidden md:block" />
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative md:pl-16"
                >
                  <div className="hidden md:block absolute left-[32px] -translate-x-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <motion.div className="glass p-6 md:p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-border/50">
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-foreground/90">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={15} className="text-primary" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={15} className="text-primary" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="text-muted-foreground mb-6 space-y-3">
                      {exp.description.split('\n').map((bullet, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-sm md:text-base leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 select-none font-bold">•</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold"
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

          {/* Technical Skills Grid Tab */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skillsGrid.map((group, idx) => {
                const IconComponent = group.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`glass p-6 md:p-8 rounded-xl border ${group.bg} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`p-2.5 rounded-lg bg-background/80 shadow-sm ${group.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {group.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3.5 py-1.5 rounded-lg bg-background/80 border border-border/80 text-foreground text-xs md:text-sm font-medium shadow-xs hover:border-primary/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary to-primary opacity-30 hidden md:block" />
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative md:pl-16"
                >
                  <div className="hidden md:block absolute left-[32px] -translate-x-1/2 top-6 w-4 h-4 bg-secondary rounded-full border-4 border-background" />

                  <motion.div className="glass p-6 md:p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-border/50">
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-foreground/90">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                        <Calendar size={15} className="text-primary" />
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.technologies.map((tech: string, techIdx: number) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-secondary/20 text-foreground border border-border/60 rounded-full text-xs font-semibold"
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

          {/* Honors & Leadership Tab */}
          {activeTab === 'honors' && (
            <div className="space-y-8">
              <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500 to-indigo-500 opacity-30 hidden md:block" />
              {honors.map((honor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative md:pl-16"
                >
                  <div className="hidden md:block absolute left-[32px] -translate-x-1/2 top-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-background" />

                  <motion.div className="glass p-6 md:p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-border/50">
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">
                          {honor.title}
                        </h3>
                        <p className="text-lg font-semibold text-foreground/90">
                          {honor.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                        <Calendar size={15} className="text-amber-500" />
                        {honor.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                      {honor.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {honor.technologies.map((tech: string, techIdx: number) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 rounded-full text-xs font-semibold"
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
        </div>
      </div>
    </section>
  );
};

export default Resume;
