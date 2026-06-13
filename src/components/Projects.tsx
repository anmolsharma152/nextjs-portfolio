'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Github, Star, GitBranch } from 'lucide-react';
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

const getRepoDescription = (name: string, description: string | null) => {
  const fallbacks: { [key: string]: string } = {
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

        // Filter out forks and the special profile README repository.
        // Sort by deployment status first (repos with a homepage link on top), then by last updated.
        const filteredRepos = data
          .filter(
            (repo: GitHubRepo) =>
              !repo.fork && !['anmolsharma152', 'nextjs-portfolio', 'anmolsharma152.github.io'].includes(repo.name.toLowerCase())
          )
          .sort((a: GitHubRepo, b: GitHubRepo) => {
            const hasHomepageA = !!a.homepage && a.homepage.trim() !== '';
            const hasHomepageB = !!b.homepage && b.homepage.trim() !== '';

            if (hasHomepageA && !hasHomepageB) return -1;
            if (!hasHomepageA && hasHomepageB) return 1;

            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          })
          .slice(0, 9); // Display the top 9 repositories

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

  if (loading) {
    return (
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Loading projects from GitHub...
            </p>
          </motion.div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest work and open source contributions on GitHub.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <a
              href="https://github.com/anmolsharma152"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 rounded-lg flex flex-col items-center gap-4 max-w-md w-full hover:shadow-lg transition-all duration-300"
            >
              <Github size={48} className="text-primary" />
              <span className="text-lg font-semibold">Visit my GitHub profile</span>
              <span className="text-muted-foreground text-sm">github.com/anmolsharma152</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and open source contributions from GitHub.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass rounded-lg overflow-hidden h-full flex flex-col">
                {/* Project Header & Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {repo.name}
                      </h3>
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

                  {/* Language and Stats */}
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

                {/* Project Footer */}
                <div className="p-6 border-t border-border bg-secondary/30 dark:bg-secondary/10 flex flex-col justify-between min-h-[140px]">
                  {/* Topics */}
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

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>

                  {/* Updated Date */}
                  <div className="mt-3 text-xs text-muted-foreground">
                    Updated {formatDate(repo.updated_at)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-150"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
