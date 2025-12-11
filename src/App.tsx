import { useState } from 'react';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Waitlist from './components/Waitlist';

type ModalType = 'privacy' | 'terms' | null;

function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <Navigation
        scrollToSection={scrollToSection}
        onOpenWaitlist={() => setShowWaitlist(true)}
      />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <About />
      <Contact />
      <Footer setActiveModal={setActiveModal} />
      <Modal activeModal={activeModal} onClose={() => setActiveModal(null)} />
      <Waitlist isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </div>
  );
}

export default App;
