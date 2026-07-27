'use client';

// Next.js and React

// Third-party libraries
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Local imports
import { useTheme } from '@/context/ThemeContext';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleInitialScroll = () => {
      if (window.location.hash) {
        // Wait for all components to be mounted
        setTimeout(() => {
          scrollToSection(window.location.hash);
        }, 500);
      }
    };

    // Initial scroll check
    const timer = setTimeout(handleInitialScroll, 300);

    // Add event listeners
    window.addEventListener('load', handleInitialScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleInitialScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: 'https://github.com/anmolsharma152',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={18} />,
      href: 'https://linkedin.com/in/anmolsharma152',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={18} />,
      href: 'mailto:ozymandias.work@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToSection = (href: string) => {
    // Remove the # from the href to get the ID
    const id = href.replace('#', '');
    if (!id) return;

    // Close mobile menu if open
    setIsMenuOpen(false);

    // Small delay to ensure state updates before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) {
        console.error(`Element with id '${id}' not found`);
        return;
      }

      // Calculate the correct scroll position
      const headerOffset = 80; // Height of your header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL without adding to history
      window.history.pushState({}, '', href);
    }, 50); // Small delay to ensure state updates
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-background/50 dark:bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <motion.div
              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/Anmol.webp"
                alt="Profile"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </motion.div>
            <span className="font-heading text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Anmol Sharma
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
              </motion.a>
            ))}
          </div>

          {/* Right Side - Theme Toggle & Socials */}
          <div className="flex items-center space-x-2">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-1 mr-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-foreground/5 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-200 text-foreground/80"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 20 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden bg-background/80 dark:bg-background/90 backdrop-blur-lg border-t border-border/60 dark:border-border/30 shadow-lg"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index, duration: 0.2 }}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/90 hover:text-primary hover:bg-foreground/5 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Social Icons - Mobile */}
                <div className="pt-2 mt-4 border-t border-border/50 dark:border-border/20">
                  <div className="flex justify-center space-x-4 px-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.2 + index * 0.1,
                          type: 'spring',
                          stiffness: 300,
                        }}
                        className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-primary transition-colors duration-200"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
