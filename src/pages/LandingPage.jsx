// LandingPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Input from '../components/Input';

const LandingPage = () => {
  const [showHero, setShowHero] = useState(true);

  const handleUserInput = () => {
    setShowHero(false); // Hide Hero section when the user provides input
  };

  return (
    <div>
      <Navbar />
      {showHero && <Hero />} {/* Conditionally render Hero */}
      <Input onUserInput={handleUserInput} />
    </div>
  );
};

export default LandingPage;
