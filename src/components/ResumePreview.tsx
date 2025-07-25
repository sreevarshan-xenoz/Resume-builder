'use client';

import { ResumeData } from '@/utils/resumeData';

interface ResumePreviewProps {
  resume: ResumeData;
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <div className="bg-white shadow-xl rounded-lg p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-primary-600 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {resume.personalInfo.firstName} {resume.personalInfo.lastName}
        </h1>
        {resume.personalInfo.headline && (
          <h2 className="text-xl text-primary-600 font-semibold mb-4">
            {resume.personalInfo.headline}
          </h2>
        )}
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {resume.personalInfo.email && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {resume.personalInfo.email}
            </div>
          )}
          {resume.personalInfo.phone && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {resume.personalInfo.phone}
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {resume.personalInfo.summary && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {resume.personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {resume.experience && resume.experience.length > 0 && resume.experience.some(exp => exp.company || exp.position) && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Work Experience
          </h3>
          <div className="space-y-6">
            {resume.experience.filter(exp => exp.company || exp.position).map((exp) => (
              <div key={exp.id} className="relative pl-4 border-l-2 border-primary-200">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {exp.position}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <span className="font-medium text-primary-600">{exp.company}</span>
                  {exp.location && (
                    <span className="text-gray-500 ml-2">• {exp.location}</span>
                  )}
                </div>
                {exp.description && (
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resume.education && resume.education.length > 0 && resume.education.some(edu => edu.institution || edu.degree) && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Education
          </h3>
          <div className="space-y-4">
            {resume.education.filter(edu => edu.institution || edu.degree).map((edu) => (
              <div key={edu.id} className="relative pl-4 border-l-2 border-primary-200">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-medium text-primary-600">{edu.institution}</span>
                  {edu.location && (
                    <span className="text-gray-500 ml-2">• {edu.location}</span>
                  )}
                  {edu.gpa && (
                    <span className="text-gray-500 ml-2">• GPA: {edu.gpa}</span>
                  )}
                </div>
                {edu.description && (
                  <p className="text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resume.skills && resume.skills.length > 0 && resume.skills.some(skill => skill.name) && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resume.skills.filter(skill => skill.name).map((skill) => (
              <div key={skill.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  {skill.category && (
                    <span className="text-sm text-gray-500 block">{skill.category}</span>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-full ${
                        level <= skill.level 
                          ? 'bg-primary-500' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {resume.certifications && resume.certifications.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Certifications
          </h3>
          <div className="space-y-3">
            {resume.certifications.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div>{cert.date}</div>
                  {cert.expiration && <div>Expires: {cert.expiration}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {resume.projects && resume.projects.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Projects
          </h3>
          <div className="space-y-4">
            {resume.projects.map((project) => (
              <div key={project.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                  {project.startDate && project.endDate && (
                    <span className="text-sm text-gray-500">
                      {project.startDate} - {project.endDate}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-2">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
