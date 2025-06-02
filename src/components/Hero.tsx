"use client";

import React from 'react';
import { WordRotate } from './WordRotate';
import Image from 'next/image';

export default function Hero(): React.JSX.Element {
  const rotatingWords = ["Push It.", "Launch It.", "Own It."];

  return (
    <section className="relative flex items-center justify-center pt-32 pb-18 border-b border-white/10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 z-10"></div>
        <Image
          src="/p2-2.png"
          alt="Hero background"
          fill
          className="object-cover object-bottom opacity-60 -z-10"
          priority
          quality={90}
        />
      </div>
      
      {/* Left side image */}
      <div className="absolute top-0 left-0 h-full w-1/2 z-0 pointer-events-none hidden md:block">
        <div className="relative h-full w-full">
          <Image
            src="/p1-1.png"
            alt="Hero left decoration"
            className="object-contain object-left"
            fill
            priority
            quality={85}
          />
        </div>
      </div>
      
      {/* Right side image */}
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 pointer-events-none hidden md:block">
        <div className="relative h-full w-full">
          <Image
            src="/p1-2.png"
            alt="Hero right decoration"
            className="object-contain object-right"
            fill
            priority
            quality={85}
          />
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline with rotating text */}
        <div className="mb-8">
          <WordRotate
            words={rotatingWords}
            duration={2000}
            className="text-4xl sm:text-5xl lg:text-6xl font-tt-firs-demibold text-white leading-[1em]"
            framerProps={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -50 },
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          />
        </div>

        {/* Introduction section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="space-y-6 text-lg sm:text-lg font-tt-firs-regular text-gray-300 leading-relaxed">
            <p>
              Crypto creation isn&apos;t just a process—it&apos;s an adventure! Push.fun isn&apos;t just a launchpad—it&apos;s where dreamers, rebels, and meme creators turn wild ideas into tokens!
            </p>
            <p className="text-orange-400 font-tt-firs-medium text-xl">
              Easy, fun, and ready for takeoff!
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://t.me/Push_fun_Portal" target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-tt-firs-medium text-base transition-all duration-200 transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg hover:shadow-orange-500/25"
          >
            Join our community
          </button>
          </a>
          
          <a href="https://docs.push.fun/" target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="border-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-full font-tt-firs-medium text-base transition-all duration-200 transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Explore Docs
          </button>
          </a>

        </div>
      </div>
    </section>
  );
} 