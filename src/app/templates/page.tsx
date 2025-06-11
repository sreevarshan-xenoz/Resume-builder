'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A clean, contemporary design with a focus on skills and experience.',
    image: '/templates/modern.jpg',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Traditional layout perfect for corporate and executive positions.',
    image: '/templates/professional.jpg',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with this bold design for creative industries.',
    image: '/templates/creative.jpg',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant design that lets your content shine.',
    image: '/templates/minimal.jpg',
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'Perfect for IT professionals with focus on technical skills.',
    image: '/templates/tech.jpg',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Sophisticated design for senior management positions.',
    image: '/templates/executive.jpg',
  },
];

export default function Templates() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">Resume Builder</Link>
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Home</Link>
            <Link href="/templates" className="text-primary-600 font-medium">Templates</Link>
            <Link href="/builder" className="text-gray-600 hover:text-primary-600 transition-colors">Builder</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Template</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select from our professionally designed templates to create your perfect resume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {/* Placeholder for actual template images */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-700">{template.name}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex space-x-3">
                  <Link 
                    href={`/builder?template=${template.id}`}
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-md text-center hover:bg-primary-700 transition-colors"
                  >
                    Use Template
                  </Link>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 