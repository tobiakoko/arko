'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

type ModalType = 'privacy' | 'terms' | null

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <About />
      <Contact />
      <Footer setActiveModal={setActiveModal} />
      <Modal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  )
}
