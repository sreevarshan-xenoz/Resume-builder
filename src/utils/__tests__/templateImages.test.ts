import {
  getTemplateImage,
  getAllTemplateImages,
  hasCustomPreview,
  getImageFallbackChain,
  TEMPLATE_IMAGES
} from '../templateImages';

describe('templateImages utilities', () => {
  describe('getTemplateImage', () => {
    it('returns correct config for known template', () => {
      const config = getTemplateImage('modern');
      
      expect(config).toEqual({
        id: 'modern',
        name: 'Modern',
        previewImage: '/templates/modern-preview.svg',
        fallbackImage: '/templates/default-preview.svg',
      });
    });

    it('returns default config for unknown template', () => {
      const config = getTemplateImage('unknown');
      
      expect(config).toEqual({
        id: 'unknown',
        name: 'Unknown',
        previewImage: '/templates/default-preview.svg',
        fallbackImage: '/templates/default-preview.svg',
      });
    });
  });

  describe('getAllTemplateImages', () => {
    it('returns all configured templates', () => {
      const templates = getAllTemplateImages();
      
      expect(templates).toHaveLength(6);
      expect(templates.map(t => t.id)).toEqual([
        'modern', 'professional', 'creative', 'minimal', 'tech', 'executive'
      ]);
    });
  });

  describe('hasCustomPreview', () => {
    it('returns true for configured templates', () => {
      expect(hasCustomPreview('modern')).toBe(true);
      expect(hasCustomPreview('professional')).toBe(true);
    });

    it('returns false for unknown templates', () => {
      expect(hasCustomPreview('unknown')).toBe(false);
    });
  });

  describe('getImageFallbackChain', () => {
    it('returns correct fallback chain for known template', () => {
      const chain = getImageFallbackChain('modern');
      
      expect(chain).toEqual([
        '/templates/modern-preview.svg',
        '/templates/default-preview.svg'
      ]);
    });

    it('returns default chain for unknown template', () => {
      const chain = getImageFallbackChain('unknown');
      
      expect(chain).toEqual([
        '/templates/default-preview.svg'
      ]);
    });

    it('does not duplicate default fallback', () => {
      const chain = getImageFallbackChain('modern');
      const defaultCount = chain.filter(src => src === '/templates/default-preview.svg').length;
      
      expect(defaultCount).toBe(1);
    });
  });

  describe('TEMPLATE_IMAGES configuration', () => {
    it('has consistent structure for all templates', () => {
      Object.values(TEMPLATE_IMAGES).forEach(template => {
        expect(template).toHaveProperty('id');
        expect(template).toHaveProperty('name');
        expect(template).toHaveProperty('previewImage');
        expect(template).toHaveProperty('fallbackImage');
        
        expect(typeof template.id).toBe('string');
        expect(typeof template.name).toBe('string');
        expect(typeof template.previewImage).toBe('string');
        expect(typeof template.fallbackImage).toBe('string');
      });
    });

    it('has unique IDs for all templates', () => {
      const ids = Object.values(TEMPLATE_IMAGES).map(t => t.id);
      const uniqueIds = new Set(ids);
      
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('uses correct image paths', () => {
      Object.values(TEMPLATE_IMAGES).forEach(template => {
        expect(template.previewImage).toMatch(/^\/templates\/.*\.svg$/);
        expect(template.fallbackImage).toBe('/templates/default-preview.svg');
      });
    });
  });
});