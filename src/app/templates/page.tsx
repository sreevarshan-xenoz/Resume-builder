'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import TemplateCard from '@/components/templates/TemplateCard';
import FeedbackToast from '@/components/ui/FeedbackToast';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const templates = [
  {
    id: 'modern',
    title: 'Modern',
    description: 'A clean, contemporary design with a focus on skills and experience.',
    imageSrc: '/templates/modern.jpg',
    popular: true,
  },
  {
    id: 'professional',
    title: 'Professional',
    description: 'Traditional layout perfect for corporate and executive positions.',
    imageSrc: '/templates/professional.jpg',
    popular: false,
  },
  {
    id: 'creative',
    title: 'Creative',
    description: 'Stand out with this bold design for creative industries.',
    imageSrc: '/templates/creative.jpg',
    popular: true,
  },
  {
    id: 'minimal',
    title: 'Minimal',
    description: 'Simple and elegant design that lets your content shine.',
    imageSrc: '/templates/minimal.jpg',
    popular: false,
  },
  {
    id: 'tech',
    title: 'Tech',
    description: 'Perfect for IT professionals with focus on technical skills.',
    imageSrc: '/templates/tech.jpg',
    popular: false,
  },
  {
    id: 'executive',
    title: 'Executive',
    description: 'Sophisticated design for senior management positions.',
    imageSrc: '/templates/executive.jpg',
    popular: false,
  },
];

export default function Templates() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('info');

  const handlePreviewClick = (templateId: string) => {
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setToastMessage(`Template preview for ${templateId} will be available soon!`);
      setToastType('info');
      setShowToast(true);
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Template
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Select from our professionally designed templates to create your perfect resume.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingAnimation size="lg" />
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TemplateCard
                  id={template.id}
                  title={template.title}
                  description={template.description}
                  imageSrc={template.imageSrc}
                  popular={template.popular}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
      
      <FeedbackToast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={4000}
      />
    </MainLayout>
  );
} 