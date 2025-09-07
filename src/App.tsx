import React from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import BeforeAfter from './components/BeforeAfter';
import LimitedOffer from './components/LimitedOffer';
import Trust from './components/Trust';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <Benefits />
      <BeforeAfter />
      <LimitedOffer />
      <Trust />
      <FinalCTA />
    </div>
  );
}

export default App;