"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface PowerFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function PowerFeature({ title, description, icon }: PowerFeatureProps): React.JSX.Element {
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
      className={`relative p-[2px] group rounded-xl overflow-hidden transition-all duration-500 cursor-pointer shake-on-hover ${isShaking ? 'animate-[horizontal-shaking_0.8s_cubic-bezier(0.36,0.07,0.19,0.97)]' : ''}`}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <div className="bg-zinc-800 rounded-xl p-6 relative z-10 h-full">
        <div className="flex items-start gap-5">
          <div className="shrink-0 bg-gray-700 rounded-lg p-3 text-orange-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300">
            {icon}
          </div>
          
          <div>
            <h3 className="text-xl font-tt-firs-medium text-white mb-2 group-hover:-translate-y-1 transition-transform duration-300">
              {title}
            </h3>
            <p className="text-gray-300 font-tt-firs-regular group-hover:text-gray-100 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MorePowers(): React.JSX.Element {
  return (
    <section id="more-powers" className="py-20 relative overflow-hidden">
     
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-tt-firs-demibold text-white mb-4">
            More Powers with <span className="text-orange-500">Push.fun</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PowerFeature
            title="Token Creation"
            description="Projects can customize their token mechanics and execute fair launches without manual barriers."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            }
          />
          
          <PowerFeature
            title="Curated Investor Experience"
            description="Investors gain early access to promising tokens with transparent timelines and exclusive bonuses."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          
          <PowerFeature
            title="Referral Rewards"
            description="Users can generate referral links and earn bonuses for inviting others."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            }
          />
        </div>
        
        
      </div>
    </section>
  );
} 