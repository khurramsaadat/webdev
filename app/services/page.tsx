'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Web Development',
    description: 'We create custom websites using the latest technologies and best practices. Our development process ensures your website is fast, secure, and optimized for search engines.',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Content Management Systems',
      'API integration',
      'Performance optimization',
    ],
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    description: 'Our design team creates beautiful and intuitive user interfaces that enhance user experience and drive conversions.',
    features: [
      'User research and analysis',
      'Wireframing and prototyping',
      'Visual design',
      'User testing',
      'Design system creation',
    ],
    icon: '🎨',
  },
  {
    title: 'Mobile App Development',
    description: 'We build native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    features: [
      'iOS app development',
      'Android app development',
      'Cross-platform solutions',
      'App store optimization',
      'Push notifications',
    ],
    icon: '📱',
  },
  {
    title: 'Digital Marketing',
    description: 'Our digital marketing services help you reach your target audience and grow your business online.',
    features: [
      'SEO optimization',
      'Social media marketing',
      'Content marketing',
      'Email marketing',
      'Analytics and reporting',
    ],
    icon: '📈',
  },
];

export default function Services() {
  return (
    <div className="pb-20">
      {/* Header Section with Background */}
      <div className="relative h-[50vh] mb-16">
        <Image
          src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
          alt="Team working on digital services"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="section-title text-white mb-4">Our Services</h1>
          <p className="section-subtitle text-gray-200 max-w-2xl">
            We offer comprehensive digital solutions to help your business succeed in the online world.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 