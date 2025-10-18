"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/6956/sunset-summer-sun-yellow.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Finance Dashboard",
      description: "An interactive financial dashboard with data visualization, expense tracking, and budget management tools.",
      image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg",
      tags: ["React", "D3.js", "Express", "MySQL", "Material UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "A social networking platform with user profiles, posts, comments, real-time notifications, and direct messaging.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      tags: ["React Native", "Firebase", "GraphQL", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--secondary-accent))] mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills and expertise in full stack development.
            Each project represents unique challenges and solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-space">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-secondary rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center hover:text-primary-accent transition-colors"
                  >
                    Live Demo <ArrowUpRight className="ml-1 w-4 h-4" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center hover:text-primary-accent transition-colors"
                  >
                    View Code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="gradient-border glow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
