/**
 * Template image utilities for managing preview images and fallbacks
 */

export interface TemplateImageConfig {
  id: string;
  name: string;
  previewImage: string;
  fallbackImage?: string;
}

// Default template configurations with their preview images
export const TEMPLATE_IMAGES: Record<string, TemplateImageConfig> = {
  modern: {
    id: 'modern',
    name: 'Modern',
    previewImage: '/templates/modern-preview.svg',
    fallbackImage: '/templates/default-preview.svg',
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    previewImage: '/templates/professional-preview.svg',
    fallbackImage: '/templates/default-preview.svg',
  },
  creative: {
    id: 'creative',
    name: 'Creative',
    previewImage: '/templates/creative-preview.svg',
    fallbackImage: '/templates/default-preview.svg',
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    previewImage: '/templates/minimal-preview.svg',
    fallbackImage: '/templates/default-preview.svg',
  },
  tech: {
    id: 'tech',
    name: 'Tech',
    previewImage: '/templates/tech-preview.svg',
    fallbackImage: '/templates/default-preview.svg',
  },
  executive: {
    id: 'executive',
    name: 'Executive',
    previewImage: '/templates/executive-preview.svg',
    fallbackImage: '/templates/default-preview.svg',
  },
};

/**
 * Get template image configuration by ID
 */
export function getTemplateImage(templateId: string): TemplateImageConfig {
  return TEMPLATE_IMAGES[templateId] || {
    id: templateId,
    name: templateId.charAt(0).toUpperCase() + templateId.slice(1),
    previewImage: '/templates/default-preview.svg',
    fallbackImage: '/templates/default-preview.svg',
  };
}

/**
 * Get all available template images
 */
export function getAllTemplateImages(): TemplateImageConfig[] {
  return Object.values(TEMPLATE_IMAGES);
}

/**
 * Check if a template has a custom preview image
 */
export function hasCustomPreview(templateId: string): boolean {
  return templateId in TEMPLATE_IMAGES;
}

/**
 * Generate fallback chain for template images
 */
export function getImageFallbackChain(templateId: string): string[] {
  const config = getTemplateImage(templateId);
  const chain = [config.previewImage];
  
  if (config.fallbackImage && config.fallbackImage !== config.previewImage) {
    chain.push(config.fallbackImage);
  }
  
  // Always include default as final fallback
  if (!chain.includes('/templates/default-preview.svg')) {
    chain.push('/templates/default-preview.svg');
  }
  
  return chain;
}

/**
 * Preload template images for better performance
 */
export function preloadTemplateImages(templateIds: string[]): Promise<void[]> {
  const promises = templateIds.map(id => {
    const config = getTemplateImage(id);
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to preload ${config.previewImage}`));
      img.src = config.previewImage;
    });
  });
  
  return Promise.allSettled(promises).then(() => []);
}