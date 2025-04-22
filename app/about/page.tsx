'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'With over 15 years of experience in web development and digital strategy.',
  },
  {
    name: 'Jane Smith',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Passionate about creating beautiful and functional user experiences.',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Expert in modern web technologies and application architecture.',
  },
  {
    name: 'Sarah Williams',
    role: 'UX Designer',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Specialized in user research and interface design.',
  },
];

export default function About() {
  return (
    <div className="pb-20">
      {/* Header Section with Background */}
      <div className="relative h-[300px] mb-16">
        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Our team collaboration"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="section-title text-white mb-4">Our Story</h1>
          <p className="section-subtitle text-gray-200 max-w-2xl">
            We are a team of passionate professionals dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Our mission is to help businesses thrive in the digital world by creating
              beautiful, functional, and user-friendly websites and applications.
            </p>
            <p className="text-gray-600 mb-4">
              We believe in the power of technology to transform businesses and create
              meaningful connections with customers.
            </p>
            <p className="text-gray-600">
              Our team of experts works closely with clients to understand their needs
              and deliver solutions that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <Image
              src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our modern office space"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover rounded-lg"
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
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-lg"
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