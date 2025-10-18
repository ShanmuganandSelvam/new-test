"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Lightbulb, Rocket, Users } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Express", "MongoDB", "PostgreSQL", "GraphQL", "AWS",
    "Docker", "Kubernetes", "CI/CD", "TDD", "Agile"
  ]
  
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "I write maintainable, scalable, and well-documented code following best practices and design patterns."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "I approach complex challenges with analytical thinking and creative solutions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "I thrive in collaborative environments, communicating effectively with cross-functional teams."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Learner",
      description: "I quickly adapt to new technologies and methodologies to stay at the cutting edge."
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--secondary-accent))] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="blob w-full aspect-square max-w-md mx-auto overflow-hidden rounded-3xl border border-border/50 shadow-xl">
                <Image 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Alex Chen" 
                  width={500} 
                  height={500} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary-accent/20 blob-spin"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-secondary-accent/20 blob-spin"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-space">Who am I?</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              I'm a passionate Full Stack Developer with 5 years of experience building web applications that solve real-world problems. My journey in tech began with a Computer Science degree, followed by roles at startups and established companies where I've honed my skills across the entire development stack.
            </p>
            <p className="text-muted-foreground mb-8 text-pretty">
              I specialize in creating responsive, accessible, and performant web applications using modern technologies. My approach combines technical expertise with a keen eye for design and user experience. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 font-space">My Skills</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="skill-pill px-3 py-1 bg-secondary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary-accent/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center mb-4 text-[hsl(var(--primary-accent))]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-space">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
