'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FiCpu, 
  FiCode, 
  FiGlobe, 
  FiLayers, 
  FiBox, 
  FiWifi, 
  FiZap, 
  FiTarget, 
  FiGrid, 
  FiHexagon 
} from 'react-icons/fi';

const logoOptions = [
  {
    id: 1,
    name: 'Tech Infinity',
    description: 'A modern infinity symbol with circuit-like elements',
    icon: <FiCpu className="w-16 h-16" />,
  },
  {
    id: 2,
    name: 'Digital Pulse',
    description: 'A stylized pulse wave with tech elements',
    icon: <FiZap className="w-16 h-16" />,
  },
  {
    id: 3,
    name: 'Code Circle',
    description: 'A circular design with binary code elements',
    icon: <FiCode className="w-16 h-16" />,
  },
  {
    id: 4,
    name: 'Tech Sphere',
    description: 'A 3D sphere with digital elements',
    icon: <FiGlobe className="w-16 h-16" />,
  },
  {
    id: 5,
    name: 'Digital Cube',
    description: 'A modern cube with tech-inspired patterns',
    icon: <FiBox className="w-16 h-16" />,
  },
  {
    id: 6,
    name: 'Tech Wave',
    description: 'A flowing wave design with digital elements',
    icon: <FiWifi className="w-16 h-16" />,
  },
  {
    id: 7,
    name: 'Digital Spark',
    description: 'A dynamic spark design with tech elements',
    icon: <FiTarget className="w-16 h-16" />,
  },
  {
    id: 8,
    name: 'Tech Orbit',
    description: 'An orbital design with digital elements',
    icon: <FiLayers className="w-16 h-16" />,
  },
  {
    id: 9,
    name: 'Digital Matrix',
    description: 'A matrix-inspired design with modern elements',
    icon: <FiGrid className="w-16 h-16" />,
  },
  {
    id: 10,
    name: 'Tech Fusion',
    description: 'A fusion of geometric shapes with tech elements',
    icon: <FiHexagon className="w-16 h-16" />,
  },
];

export default function Logos() {
  return (
    <div className="pb-20">
      {/* Header Section with Background */}
      <div className="relative h-[50vh] mb-16">
        <Image
          src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
          alt="Logo design concepts"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="section-title text-white mb-4">Logo Options</h1>
          <p className="section-subtitle text-gray-200 max-w-2xl">
            Choose the perfect logo for CreativeTech
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {logoOptions.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4 text-primary">
                {logo.icon}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">CreativeTech</h3>
                <p className="text-gray-600 text-sm">{logo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 