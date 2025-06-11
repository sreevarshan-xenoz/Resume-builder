import { v4 as uuidv4 } from 'uuid';

// Define the resume data structure
export interface ResumeData {
  id: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    headline: string;
    summary: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    website?: string;
    linkedin?: string;
    github?: string;
  };
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
    location?: string;
    gpa?: string;
  }>;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements?: string[];
  }>;
  skills: Array<{
    id: string;
    name: string;
    level: number; // 1-5
    category?: string;
  }>;
  certifications?: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
    expiration?: string;
    credentialId?: string;
    url?: string;
  }>;
  projects?: Array<{
    id: string;
    name: string;
    description: string;
    startDate?: string;
    endDate?: string;
    url?: string;
    technologies?: string[];
  }>;
  languages?: Array<{
    id: string;
    language: string;
    proficiency: string; // Beginner, Intermediate, Advanced, Native
  }>;
  interests?: string[];
  references?: Array<{
    id: string;
    name: string;
    position: string;
    company: string;
    email?: string;
    phone?: string;
    reference?: string;
  }>;
}

// Create an empty resume template
export const createEmptyResume = (): ResumeData => {
  return {
    id: uuidv4(),
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      headline: '',
      summary: '',
    },
    education: [
      {
        id: uuidv4(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    experience: [
      {
        id: uuidv4(),
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    skills: [
      {
        id: uuidv4(),
        name: '',
        level: 3,
      },
    ],
  };
};

// Create a sample resume with dummy data
export const createSampleResume = (): ResumeData => {
  return {
    id: uuidv4(),
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      headline: 'Senior Software Engineer',
      summary: 'Experienced software engineer with over 8 years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about creating scalable and efficient solutions to complex problems.',
      address: '123 Tech Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA',
      website: 'johndoe.dev',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
    },
    education: [
      {
        id: uuidv4(),
        institution: 'Stanford University',
        degree: 'Master of Science',
        field: 'Computer Science',
        startDate: '2012',
        endDate: '2014',
        description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.',
        location: 'Stanford, CA',
        gpa: '3.9',
      },
      {
        id: uuidv4(),
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: '2008',
        endDate: '2012',
        description: 'Focused on software engineering and data structures. Member of the ACM student chapter.',
        location: 'Berkeley, CA',
        gpa: '3.8',
      },
    ],
    experience: [
      {
        id: uuidv4(),
        company: 'Tech Innovations Inc.',
        position: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: 'Jan 2020',
        endDate: 'Present',
        description: 'Lead developer for the company\'s flagship product, a cloud-based analytics platform. Managed a team of 5 engineers and implemented CI/CD pipelines that reduced deployment time by 70%.',
        achievements: [
          'Redesigned the frontend architecture using React and TypeScript, improving performance by 40%',
          'Implemented microservices architecture that scaled to handle 10x user growth',
          'Reduced AWS infrastructure costs by 30% through optimization',
        ],
      },
      {
        id: uuidv4(),
        company: 'DataSphere Solutions',
        position: 'Software Engineer',
        location: 'Palo Alto, CA',
        startDate: 'Jun 2016',
        endDate: 'Dec 2019',
        description: 'Developed and maintained RESTful APIs and microservices for the company\'s data processing platform. Collaborated with data scientists to implement machine learning models.',
        achievements: [
          'Built a real-time data processing pipeline using Kafka and Node.js',
          'Improved API response times by 60% through query optimization',
          'Developed an internal tool that automated reporting, saving 10 hours of manual work weekly',
        ],
      },
      {
        id: uuidv4(),
        company: 'StartUp Ventures',
        position: 'Junior Developer',
        location: 'San Jose, CA',
        startDate: 'Jul 2014',
        endDate: 'May 2016',
        description: 'Full-stack developer for an e-commerce startup. Worked on both frontend and backend development using JavaScript, React, and Node.js.',
        achievements: [
          'Implemented responsive design that improved mobile conversion rates by 25%',
          'Developed payment processing integration with Stripe and PayPal',
          'Created admin dashboard for inventory management and sales analytics',
        ],
      },
    ],
    skills: [
      {
        id: uuidv4(),
        name: 'JavaScript',
        level: 5,
        category: 'Programming Languages',
      },
      {
        id: uuidv4(),
        name: 'TypeScript',
        level: 5,
        category: 'Programming Languages',
      },
      {
        id: uuidv4(),
        name: 'React',
        level: 5,
        category: 'Frontend',
      },
      {
        id: uuidv4(),
        name: 'Node.js',
        level: 4,
        category: 'Backend',
      },
      {
        id: uuidv4(),
        name: 'AWS',
        level: 4,
        category: 'Cloud',
      },
      {
        id: uuidv4(),
        name: 'Docker',
        level: 4,
        category: 'DevOps',
      },
      {
        id: uuidv4(),
        name: 'GraphQL',
        level: 3,
        category: 'API',
      },
      {
        id: uuidv4(),
        name: 'MongoDB',
        level: 4,
        category: 'Database',
      },
    ],
    certifications: [
      {
        id: uuidv4(),
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2021',
        expiration: '2024',
        credentialId: 'AWS-ASA-123456',
        url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      },
      {
        id: uuidv4(),
        name: 'Google Cloud Professional Developer',
        issuer: 'Google',
        date: '2020',
        expiration: '2023',
        credentialId: 'GCP-PD-789012',
        url: 'https://cloud.google.com/certification/cloud-developer',
      },
    ],
    projects: [
      {
        id: uuidv4(),
        name: 'AI-Powered Task Manager',
        description: 'A smart task management application that uses machine learning to prioritize tasks and suggest optimal scheduling.',
        startDate: '2021',
        endDate: '2022',
        url: 'https://github.com/johndoe/ai-task-manager',
        technologies: ['React', 'Python', 'TensorFlow', 'Flask'],
      },
      {
        id: uuidv4(),
        name: 'Blockchain Voting System',
        description: 'A secure and transparent voting system built on blockchain technology to ensure vote integrity and prevent fraud.',
        startDate: '2019',
        endDate: '2020',
        url: 'https://github.com/johndoe/blockchain-voting',
        technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
      },
    ],
    languages: [
      {
        id: uuidv4(),
        language: 'English',
        proficiency: 'Native',
      },
      {
        id: uuidv4(),
        language: 'Spanish',
        proficiency: 'Intermediate',
      },
      {
        id: uuidv4(),
        language: 'French',
        proficiency: 'Beginner',
      },
    ],
    interests: ['Machine Learning', 'Blockchain Technology', 'Hiking', 'Photography', 'Chess'],
    references: [
      {
        id: uuidv4(),
        name: 'Sarah Johnson',
        position: 'CTO',
        company: 'Tech Innovations Inc.',
        email: 'sarah.johnson@techinnovations.com',
        phone: '(555) 987-6543',
        reference: 'John is an exceptional engineer who consistently delivers high-quality work and demonstrates excellent leadership skills.',
      },
    ],
  };
};

// Save resume to localStorage
export const saveResume = (resume: ResumeData): void => {
  try {
    const resumes = getResumes();
    const existingIndex = resumes.findIndex(r => r.id === resume.id);
    
    if (existingIndex >= 0) {
      resumes[existingIndex] = resume;
    } else {
      resumes.push(resume);
    }
    
    localStorage.setItem('resumes', JSON.stringify(resumes));
  } catch (error) {
    console.error('Error saving resume:', error);
  }
};

// Get all resumes from localStorage
export const getResumes = (): ResumeData[] => {
  try {
    const resumes = localStorage.getItem('resumes');
    return resumes ? JSON.parse(resumes) : [];
  } catch (error) {
    console.error('Error getting resumes:', error);
    return [];
  }
};

// Get a specific resume by ID
export const getResumeById = (id: string): ResumeData | null => {
  try {
    const resumes = getResumes();
    return resumes.find(resume => resume.id === id) || null;
  } catch (error) {
    console.error('Error getting resume by ID:', error);
    return null;
  }
};

// Delete a resume by ID
export const deleteResumeById = (id: string): boolean => {
  try {
    const resumes = getResumes();
    const filteredResumes = resumes.filter(resume => resume.id !== id);
    
    if (filteredResumes.length !== resumes.length) {
      localStorage.setItem('resumes', JSON.stringify(filteredResumes));
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error deleting resume:', error);
    return false;
  }
}; 