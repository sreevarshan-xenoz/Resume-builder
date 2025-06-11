'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ResumeData, createEmptyResume, createSampleResume, saveResume, getResumeById, getResumes, deleteResumeById } from '@/utils/resumeData';

interface ResumeContextType {
  currentResume: ResumeData | null;
  resumes: ResumeData[];
  setCurrentResume: (resume: ResumeData | null) => void;
  createNewResume: () => void;
  createSampleResumeData: () => void;
  saveCurrentResume: () => void;
  loadResume: (id: string) => void;
  deleteResume: (id: string) => void;
  updatePersonalInfo: (personalInfo: Partial<ResumeData['personalInfo']>) => void;
  addEducation: () => void;
  updateEducation: (id: string, education: Partial<ResumeData['education'][0]>) => void;
  removeEducation: (id: string) => void;
  addExperience: () => void;
  updateExperience: (id: string, experience: Partial<ResumeData['experience'][0]>) => void;
  removeExperience: (id: string) => void;
  addSkill: () => void;
  updateSkill: (id: string, skill: Partial<ResumeData['skills'][0]>) => void;
  removeSkill: (id: string) => void;
  isLoading: boolean;
  error: string | null;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentResume, setCurrentResume] = useState<ResumeData | null>(null);
  const [resumes, setResumes] = useState<ResumeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load resumes from localStorage on initial render
  useEffect(() => {
    try {
      const loadedResumes = getResumes();
      setResumes(loadedResumes);
      
      // If there are resumes, set the first one as current
      if (loadedResumes.length > 0) {
        setCurrentResume(loadedResumes[0]);
      } else {
        // Otherwise create a new empty resume
        const newResume = createEmptyResume();
        setCurrentResume(newResume);
      }
    } catch (err) {
      setError('Failed to load resumes');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createNewResume = () => {
    const newResume = createEmptyResume();
    setCurrentResume(newResume);
  };

  const createSampleResumeData = () => {
    const sampleResume = createSampleResume();
    setCurrentResume(sampleResume);
  };

  const saveCurrentResume = () => {
    if (currentResume) {
      try {
        saveResume(currentResume);
        
        // Update the resumes list
        const updatedResumes = getResumes();
        setResumes(updatedResumes);
        
        setError(null);
      } catch (err) {
        setError('Failed to save resume');
        console.error(err);
      }
    }
  };

  const loadResume = (id: string) => {
    try {
      const resume = getResumeById(id);
      if (resume) {
        setCurrentResume(resume);
        setError(null);
      } else {
        setError('Resume not found');
      }
    } catch (err) {
      setError('Failed to load resume');
      console.error(err);
    }
  };

  const deleteResume = (id: string) => {
    try {
      const success = deleteResumeById(id);
      if (success) {
        // Update the resumes list
        const updatedResumes = getResumes();
        setResumes(updatedResumes);
        
        // If the current resume was deleted, set current to null or another resume
        if (currentResume && currentResume.id === id) {
          if (updatedResumes.length > 0) {
            setCurrentResume(updatedResumes[0]);
          } else {
            setCurrentResume(null);
          }
        }
        
        setError(null);
      } else {
        setError('Failed to delete resume');
      }
    } catch (err) {
      setError('Failed to delete resume');
      console.error(err);
    }
  };

  // Personal Info update
  const updatePersonalInfo = (personalInfo: Partial<ResumeData['personalInfo']>) => {
    if (currentResume) {
      setCurrentResume({
        ...currentResume,
        personalInfo: {
          ...currentResume.personalInfo,
          ...personalInfo,
        },
      });
    }
  };

  // Education section methods
  const addEducation = () => {
    if (currentResume) {
      const { v4: uuidv4 } = require('uuid');
      const newEducation = {
        id: uuidv4(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: '',
      };
      
      setCurrentResume({
        ...currentResume,
        education: [...currentResume.education, newEducation],
      });
    }
  };

  const updateEducation = (id: string, education: Partial<ResumeData['education'][0]>) => {
    if (currentResume) {
      const updatedEducation = currentResume.education.map(edu => 
        edu.id === id ? { ...edu, ...education } : edu
      );
      
      setCurrentResume({
        ...currentResume,
        education: updatedEducation,
      });
    }
  };

  const removeEducation = (id: string) => {
    if (currentResume) {
      const updatedEducation = currentResume.education.filter(edu => edu.id !== id);
      
      setCurrentResume({
        ...currentResume,
        education: updatedEducation,
      });
    }
  };

  // Experience section methods
  const addExperience = () => {
    if (currentResume) {
      const { v4: uuidv4 } = require('uuid');
      const newExperience = {
        id: uuidv4(),
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      };
      
      setCurrentResume({
        ...currentResume,
        experience: [...currentResume.experience, newExperience],
      });
    }
  };

  const updateExperience = (id: string, experience: Partial<ResumeData['experience'][0]>) => {
    if (currentResume) {
      const updatedExperience = currentResume.experience.map(exp => 
        exp.id === id ? { ...exp, ...experience } : exp
      );
      
      setCurrentResume({
        ...currentResume,
        experience: updatedExperience,
      });
    }
  };

  const removeExperience = (id: string) => {
    if (currentResume) {
      const updatedExperience = currentResume.experience.filter(exp => exp.id !== id);
      
      setCurrentResume({
        ...currentResume,
        experience: updatedExperience,
      });
    }
  };

  // Skills section methods
  const addSkill = () => {
    if (currentResume) {
      const { v4: uuidv4 } = require('uuid');
      const newSkill = {
        id: uuidv4(),
        name: '',
        level: 3,
      };
      
      setCurrentResume({
        ...currentResume,
        skills: [...currentResume.skills, newSkill],
      });
    }
  };

  const updateSkill = (id: string, skill: Partial<ResumeData['skills'][0]>) => {
    if (currentResume) {
      const updatedSkills = currentResume.skills.map(s => 
        s.id === id ? { ...s, ...skill } : s
      );
      
      setCurrentResume({
        ...currentResume,
        skills: updatedSkills,
      });
    }
  };

  const removeSkill = (id: string) => {
    if (currentResume) {
      const updatedSkills = currentResume.skills.filter(s => s.id !== id);
      
      setCurrentResume({
        ...currentResume,
        skills: updatedSkills,
      });
    }
  };

  const value = {
    currentResume,
    resumes,
    setCurrentResume,
    createNewResume,
    createSampleResumeData,
    saveCurrentResume,
    loadResume,
    deleteResume,
    updatePersonalInfo,
    addEducation,
    updateEducation,
    removeEducation,
    addExperience,
    updateExperience,
    removeExperience,
    addSkill,
    updateSkill,
    removeSkill,
    isLoading,
    error,
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext; 