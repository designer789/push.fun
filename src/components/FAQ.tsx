"use client";

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps): React.JSX.Element {
  return (
    <div className="border-b border-zinc-700/50 last:border-b-0 relative z-10">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-tt-firs-medium text-white hover:text-orange-500 transition-colors">
          {question}
        </h3>
        <div className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-orange-500' : 'bg-zinc-700'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out relative z-10 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-5">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    // Always set to the clicked index, never close completely
    setOpenIndex(index);
  };

  const faqItems = [
    {
      question: "What is Push.fun?",
      answer: "Push.fun is a launchpad for crypto projects that facilitates fast token creation, transparent bonding curve events, and community involvement through referral programs."
    },
    {
      question: "How does Fair-buy work?",
      answer: "Fair-buy uses a bonding curve to ensure fair and gradual token distribution, where the price to mint increases as more tokens are minted. Each wallet can mint tokens only once, ensuring equal access for all participants."
    },
    {
      question: "How are raised funds used?",
      answer: "Funds are split between liquidity pool contributions and small platform fees. Liquidity remains locked for security, ensuring long-term project stability."
    },
    {
      question: "Is there a referral program?",
      answer: "Yes, users earn bonuses by inviting others with referral links. Additional rewards are available by staking platform tokens."
    },
    {
      question: "Which chains do Push.fun support?",
      answer: "Solana is currently online. Ethereum and TON support are launching soon, expanding the possibilities for developers and investors."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-tt-firs-demibold text-white mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
        </div>
        
        {/* FAQ Items */}
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 relative overflow-hidden">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10 opacity-50 -z-0"></div>
        </div>
      </div>
    </section>
  );
} 