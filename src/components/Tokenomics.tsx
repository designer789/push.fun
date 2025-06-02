"use client";

import React from 'react';

interface TokenAllocationProps {
  name: string;
  percentage: number;
  color: string;
}

function TokenAllocation({ name, percentage, color }: TokenAllocationProps): React.JSX.Element {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
          <span className="text-white font-tt-firs-medium text-sm">{name}</span>
        </div>
        <span className="text-orange-500 font-tt-firs-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Tokenomics(): React.JSX.Element {
  const allocations = [
    {
      name: "Fair Launch",
      percentage: 70,
      color: "bg-orange-500"
    },
    {
      name: "Marketing & Community",
      percentage: 5,
      color: "bg-cyan-500"
    },
    {
      name: "Team & Operations",
      percentage: 5,
      color: "bg-indigo-500"
    },
    {
      name: "Referral Reward & Startup Plan",
      percentage: 10,
      color: "bg-purple-500"
    },
    {
      name: "Ecosystem",
      percentage: 10,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-tt-firs-demibold text-white mb-4">
            <span className="text-orange-500">$PUSH</span> Tokenomics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
        </div>
        
        {/* Tokenomics Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Token info and benefits */}
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden">
            {/* Supply */}
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-tt-firs-medium text-orange-500 mb-4">Token Supply</h3>
              <div className="flex items-center">
                <span className="text-4xl sm:text-5xl font-tt-firs-medium text-white">21,000,000</span>
                <span className="ml-2 text-xl text-orange-500 font-tt-firs-medium">$PUSH</span>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="relative z-10">
              <h3 className="text-2xl font-tt-firs-medium text-orange-500 mb-4">Benefits</h3>
              <p className="text-gray-300 leading-relaxed">
                Hold $PUSH, and let the fun begin—score discounts, shape the platform with your vote, boost referral rewards, unlock VIP launches, and rake in passive income from liquidity pools.
              </p>
            </div>
            
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50"></div>
          </div>
          
          {/* Right side - Allocation chart */}
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden">
            <h3 className="text-2xl font-tt-firs-medium text-orange-500 mb-6">Allocation</h3>
            
            <div className="space-y-6">
              {/* Progress bars */}
              {allocations.map((allocation, index) => (
                <TokenAllocation 
                  key={index}
                  name={allocation.name}
                  percentage={allocation.percentage}
                  color={allocation.color}
                />
              ))}
            </div>
            
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 