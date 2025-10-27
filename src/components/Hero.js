import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-bg.jpg')"
    }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="hero-text text-yellow-400 text-4xl md:text-6xl font-bold text-center">
          Test 2
        </h1>
      </div>
    </section>
  );
};

export default Hero;