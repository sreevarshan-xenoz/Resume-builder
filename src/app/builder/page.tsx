'use client';

import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { useResume } from '@/context/ResumeContext';
import Button from '@/components/ui/Button';

export default function Builder() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Personal Info', 'Education', 'Experience', 'Skills', 'Preview'];
  
  const { 
    currentResume, 
    updatePersonalInfo, 
    saveCurrentResume 
  } = useResume();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index === activeStep ? 'bg-primary-600 text-white' : 
                    index < activeStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index < activeStep ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600">{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 relative">
            <div className="absolute top-1/2 h-0.5 w-full bg-gray-200 -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 h-0.5 bg-primary-600 -translate-y-1/2 transition-all duration-300"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content based on active step */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeStep === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
              <p className="text-gray-600">Let's start with your basic information.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John"
                    value={currentResume?.personalInfo.firstName || ''}
                    onChange={(e) => updatePersonalInfo({ firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Doe"
                    value={currentResume?.personalInfo.lastName || ''}
                    onChange={(e) => updatePersonalInfo({ lastName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john.doe@example.com"
                    value={currentResume?.personalInfo.email || ''}
                    onChange={(e) => updatePersonalInfo({ email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+1 (555) 123-4567"
                    value={currentResume?.personalInfo.phone || ''}
                    onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="headline" className="block text-sm font-medium text-gray-700 mb-1">Professional Headline</label>
                  <input
                    type="text"
                    id="headline"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Senior Software Engineer"
                    value={currentResume?.personalInfo.headline || ''}
                    onChange={(e) => updatePersonalInfo({ headline: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                  <textarea
                    id="summary"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="A brief summary of your professional background and goals..."
                    value={currentResume?.personalInfo.summary || ''}
                    onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Education</h2>
              <p className="text-gray-600">Add your educational background.</p>
              
              {/* Education form fields would go here */}
              <div className="text-center py-12 text-gray-500">
                Education form will be implemented here
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
              <p className="text-gray-600">Add your work history.</p>
              
              {/* Experience form fields would go here */}
              <div className="text-center py-12 text-gray-500">
                Experience form will be implemented here
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
              <p className="text-gray-600">Add your key skills and proficiency levels.</p>
              
              {/* Skills form fields would go here */}
              <div className="text-center py-12 text-gray-500">
                Skills form will be implemented here
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Preview Your Resume</h2>
              <p className="text-gray-600">Here's how your resume looks. You can make changes or export it.</p>
              
              {/* Resume preview would go here */}
              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                Resume preview will be displayed here
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
            >
              Previous
            </Button>
            
            <div className="flex space-x-3">
              <Button
                variant="secondary"
                onClick={saveCurrentResume}
              >
                Save
              </Button>
              
              <Button
                onClick={() => {
                  if (activeStep === steps.length - 1) {
                    // Handle finish
                    saveCurrentResume();
                  } else {
                    setActiveStep(prev => Math.min(steps.length - 1, prev + 1));
                  }
                }}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 