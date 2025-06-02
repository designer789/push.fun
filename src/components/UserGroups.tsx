"use client";

import React from 'react';
import Image from 'next/image';

interface FeatureItemProps {
  title: string;
  description: string;
}

function FeatureItem({ title, description }: FeatureItemProps): React.JSX.Element {
  return (
    <div className="mb-6 group">
      <h3 className="text-xl font-tt-firs-medium text-white mb-2 group-hover:-translate-y-1 transition-transform duration-300">
        <span className="text-orange-500 mr-2">→</span>{title}
      </h3>
      <p className="text-gray-300 font-tt-firs-regular pl-6 border-l border-gray-700 group-hover:border-orange-500 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}

interface UserGroupProps {
  title: string;
  subtitle: string;
  features: { title: string; description: string }[];
  isLeft?: boolean;
  bgImage: string;
}

function UserGroup({ title, subtitle, features, isLeft = false, bgImage }: UserGroupProps): React.JSX.Element {
  return (
    <div className={`w-full md:w-1/2 bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden ${isLeft ? 'md:mr-3' : 'md:ml-3'} mb-6 md:mb-0`}>
      {/* Background gradient accent */}
      <div className={`absolute inset-0 opacity-5 ${isLeft ? 'bg-gradient-to-br from-orange-500 to-transparent' : 'bg-gradient-to-bl from-cyan-500 to-transparent'}`}></div>
      
      {/* Background image */}
      <div className="absolute bottom-0 right-10 w-1/2 h-1/2">
        <Image 
          src={bgImage}
          alt=""
          width={300}
          height={300}
          className="absolute bottom-0 right-0 object-contain opacity-15"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-tt-firs-medium text-white mb-1">
          {title}
        </h2>
        <p className="text-orange-400 font-tt-firs-regular mb-8 text-sm">{subtitle}</p>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function UserGroups(): React.JSX.Element {
  const developerFeatures = [
    {
      title: "Launch in a Snap",
      description: "Spin-up tokens on $SOL with zero friction."
    },
    {
      title: "Trust Through Transparency",
      description: "Fair-buy guarantees an even playing field."
    },
    {
      title: "Locked and Loaded Liquidity",
      description: "Funds go straight into Raydium LPs, locked and secure."
    }
  ];
  
  const investorFeatures = [
    {
      title: "Scoop It First",
      description: "Get in early and ride the hype."
    },
    {
      title: "Fair-buy, Fair Play",
      description: "No insider deals or private allocations—everyone's equal."
    },
    {
      title: "See it All, Instantly",
      description: "Real-time insights keep your investments on track."
    },
    {
      title: "HODL with Confidence",
      description: "Locked liquidity means stable, long-term value."
    }
  ];

  return (
    <section id="user-groups" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-4">
          <UserGroup 
            title="For the Innovators"
            subtitle="aka Developers"
            features={developerFeatures}
            isLeft={true}
            bgImage="/p3-2.png"
          />
          
          <UserGroup 
            title="For the Fortune Hunters"
            subtitle="aka Investors"
            features={investorFeatures}
            bgImage="/p4.png"
          />
        </div>
      </div>
    </section>
  );
} 