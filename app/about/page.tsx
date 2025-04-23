'use client';

import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';
import PexelsImage from '../../components/PexelsImage';

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/images/team/john-doe.jpg',
    description: 'With over 15 years of experience in web development and digital strategy.',
  },
  {
    name: 'Jane Smith',
    role: 'Creative Director',
    image: '/images/team/jane-smith.jpg',
    description: 'Passionate about creating beautiful and functional user experiences.',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: '/images/team/mike-johnson.jpg',
    description: 'Expert in modern web technologies and application architecture.',
  },
  {
    name: 'Sarah Williams',
    role: 'UX Designer',
    image: '/images/team/sarah-williams.jpg',
    description: 'Specialized in user research and interface design.',
  },
];

export default function About() {
  return (
    <div className="pb-20">
      {/* Header Section with Background */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <PexelsImage
              src="/images/hero/team-collaboration-2.jpg"
              alt="Our team collaboration"
              variant="hero"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="section-title text-white mb-4">About Us</h1>
          <p className="section-subtitle text-gray-200 max-w-2xl text-center">
            Welcome to CreativeTech. We are a team of passionate professionals dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>
      <div className="mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                At CreativeTech, we transform digital visions into exceptional realities. We deliver cutting-edge web development, mobile applications, and UI/UX design solutions that drive business growth. Through technical excellence and creative innovation, we help businesses build meaningful connections with their audience while exceeding expectations at every step.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Our Vision & Values</h2>
            <p className="text-gray-600 mb-4">
              We envision a digital landscape where every business thrives through innovative technology solutions. Our core values of creativity, integrity, and client success guide everything we do.
            </p>
            <p className="text-gray-600">
              Through continuous learning and attention to detail, we deliver high-quality solutions while staying ahead of industry trends and technological advancements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <OptimizedImage
              src="/images/about/office-space.jpg"
              alt="Our modern office space"
              variant="background"
              className="rounded-lg"
              priority={true}
            />
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the talented individuals behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="relative h-48 mb-4">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  variant="team"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 