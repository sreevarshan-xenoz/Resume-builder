import React from 'react';
import TemplateCard from './TemplateCard';
import { getAllTemplateImages } from '../../utils/templateImages';

interface TemplateGalleryProps {
  onTemplateSelect?: (templateId: string) => void;
  onImageError?: (templateId: string, error: Error) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  onTemplateSelect,
  onImageError,
}) => {
  const templates = getAllTemplateImages();

  const handleImageError = (templateId: string) => (error: Error) => {
    console.error(`Template ${templateId} image error:`, error);
    if (onImageError) {
      onImageError(templateId, error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          id={template.id}
          title={template.name}
          description={`Professional ${template.name.toLowerCase()} template for your resume`}
          popular={template.id === 'modern' || template.id === 'professional'}
          onImageError={handleImageError(template.id)}
        />
      ))}
    </div>
  );
};

export default TemplateGallery;