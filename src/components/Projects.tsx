'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Github, Star, GitBranch, Layers } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

interface FlagshipProject {
  title: string;
  subtitle: string;
  summary: string;
  stack: string[];
  github: string;
  homepage?: string;
}

const VERIFIED_LIVE_REPOS: Record<string, string> = {
  CodexEngine: 'https://codex-engine.vercel.app',
};

const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    title: 'CodexEngine',
    subtitle: 'Document Intelligence & Production RAG',
    summary:
      'Deployed a production document intelligence platform (codex-engine.vercel.app) on LangGraph state machines featuring multi-tenant pgvector search, streaming SSE responses, and automated golden dataset faithfulness regression testing.',
    stack: ['Python', 'LangGraph', 'FastAPI', 'Next.js', 'pgvector', 'LangSmith', 'RAGAS'],
    github: 'https://github.com/anmolsharma152/CodexEngine',
    homepage: VERIFIED_LIVE_REPOS.CodexEngine,
  },
  {
    title: 'commerce_cortex',
    subtitle: 'Distributed Multi-Agent Transactional Orchestration Engine',
    summary:
      'Engineered a containerized multi-agent commerce backend featuring LangGraph state routing, PostgreSQL transactional checkpoints, Human-in-the-Loop approval gates, and 3-tier observability with OpenTelemetry and Langfuse distributed tracing.',
    stack: [
      'Python',
      'FastAPI',
      'LangGraph',
      'PostgreSQL',
      'Docker Compose',
      'Langfuse',
      'OpenTelemetry',
    ],
    github: 'https://github.com/anmolsharma152/commerce_cortex',
  },
  {
    title: 'Nimbus',
    subtitle: 'Autonomous Developer Agent & Sandbox Control Plane',
    summary:
      'Engineered a multi-tenant autonomous coding agent platform featuring a trusted control plane, disposable Docker/MicroVM sandbox workspaces, real-time WebSocket event streams, and short-lived GitHub App credential brokering.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Docker', 'WebSockets', 'GitHub API'],
    github: 'https://github.com/anmolsharma152/nimbus',
  },
  {
    title: 'AlgoDeck',
    subtitle: 'Full-Stack Workstation & Sandboxed Execution Runner',
    summary:
      'Built a full-stack developer learning workstation featuring a dual-pane VS Code Monaco IDE, isolated subprocess execution sandbox (5s kill timeout, 512KB buffer limit), PostgreSQL 16 connection pooling, and automated test harness.',
    stack: ['Node.js', 'Express', 'PostgreSQL 16', 'Docker Compose', 'Monaco IDE'],
    github: 'https://github.com/anmolsharma152/AlgoDeck',
  },
];

