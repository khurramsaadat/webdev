'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PexelsImage from '@/components/PexelsImage';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced features and seamless user experience.',
    image: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372.jpeg',
    tags: ['Web Development', 'UI/UX Design'],
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application for iOS and Android.',
    image: 'https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg',
    tags: ['Mobile App', 'UI/UX Design'],
    link: '#',
  },
  {
    title: 'Corporate Website',
    description: 'A responsive corporate website with modern design and performance optimization.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg',
    tags: ['Web Development', 'UI/UX Design'],
    link: '#',
  },
  {
    title: 'Food Delivery App',
    description: 'A food delivery application with real-time tracking and payment integration.',
    image: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg',
    tags: ['Mobile App', 'UI/UX Design'],
    link: '#',
  },
];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <motion.div 
                className="relative h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-full">
                  <PexelsImage
                    src={project.image}
                    alt={project.title}
                    variant="grid4"
                  />
                </div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary hover:text-secondary font-medium"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 