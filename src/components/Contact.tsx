'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    },
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ozymandias.work@gmail.com',
      link: 'mailto:ozymandias.work@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/anmolsharma152',
      link: 'https://github.com/anmolsharma152',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anmolsharma152',
      link: 'https://www.linkedin.com/in/anmolsharma152/',
    },
  ];

  const handleContactClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    value: string
  ) => {
    if (label === 'Email') {
      e.preventDefault();
      navigator.clipboard.writeText(value);
      toast({
        title: 'Copied to Clipboard',
        description: 'Email address has been copied to your clipboard.',
      });
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Show success toast
      toast({
        title: 'Message Sent',
        description: "I'll get back to you soon!",
        variant: 'default',
      });

      // Reset form
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description:
          error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start a conversation? Let&apos;s discuss your next project or collaboration
            opportunity. Or, if you&apos;d prefer, send me a message using the form below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I&apos;m always interested in hearing about new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I&apos;ll try my best to get
                back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleContactClick(e, info.label, info.value)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-opacity-20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{info.label}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="glass p-6 rounded-lg"
            >
              <h4 className="font-semibold mb-3">What I Offer</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Agentic AI & RAG Pipeline Development</li>
                <li>• Edge / On-Device ML Deployment</li>
                <li>• LLM Evaluation & Fine-Tuning</li>
                <li>• Production Backend Systems (FastAPI, PostgreSQL)</li>
                <li>• Open Source AI Tooling & Consulting</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Hidden honeypot field for bot spam detection */}
              <input
                type="text"
                {...register('honeypot')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                    {errors.name && (
                      <span className="ml-2 text-sm text-red-500">{errors.name.message}</span>
                    )}
                  </label>
                  <input
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-3 bg-background border ${
                      errors.name ? 'border-red-500' : 'border-border'
                    } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                    {errors.email && (
                      <span className="ml-2 text-sm text-red-500">{errors.email.message}</span>
                    )}
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="ozymandias.work@gmail.com"
                    {...register('email')}
                    className={`w-full px-4 py-3 bg-background border ${
                      errors.email ? 'border-red-500' : 'border-border'
                    } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                  {errors.subject && (
                    <span className="ml-2 text-sm text-red-500">{errors.subject.message}</span>
                  )}
                </label>
                <input
                  id="subject"
                  {...register('subject')}
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.subject ? 'border-red-500' : 'border-border'
                  } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
                  placeholder="What's this about?"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                  {errors.message && (
                    <span className="ml-2 text-sm text-red-500">{errors.message.message}</span>
                  )}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message')}
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.message ? 'border-red-500' : 'border-border'
                  } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none`}
                  placeholder="Tell me about your project or inquiry..."
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
