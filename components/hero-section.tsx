"use client"

import { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      
      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()
      
      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5
      
      heroRef.current.style.setProperty('--mouse-x', `${x * 20}px`)
      heroRef.current.style.setProperty('--mouse-y', `${y * 20}px`)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 grid-pattern">
      <div className="absolute inset-0 noise-bg"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-space tracking-tight">
              <span className="gradient-text">Full Stack Developer</span>
              <br />
              <span className="text-foreground">Crafting Digital Experiences</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm Alex Chen. With 5 years of experience building modern web applications,
            I transform complex problems into elegant solutions through code.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="gradient-border glow" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-down">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
