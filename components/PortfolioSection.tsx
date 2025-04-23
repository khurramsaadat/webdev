import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PexelsImage from './PexelsImage';

export const projects = [
  {
    id: 'fashion-house',
    title: 'E-commerce',
    description: 'A modern fashion e-commerce platform featuring curated collections of men\'s and women\'s clothing, with a clean UI, newsletter integration, and responsive design.',
    tags: ['E-commerce', 'Web Development', 'UI/UX Design'],
    link: 'https://myfashionhouse.netlify.app/',
    image: '/images/projects/ecommerce-platform.jpg',
  },
  {
    title: 'Finance Platform',
    description: 'A comprehensive financial platform offering trading analytics, market insights, and professional courses in Technical Analysis and Derivatives. Features real-time market analysis, advanced charting tools, and secure trading infrastructure.',
    image: '/images/projects/finance-platform.jpg',
    tags: ['Finance', 'Trading Analytics', 'Education'],
    link: 'https://taimur-finance.netlify.app/',
  },
  {
    title: 'Neurofeedback Research',
    description: 'A scientific research platform focused on neurofeedback studies, featuring latest publications, mental health insights, and performance research. Built with modern web technologies and academic publishing standards.',
    image: '/images/projects/neurofeedback.jpg',
    tags: ['Research', 'Healthcare', 'Academic'],
    link: 'https://arub.netlify.app/',
  },
  {
    title: 'Food Delivery App',
    description: 'A food delivery application with real-time tracking and payment integration.',
    image: '/images/projects/food-delivery.jpg',
    tags: ['Mobile App', 'UI/UX Design'],
    link: '#',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'An intelligent analytics platform that leverages machine learning to provide real-time business insights and predictive analytics.',
    image: '/images/projects/finance-platform.jpg',
    tags: ['AI/ML', 'Data Analytics', 'Web Development'],
    link: '#',
  },
  {
    title: 'Social Media Management Suite',
    description: 'A comprehensive social media management platform with content scheduling, analytics, and AI-powered engagement optimization.',
    image: '/images/projects/finance-platform.jpg',
    tags: ['Social Media', 'Marketing', 'SaaS'],
    link: '#',
  },
  {
    title: 'Virtual Event Platform',
    description: 'A feature-rich virtual event platform supporting live streaming, networking rooms, and interactive workshops with real-time collaboration.',
    image: '/images/projects/finance-platform.jpg',
    tags: ['Live Streaming', 'Web Development', 'Real-time'],
    link: '#',
  },
];

interface PortfolioSectionProps {
  showTitle?: boolean;
}

const PortfolioSection = ({ showTitle = true }: PortfolioSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-subtitle">
              Take a look at some of our recent projects and see how we've helped our clients succeed.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
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
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
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
                  <motion.div
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
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 