'use client';

import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { useResume } from '@/context/ResumeContext';
import Button from '@/components/ui/Button';
import AISuggestions from '@/components/features/AISuggestions';
import PDFExport from '@/components/features/PDFExport';
import ResumePreview from '@/components/ResumePreview';

export default function Builder() {
  const [activeStep, setActiveStep] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const steps = ['Personal Info', 'Education', 'Experience', 'Skills', 'Preview'];
  
  const { 
    currentResume, 
    updatePersonalInfo, 
    saveCurrentResume,
    addEducation,
    updateEducation,
    removeEducation,
    addExperience,
    updateExperience,
    removeExperience,
    addSkill,
    updateSkill,
    removeSkill
  } = useResume();

  const handleExportPDF = () => {
    setIsExporting(true);
    
    // Simulate PDF generation
    setTimeout(() => {
      setIsExporting(false);
      alert('PDF export feature will be implemented in the next version. Your resume would be downloaded as a PDF file.');
    }, 2000);
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
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
                  
                  {currentResume?.education.map((edu, index) => (
                    <div key={edu.id} className="border border-gray-200 rounded-lg p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">Education {index + 1}</h3>
                        {currentResume.education.length > 1 && (
                          <button
                            onClick={() => removeEducation(edu.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="University of Example"
                            value={edu.institution}
                            onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Bachelor of Science"
                            value={edu.degree}
                            onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Computer Science"
                            value={edu.field}
                            onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="City, State"
                            value={edu.location || ''}
                            onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="2018"
                            value={edu.startDate}
                            onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="2022 or Expected 2024"
                            value={edu.endDate}
                            onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">GPA (Optional)</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="3.8"
                            value={edu.gpa || ''}
                            onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Relevant coursework, achievements, activities..."
                          value={edu.description}
                          onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
                        />
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={addEducation}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Add Another Education</span>
                  </button>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
                  <p className="text-gray-600">Add your work history.</p>
                  
                  {currentResume?.experience.map((exp, index) => (
                    <div key={exp.id} className="border border-gray-200 rounded-lg p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">Experience {index + 1}</h3>
                        {currentResume.experience.length > 1 && (
                          <button
                            onClick={() => removeExperience(exp.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0016.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Example Inc."
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Software Engineer"
                            value={exp.position}
                            onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="City, State"
                            value={exp.location}
                            onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Jan 2020"
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Dec 2022 or Present"
                            value={exp.endDate}
                            onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Describe your responsibilities, achievements, and key contributions..."
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                        />
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={addExperience}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Add Another Experience</span>
                  </button>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
                  <p className="text-gray-600">Add your key skills and proficiency levels.</p>
                  
                  {currentResume?.skills.map((skill, index) => (
                    <div key={skill.id} className="border border-gray-200 rounded-lg p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">Skill {index + 1}</h3>
                        {currentResume.skills.length > 1 && (
                          <button
                            onClick={() => removeSkill(skill.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0016.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Skill</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="JavaScript"
                            value={skill.name}
                            onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency Level</label>
                          <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            value={skill.level}
                            onChange={(e) => updateSkill(skill.id, { level: Number(e.target.value) })}
                          >
                            <option value={1}>1 - Beginner</option>
                            <option value={2}>2 - Basic</option>
                            <option value={3}>3 - Intermediate</option>
                            <option value={4}>4 - Advanced</option>
                            <option value={5}>5 - Expert</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Category (Optional)</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Programming Languages"
                            value={skill.category || ''}
                            onChange={(e) => updateSkill(skill.id, { category: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      {/* Visual skill level indicator */}
                      <div className="pt-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-700">Level:</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`w-4 h-4 rounded-full ${
                                  level <= skill.level 
                                    ? 'bg-primary-500' 
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({skill.level}/5)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={addSkill}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary-500 hover:text-primary-500 transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Add Another Skill</span>
                  </button>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Preview Your Resume</h2>
                  <p className="text-gray-600">Here's how your resume looks. You can make changes or export it.</p>
                  
                  {currentResume && (
                    <div className="max-h-[600px] overflow-y-auto">
                      <ResumePreview resume={currentResume} />
                    </div>
                  )}
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

          {/* AI Suggestions Panel */}
          <div className="lg:col-span-1">
            {activeStep === 4 && (
              <PDFExport 
                onExport={handleExportPDF}
                isLoading={isExporting}
              />
            )}
            
            {activeStep === 0 && (
              <AISuggestions 
                section="summary" 
                initialContent={currentResume?.personalInfo.summary || ''} 
                onApplySuggestion={(suggestion) => updatePersonalInfo({ summary: suggestion })}
              />
            )}
            {activeStep === 2 && (
              <AISuggestions 
                section="experience" 
                initialContent="Add your experience details here" 
                onApplySuggestion={(suggestion) => console.log("Applied experience suggestion:", suggestion)}
              />
            )}
            {activeStep === 3 && (
              <AISuggestions 
                section="skills" 
                initialContent="Add your skills here" 
                onApplySuggestion={(suggestion) => console.log("Applied skills suggestion:", suggestion)}
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 