"use client";

import React, { useState, useRef } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps): React.JSX.Element {
  const [isShaking, setIsShaking] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const triggerShake = () => {
    if (isShaking) return;
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 650); // slightly longer than animation duration
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

export default function PumpWithFun(): React.JSX.Element {
  return (
    <section id="pump-with-fun" className="py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-tt-firs-demibold text-white mb-4">
            Pump with <span className="text-orange-500">Fun</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard 
            title="Blink-and-It's-Live"
            description="Launch your token on Solana faster than you can say &quot;gas fee.&quot; No red tape, no waiting."
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          
          <FeatureCard 
            title="Chain Hopping Soon"
            description="Solana now, but Ethereum and TON launches are just around the corner."
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            }
          />
          
          <FeatureCard 
            title="Stay in the Know"
            description="Built-in analytics keep you ahead of the game with real-time updates."
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>
        
      </div>
    </section>
  );
} 