'use client';

import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { Code, Cpu, Database, Zap, GitBranch, X } from 'lucide-react';
import { useRef, useState } from 'react';

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const techStack = [
  { icon: <Cpu className="w-5 h-5" />, name: 'Generative AI', color: 'text-purple-400' },
  { icon: <Code className="w-5 h-5" />, name: 'Machine Learning', color: 'text-blue-400' },
  { icon: <Database className="w-5 h-5" />, name: 'Edge AI', color: 'text-emerald-400' },
  { icon: <GitBranch className="w-5 h-5" />, name: 'Backend & Ops', color: 'text-amber-400' },
];

export const ThreeDCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });

  const transform = useMotionTemplate`
    perspective(1000px)
    rotateX(${ySpring}deg)
    rotateY(${xSpring}deg)
    scale(${isHovered ? 1.03 : 1})
  `;

  const gradientPosition = useMotionTemplate`
    ${x}px ${y}px
  `;

  const gradient = useMotionTemplate`
    radial-gradient(
      300px circle at ${gradientPosition},
      rgba(99, 102, 241, 0.25),
      transparent 50%
    )
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rY);
    y.set(rX);
    rotateX.set(rX * 0.5);
    rotateY.set(rY * 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  return (
    <div className="relative w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsZoomed(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsZoomed(true);
          }
        }}
        role="button"
        tabIndex={0}
        style={{
          transformStyle: 'preserve-3d',
          transform,
        }}
        className="relative h-full w-full rounded-2xl overflow-hidden transition-all duration-500 cursor-zoom-in animate-card"
      >
        {/* Background gradient with shine effect */}
        <motion.div
          style={{
            background: gradient,
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80 backdrop-blur-sm" />

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwSDQwVjQwSDBWMFoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwSDQwVjQwSDBWMFoiIGZpbGw9InVybCgjcGFpbnQwX2FuZ3VsYXJfMzE0NF82MjMpIi8+PHBhdGggZD0iTTAgMEg0MFY0MEgwVjBaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfYW5ndWxhcl8zMTQ0XzYyMyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDQ1IDIwIDIwKSBzY2FsZSgyMCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'repeat',
              }}
            />
          </div>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"
          style={{
            transform: 'translateZ(10px)',
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full w-full p-6 flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <motion.h2
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  y: isHovered ? -5 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                Tech Stack
              </motion.h2>
              <motion.p
                className="text-muted-foreground mt-1"
                animate={{
                  opacity: isHovered ? 1 : 0.8,
                }}
              >
                My expertise spans across
              </motion.p>
            </div>
            <motion.div
              animate={{
                rotate: isHovered ? 10 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20"
            >
              <Zap className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </div>

          {/* Tech stack items */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`p-4 rounded-xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/30 hover:border-blue-500/30 transition-all duration-300 ${tech.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1 * index,
                    duration: 0.3,
                  },
                }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    {tech.icon}
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            className="mt-6 pt-4 border-t border-border/20"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
          >
            <p className="text-sm text-muted-foreground">
              Continuously exploring new technologies and frameworks to build better solutions.
            </p>
          </motion.div>
        </div>

        {/* Reflection effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 60%)',
            transform: 'translateZ(20px)',
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
        />
      </motion.div>

      {/* Subtle shadow */}
      <motion.div
        className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          opacity: isHovered ? 0.4 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
      />

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md cursor-zoom-out text-foreground"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full p-6 bg-background rounded-2xl border border-border shadow-2xl overflow-y-auto max-h-[85vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 text-foreground/70 hover:text-foreground bg-foreground/5 hover:bg-foreground/10 p-2 rounded-full transition-colors duration-200"
                aria-label="Close tech stack modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Core Technologies & Tools
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-purple-400 flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5" /> Generative AI & Agents
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    LangGraph, CrewAI, Agentic RAG (CodexEngine), pgvector, FAISS, GPT-4, Llama 3,
                    Prompt Engineering
                  </p>
                </div>
                <div className="border-t border-border/40 pt-4">
                  <h4 className="text-lg font-bold text-blue-400 flex items-center gap-2 mb-2">
                    <Code className="w-5 h-5" /> Machine Learning & CV
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    PyTorch, TensorFlow, Computer Vision (YOLO, OpenCV), DeepFace, Recommender
                    Systems (RecSys_RL), Reinforcement Learning (Drone simulation, Q-Learning, PPO)
                  </p>
                </div>
                <div className="border-t border-border/40 pt-4">
                  <h4 className="text-lg font-bold text-emerald-400 flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5" /> Edge & Low-Latency AI
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    ONNX Runtime, WebAssembly (WASM), Unix Domain Sockets, PAM Modules, Silero VAD,
                    Kokoro TTS, MediaPipe real-time posture tracking
                  </p>
                </div>
                <div className="border-t border-border/40 pt-4">
                  <h4 className="text-lg font-bold text-amber-400 flex items-center gap-2 mb-2">
                    <GitBranch className="w-5 h-5" /> Systems & Production Ops
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Python (FastAPI, Asyncio), SQL & PostgreSQL (Async I/O), Docker, Linux System
                    Administration, GitHub Actions CI/CD, Tauri Desktop Shells
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThreeDCard;
