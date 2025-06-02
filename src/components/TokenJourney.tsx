"use client";

import React, { useState, useRef } from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function StepCard({ number, title, description, icon }: StepCardProps): React.JSX.Element {
  const [isShaking, setIsShaking] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const triggerShake = () => {
    // If already shaking, don't do anything
    if (isShaking) return;
    
    setIsShaking(true);
    
    // Reset after animation completes
    setTimeout(() => {
      setIsShaking(false);
    }, 450); // slightly longer than animation duration
  };

  return (
    <div 
      ref={cardRef}
      onClick={triggerShake}
      className={`relative p-[2px] group bg-zinc-800 rounded-lg overflow-hidden transition-all duration-500 h-full shake-on-hover ${isShaking ? 'animate-[horizontal-shaking_0.8s_cubic-bezier(0.36,0.07,0.19,0.97)]' : ''}`}
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex flex-col p-6 z-10 bg-zinc-800 h-full rounded-md">
        <div className="shrink-0 bg-zinc-700 text-orange-400 flex items-center justify-center w-12 h-12 rounded-full text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl sm:text-2xl font-tt-firs-medium text-white group-hover:-translate-y-1 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-base text-gray-300 font-tt-firs-regular group-hover:text-gray-100 transition-all duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TokenJourney(): React.JSX.Element {
  return (
    <section id="token-journey" className="py-20 relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-tt-firs-demibold text-white mb-4">
            Start Your Token Journey in <span className="text-orange-500">3 Simple Steps</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StepCard 
            number={1}
            title="Create a Meme Token in Seconds"
            description="Get your token live in under 60 seconds—quick, easy, and fun."
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          
          <StepCard 
            number={2}
            title="Fair-buy Made Simple"
            description="Fair-buy uses a bonding curve to ensure fair token distribution, with the price rising as more tokens are minted."
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          
          <StepCard 
            number={3}
            title="Launch and Lock"
            description="Once Fair-buy is complete, LP flows into a Raydium permanently locked."
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
} 