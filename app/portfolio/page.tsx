'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PexelsImage from '../../components/PexelsImage';
import PortfolioSection from '@/components/PortfolioSection';

export default function Portfolio() {
  return (
    <div className="pb-20">
      {/* Header Section with Background */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <PexelsImage
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Creative portfolio showcase"
              variant="hero"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="section-title text-white mb-4">Our Portfolio</h1>
          <p className="section-subtitle text-gray-200 max-w-2xl">
            Take a look at some of our recent projects and see how we've helped our clients succeed.
          </p>
        </div>
      </section>
      <div className="mb-16" />

      {/* Portfolio Section */}
      <PortfolioSection showTitle={false} />
    </div>
  );
} 