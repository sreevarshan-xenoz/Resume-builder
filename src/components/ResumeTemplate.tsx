import React from 'react';

interface ResumeData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    headline: string;
    summary: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

interface ResumeTemplateProps {
  data: ResumeData;
  templateId: string;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ data, templateId }) => {
  // This is a placeholder for the actual template rendering
  // In a real implementation, we would have different template components
  
  const renderTemplate = () => {
    switch (templateId) {
      case 'modern':
        return renderModernTemplate();
      case 'professional':
        return renderProfessionalTemplate();
      case 'creative':
        return renderCreativeTemplate();
      case 'minimal':
        return renderMinimalTemplate();
      case 'tech':
        return renderTechTemplate();
      case 'executive':
        return renderExecutiveTemplate();
      default:
        return renderModernTemplate();
    }
  };

  const renderModernTemplate = () => {
    const { personalInfo, education, experience, skills } = data;
    
    return (
      <div className="bg-white shadow-lg p-8 max-w-4xl mx-auto">
        {/* Header */}
        <header className="border-b-2 border-primary-500 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="text-xl text-primary-600 mt-1">{personalInfo.headline}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phone}</span>
          </div>
        </header>
        
        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Professional Summary</h2>
          <p className="text-gray-700">{personalInfo.summary}</p>
        </section>
        
        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Work Experience</h2>
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4 ml-2">
                <h3 className="text-lg font-medium text-gray-800">{job.position}</h3>
                <div className="flex justify-between text-gray-600">
                  <span>{job.company}, {job.location}</span>
                  <span>{job.startDate} - {job.endDate}</span>
                </div>
                <p className="mt-2 text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4 ml-2">
                <h3 className="text-lg font-medium text-gray-800">{edu.degree} in {edu.field}</h3>
                <div className="flex justify-between text-gray-600">
                  <span>{edu.institution}</span>
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="mt-2 text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Skills</h2>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between">
                  <span className="text-gray-800">{skill.name}</span>
                  <span className="text-gray-600">{skill.level * 20}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level * 20}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  const renderProfessionalTemplate = () => {
    // Placeholder for professional template
    return <div>Professional Template (Coming Soon)</div>;
  };

  const renderCreativeTemplate = () => {
    // Placeholder for creative template
    return <div>Creative Template (Coming Soon)</div>;
  };

  const renderMinimalTemplate = () => {
    // Placeholder for minimal template
    return <div>Minimal Template (Coming Soon)</div>;
  };

  const renderTechTemplate = () => {
    // Placeholder for tech template
    return <div>Tech Template (Coming Soon)</div>;
  };

  const renderExecutiveTemplate = () => {
    // Placeholder for executive template
    return <div>Executive Template (Coming Soon)</div>;
  };

  return (
    <div className="resume-template">
      {renderTemplate()}
    </div>
  );
};

export default ResumeTemplate; 