const getRepoDescription = (name: string, description: string | null) => {
  const fallbacks: { [key: string]: string } = {
    'Scholar-Loop':
      'Personal spaced-repetition agent executing FSRS-scheduled Learn + Quiz loops daily via Resend across System Design, ML, and DSA.',
    IdeaForge:
      'Agentic creative synthesis engine that diverges, evaluates, synthesizes, and persists novel ideas with compounding memory.',
    Ozyman:
      'Personal Operator & Autonomous AI Assistant app built for multi-agent workflows and local environment control.',
    commerce_cortex:
      'Distributed Multi-Agent Transactional Orchestration Engine featuring LangGraph state routing & PostgreSQL checkpoints.',
    'frontier-llmops-core':
      'An end-to-end engineering workspace for the modern LLM lifecycle, evaluation benchmarks, and fine-tuning pipelines.',
    'drone-intelligence':
      'Self-guided predictive drone simulation & reinforcement learning navigation engine built with PyTorch and Gym.',
    PsyRAG:
      'Domain-adapted RAG pipeline for psychological support & conversational mental health assistants with safety guardrails.',
    MedPal:
      'Neuro-symbolic clinical decision support assistant integrating structured medical knowledge graphs with LLM reasoning.',
    'promptcraft-lab':
      'A hands-on playground for prompt engineering, systematic evaluation metrics, and LLM behavior benchmarking.',
    RecSys_RL:
      'Reinforcement Learning algorithms and environments designed for dynamic recommendation and personalization.',
    'Fine-tuning-on-Job-Description-Corpus':
      'Fine-tuning transformer models on specialized job description corpora for automated skill mapping.',
    'ML-Foundations':
      'Implementations of foundational machine learning algorithms (regression, clustering, trees) from scratch.',
    Disha:
      'A production-grade, agentic Personal Intelligence platform powered by LangGraph, pgvector, and async PostgreSQL.',
    Aura: 'A privacy-focused, edge-optimized Arch Linux biometric auth daemon decoupled via Unix domain sockets and PAM.',
    CodexEngine:
      'A production-ready Agentic RAG engine with hybrid search, pgvector, LangGraph, and async FastAPI.',
    WellnessMate:
      'Multi-agent health companion built with CrewAI and MediaPipe real-time posture tracking in a Tauri desktop shell.',
    vad_processor:
      'Real-time, client-side Voice Activity Detection (VAD) built with Rust, WebAssembly, and ONNX Runtime.',
    wikirag:
      'A lightweight, fully offline RAG engine for Wikipedia querying using FAISS, RoBERTa, and Python.',
    nimbus:
      'Autonomous Cloud Software Engineering Agent Platform powered by multi-agent orchestration and sandbox control plane.',
    AlgoDeck:
      'Full-Stack Developer Workstation & Sandboxed Execution Runner with Monaco IDE & Docker Compose.',
  };
  return (
    fallbacks[name] ||
    description ||
    'A project showcasing advanced software engineering and machine learning principles.'
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/anmolsharma152/repos?sort=updated&per_page=50'
        );
        if (!response.ok) throw new Error('Failed to fetch repositories');

        const data = await response.json();

        // Filter out forks and profile README repos
        const filteredRepos = data
          .filter(
            (repo: GitHubRepo) =>
              !repo.fork &&
              !['anmolsharma152', 'nextjs-portfolio', 'anmolsharma152.github.io'].includes(
                repo.name.toLowerCase()
              )
          )
          .sort((a: GitHubRepo, b: GitHubRepo) => {
            const hasHomepageA = !!a.homepage && a.homepage.trim() !== '';
            const hasHomepageB = !!b.homepage && b.homepage.trim() !== '';

            if (hasHomepageA && !hasHomepageB) return -1;
            if (!hasHomepageA && hasHomepageB) return 1;

            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          })
          .slice(0, 9); // Display top 9 repos

        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      Python: 'bg-blue-500',
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-600',
      React: 'bg-cyan-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      Java: 'bg-red-500',
      'C++': 'bg-pink-500',
      'C#': 'bg-green-500',
      Go: 'bg-cyan-600',
      Rust: 'bg-orange-600',
      PHP: 'bg-purple-600',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Featured Systems &amp; Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Architectural flagships in multi-agent orchestration, sandbox execution, and distributed
            LLMOps infrastructure.
          </p>
        </motion.div>

        {/* Section 1: Architectural Flagships (4-Grid) */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Layers className="w-6 h-6 text-primary" />
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Architectural Flagships
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FLAGSHIP_PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-xl overflow-hidden border border-border/80 dark:border-border/40 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-heading text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs md:text-sm font-semibold text-primary/90 mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-blue-600/30 transition-all"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4 mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="px-6 py-4 border-t border-border/50 bg-secondary/20 dark:bg-secondary/10 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Live GitHub Repositories */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <Github className="w-6 h-6 text-primary" />
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Live GitHub Repositories
            </h3>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8 glass rounded-lg max-w-md mx-auto">
              <p className="text-muted-foreground mb-4">
                Explore all repositories directly on GitHub.
              </p>
              <a
                href="https://github.com/anmolsharma152"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium"
              >
                <Github size={18} />
                github.com/anmolsharma152
              </a>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.04, duration: 0.2 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="glass rounded-lg overflow-hidden h-full flex flex-col justify-between">
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-heading text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {repo.name}
                          </h4>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0"
                          >
                            <Github
                              size={20}
                              className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            />
                          </a>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4 mb-4">
                          {getRepoDescription(repo.name, repo.description)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {repo.language && (
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}
                            ></div>
                            <span className="text-xs text-muted-foreground">{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star size={14} />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitBranch size={14} />
                            <span>{repo.forks_count}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border-t border-border bg-secondary/30 dark:bg-secondary/10 flex flex-col justify-between min-h-[120px]">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics && repo.topics.length > 0 ? (
                          repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-0.5 bg-muted text-[10px] rounded-full text-muted-foreground font-medium"
                            >
                              {topic}
                            </span>
                          ))
                        ) : (
                          <span className="px-2 py-0.5 bg-muted text-[10px] rounded-full text-muted-foreground font-medium opacity-60">
                            portfolio
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                          <motion.a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-3.5 py-1.5 glass rounded-lg hover:bg-primary/10 hover:text-primary transition-all text-xs font-medium"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </motion.a>
                          {VERIFIED_LIVE_REPOS[repo.name] && (
                            <motion.a
                              href={VERIFIED_LIVE_REPOS[repo.name]}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-md transition-all text-xs font-medium"
                            >
                              <ExternalLink size={14} />
                              <span>Live</span>
                            </motion.a>
                          )}
                        </div>

                        <div className="text-[11px] text-muted-foreground">
                          {formatDate(repo.updated_at)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/anmolsharma152?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-150"
          >
            <Github size={20} />
            Explore All 40+ Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
