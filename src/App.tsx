
import React, { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import BeforeAfter from './components/BeforeAfter';
import LimitedOffer from './components/LimitedOffer';
import Trust from './components/Trust';
import FinalCTA from './components/FinalCTA';
import OfferModal from './components/OfferModal/OfferModal';


function App() {
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (!beforeAfterRef.current || modalShown) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowModal(true);
          setModalShown(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(beforeAfterRef.current);
    return () => observer.disconnect();
  }, [modalShown]);

  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <Benefits />
      <div ref={beforeAfterRef}>
        <BeforeAfter />
      </div>
      <LimitedOffer />
      <Trust />
      <FinalCTA />
      <OfferModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;