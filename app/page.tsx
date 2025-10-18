"use client"

import { useEffect } from 'react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
import ExperienceSection from '@/components/experience-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import CustomCursor from '@/components/cursor'
import ScrollIndicator from '@/components/scroll-indicator'

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        
        const targetId = this.getAttribute('href')
        if (!targetId) return
        
        const targetElement = document.querySelector(targetId)
        if (!targetElement) return
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        })
      })
    })
  }, [])

  return (
    <main className="min-h-screen">
      <CustomCursor />
      <ScrollIndicator />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
