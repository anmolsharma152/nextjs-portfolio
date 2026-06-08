'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Code, Cpu, Database, Zap, GitBranch } from 'lucide-react';
import { useRef, useState } from 'react';

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const techStack = [
  { icon: <Code className="w-5 h-5" />, name: 'Full-Stack', color: 'text-blue-400' },
  { icon: <Cpu className="w-5 h-5" />, name: 'AI/ML', color: 'text-purple-400' },
  { icon: <Database className="w-5 h-5" />, name: 'Data Science', color: 'text-emerald-400' },
  { icon: <GitBranch className="w-5 h-5" />, name: 'DevOps', color: 'text-amber-400' },
];

export const ThreeDCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
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
        style={{
          transformStyle: 'preserve-3d',
          transform,
        }}
        className="relative h-full w-full rounded-2xl overflow-hidden transition-all duration-500"
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
    </div>
  );
};

export default ThreeDCard;
