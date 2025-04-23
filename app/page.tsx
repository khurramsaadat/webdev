'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';
import PexelsImage from '@/components/PexelsImage';
import OptimizedImage from '@/components/OptimizedImage';

export default function Home() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices.',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      icon: '🎨',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'Social Media',
      description: 'Strategic social media management and content creation to boost your online presence.',
      icon: '📱',
    },
    {
      title: 'eCommerce',
      description: 'Custom e-commerce solutions with secure payment gateways and inventory management.',
      icon: '🛍️',
    },
    {
      title: 'Motion Graphics',
      description: 'Engaging motion graphics and animations to bring your brand to life.',
      icon: '🎬',
    },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with advanced features and seamless user experience.',
      image: '/images/projects/ecommerce-platform.jpg',
      tags: ['Web Development', 'UI/UX Design'],
      link: '#',
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure and user-friendly mobile banking application for iOS and Android.',
      image: '/images/projects/mobile-banking.jpg',
      tags: ['Mobile App', 'UI/UX Design'],
      link: '#',
    },
    {
      title: 'Corporate Website',
      description: 'A responsive corporate website with modern design and performance optimization.',
      image: '/images/projects/corporate-website.jpg',
      tags: ['Web Development', 'UI/UX Design'],
      link: '#',
    },
    {
      title: 'Food Delivery App',
      description: 'A food delivery application with real-time tracking and payment integration.',
      image: '/images/projects/food-delivery.jpg',
      tags: ['Mobile App', 'UI/UX Design'],
      link: '#',
    },
  ];

  const clients = [
    {
      name: 'Tesla',
      logo: '/images/clients/Tesla_Motors.svg.png',
      className: 'scale-75'
    },
    {
      name: 'Sony',
      logo: '/images/clients/sony-black.png',
      className: 'w-auto h-[45px] object-contain'
    },
    {
      name: 'Lego',
      logo: '/images/clients/brand-lego.svg',
      className: 'scale-75'
    },
    {
      name: 'McDonalds',
      logo: '/images/clients/Mcd.png',
      id: 'mcdonalds-1',
      className: 'scale-125'
    },
    {
      name: 'Apple',
      logo: '/images/clients/apple-14.svg',
      className: 'w-auto h-[40px] object-contain'
    },
    {
      name: 'New Balance',
      logo: '/images/clients/nb-logo.svg'
    },
    {
      name: 'Nike',
      logo: '/images/clients/nike-logo.svg'
    },
    {
      name: 'Mercedes-Benz',
      logo: '/images/clients/mb-star-svg.svg',
      id: 'mercedes-1'
    },
    {
      name: 'Lexus',
      logo: '/images/clients/lexus.png',
      className: 'scale-90'
    },
    {
      name: 'LOreal',
      logo: '/images/clients/LOreal.png',
      className: 'scale-85'
    },
    {
      name: 'Nestle',
      logo: '/images/clients/nestle.png',
      className: 'scale-80'
    },
    {
      name: 'Canon',
      logo: '/images/clients/canon-logo-red.svg',
      className: 'scale-85'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <PexelsImage
              src="/images/hero/team-collaboration.jpg"
              alt="Team collaboration in modern office"
              variant="hero"
              priority
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Digital Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            We create stunning websites and applications that help businesses grow and succeed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              We offer a wide range of digital solutions to help your business thrive in the online world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-subtitle">
              Take a look at some of our recent projects and see how we've helped our clients succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                      variant="grid2"
                      priority={index === 0}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="text-primary hover:text-secondary font-medium inline-flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    View Project
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Clients</h2>
            <p className="section-subtitle">
              Trusted by leading brands and innovative companies worldwide.
            </p>
          </div>
          <div className="relative">
            <div className="flex animate-carousel-mobile md:animate-carousel">
              {clients.map((client) => (
                <motion.div
                  key={client.id || client.name}
                  className="w-[100px] h-[70px] mx-6 relative flex-shrink-0 flex items-center justify-center"
                >
                  <OptimizedImage
                    src={client.logo}
                    alt={`${client.name} logo`}
                    variant="client"
                    className={`w-auto h-full object-contain ${client.className || ''}`}
                  />
                </motion.div>
              ))}
              {/* Duplicate logos for seamless loop */}
              {clients.map((client) => (
                <motion.div
                  key={`${client.id || client.name}-duplicate`}
                  className="w-[100px] h-[70px] mx-6 relative flex-shrink-0 flex items-center justify-center"
                >
                  <OptimizedImage
                    src={client.logo}
                    alt={`${client.name} logo`}
                    variant="client"
                    className={`w-auto h-full object-contain ${client.className || ''}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
} 