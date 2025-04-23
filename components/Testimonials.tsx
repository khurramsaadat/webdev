'use client';

import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    text: 'Working with CreativeTech has been an absolute pleasure. Their team delivered a stunning website that perfectly captures our brand essence.',
    image: '/images/testimonials/sarah-johnson.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    text: 'The attention to detail and creative solutions provided by CreativeTech helped us increase our online conversions by 150%.',
    image: '/images/testimonials/michael-chen.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    text: 'From concept to execution, CreativeTech exceeded our expectations. Their expertise in UI/UX design is unmatched.',
    image: '/images/testimonials/emily-rodriguez.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    variant="testimonial"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 