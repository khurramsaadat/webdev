import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PexelsImage from './PexelsImage';

export const projects = [
  {
    id: 'layout-creation',
    title: 'Layout Creation',
    description: 'Layout Factory platform specializing in Dubai Municipality and DFRE design assets.\nComprehensive system for managing DM-6 and DM-3 assets in English and Arabic.\nStreamlined design studio for creating and managing promotional layouts.\nOptimized workflow for Dubai Municipality approval process.',
    image: '/images/projects/dfre.jpg',
    tags: ['Layout Design', 'Dubai Municipality', 'DFRE Assets'],
    link: 'https://dfre.netlify.app/',
  },
  {
    id: 'gratuity-calculator',
    title: 'Gratuity Calculator',
    description: 'A user-friendly UAE gratuity calculator for end-of-service benefits calculation.\nFeatures dynamic inputs and real-time calculations with instant updates.\nSupports both resignation and termination scenarios with accurate results.\nIncludes PDF export functionality and detailed breakdown of calculations.',
    image: '/images/projects/gratuity.jpg',
    tags: ['Calculator', 'UAE Labor Law', 'Financial Tool'],
    link: 'https://my-gratuity.netlify.app/',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe Game',
    description: 'A modern take on the classic Tic Tac Toe game with sleek interface design.\nFeatures both player vs player and AI opponent game modes.\nIncludes smart win detection logic and move validation system.\nEnhanced with smooth animations and interactive game statistics.',
    image: '/images/projects/tic-tac-toe.png',
    tags: ['Game Development', 'Web Development', 'SVG Animation'],
    link: 'https://khurram-tictactoe.netlify.app/',
  },
  {
    id: 'pmi-proof',
    title: 'PMI Proof of Play',
    description: 'Professional form application developed for Philip Morris Management Services.\nFeatures dynamic input fields with real-time validation and error checking.\nImplements automated reference number generation and data organization.\nIncludes secure data submission and comprehensive form analytics.',
    image: '/images/projects/PMI-report.jpg',
    tags: ['Form Development', 'Business Solutions', 'UI/UX Design'],
    link: 'https://proof-of-play-form.netlify.app/',
  },
  {
    id: 'finance-platform',
    title: 'Finance Platform',
    description: 'Advanced financial platform with comprehensive market analysis tools.\nProvides real-time trading data and interactive chart visualization.\nOffers professional course management and educational resources.\nIncludes secure trading infrastructure and portfolio tracking.',
    image: '/images/projects/finance-platform.jpg',
    tags: ['Finance', 'Trading Analytics', 'Education'],
    link: 'https://taimur-finance.netlify.app/',
  },
  {
    id: 'neurofeedback',
    title: 'Neurofeedback Research',
    description: 'Cutting-edge research platform focused on neurofeedback studies and analysis.\nFeatures comprehensive publication database and research insights.\nProvides interactive data visualization and research metrics.\nBuilt with modern web technologies for optimal academic accessibility.',
    image: '/images/projects/neurofeedback.jpg',
    tags: ['Research', 'Healthcare', 'Academic'],
    link: 'https://arub.netlify.app/',
  },
  {
    id: 'fashion-house',
    title: 'E-commerce',
    description: 'Modern fashion e-commerce platform with extensive product catalog.\nFeatures seamless shopping experience and secure payment integration.\nIncludes newsletter subscription and customer account management.\nOptimized with responsive design and fast product search functionality.',
    image: '/images/projects/ecommerce-platform.jpg',
    tags: ['E-commerce', 'Web Development', 'UI/UX Design'],
    link: 'https://myfashionhouse.netlify.app/',
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
                  <p className="text-gray-600 mb-4 line-clamp-4">{project.description}</p>
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
                    Live Demo
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