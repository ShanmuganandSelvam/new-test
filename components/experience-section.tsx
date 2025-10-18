"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechNova Solutions",
      period: "2021 - Present",
      description: "Lead development of enterprise SaaS applications using React, Node.js, and AWS. Implemented CI/CD pipelines, reducing deployment time by 40%. Mentored junior developers and conducted code reviews."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Frontier",
      period: "2019 - 2021",
      description: "Developed and maintained e-commerce platforms using MERN stack. Optimized database queries, improving application performance by 30%. Collaborated with UX/UI designers to implement responsive designs."
    },
    {
      title: "Frontend Developer",
      company: "WebSphere Inc.",
      period: "2018 - 2019",
      description: "Built interactive user interfaces using React and Redux. Implemented responsive designs and ensured cross-browser compatibility. Participated in agile development processes."
    },
    {
      title: "Junior Web Developer",
      company: "CodeCraft Studios",
      period: "2017 - 2018",
      description: "Developed and maintained client websites using HTML, CSS, JavaScript, and PHP. Collaborated with designers to implement pixel-perfect designs. Assisted in database management and server configuration."
    }
  ]
  
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2015 - 2017",
      description: "Specialized in Web Technologies and Distributed Systems. Thesis on 'Scalable Microservices Architecture for Modern Web Applications'."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2011 - 2015",
      description: "Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development."
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--secondary-accent))] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 font-space">Professional Journey</h3>
            <div className="space-y-12 pl-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-bold mb-1 font-space">{exp.title}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary-accent font-medium">{exp.company}</span>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-pretty">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 font-space">Education</h3>
            <div className="space-y-12 pl-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-bold mb-1 font-space">{edu.degree}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary-accent font-medium">{edu.institution}</span>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground text-pretty">{edu.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 font-space">Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-accent mr-3"></div>
                  <div>
                    <h4 className="font-medium">AWS Certified Developer</h4>
                    <p className="text-sm text-muted-foreground">Amazon Web Services, 2022</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-accent mr-3"></div>
                  <div>
                    <h4 className="font-medium">Professional Scrum Master I</h4>
                    <p className="text-sm text-muted-foreground">Scrum.org, 2021</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary-accent mr-3"></div>
                  <div>
                    <h4 className="font-medium">MongoDB Certified Developer</h4>
                    <p className="text-sm text-muted-foreground">MongoDB, 2020</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
