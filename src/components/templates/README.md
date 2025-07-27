# Template Image System

This directory contains the template image system implementation that provides robust image loading with fallback mechanisms for resume templates.

## Components

### TemplateCard
The main component for displaying template previews with the following features:
- Automatic image fallback system
- Hover effects and animations
- Popular template badges
- Error handling and user feedback
- Responsive design

**Props:**
- `id`: Template identifier (used to auto-resolve image paths)
- `title`: Template display name
- `description`: Template description
- `imageSrc?`: Optional custom image source (defaults to template config)
- `fallbackSrc?`: Optional custom fallback image
- `popular?`: Shows popular badge
- `onImageError?`: Error callback

### TemplateGallery
A gallery component that displays all available templates using the template image system.

### ImageWithFallback (UI Component)
A robust image component that handles loading states and fallback images:
- Loading animations
- Automatic fallback on error
- Support for Next.js Image optimization
- Configurable error handling

## Utilities

### templateImages.ts
Central configuration for template images:
- `TEMPLATE_IMAGES`: Configuration object for all templates
- `getTemplateImage()`: Get image config by template ID
- `getAllTemplateImages()`: Get all available templates
- `hasCustomPreview()`: Check if template has custom preview
- `getImageFallbackChain()`: Generate fallback chain
- `preloadTemplateImages()`: Preload images for performance

### useTemplateImages Hook
React hook for managing template image loading:
- Preloading capabilities
- Loading state management
- Error tracking and retry mechanisms
- Image status tracking

## Template Preview Images

Located in `public/templates/`:
- `modern-preview.svg` - Modern template preview
- `professional-preview.svg` - Professional template preview
- `creative-preview.svg` - Creative template preview
- `minimal-preview.svg` - Minimal template preview
- `tech-preview.svg` - Tech template preview
- `executive-preview.svg` - Executive template preview
- `default-preview.svg` - Default fallback image

## Usage Examples

### Basic Template Card
```tsx
import TemplateCard from './TemplateCard';

<TemplateCard
  id="modern"
  title="Modern Template"
  description="Clean and modern design"
  popular={true}
/>
```

### Template Gallery
```tsx
import TemplateGallery from './TemplateGallery';

<TemplateGallery
  onTemplateSelect={(id) => console.log('Selected:', id)}
  onImageError={(id, error) => console.error('Error:', id, error)}
/>
```

### Custom Image with Fallback
```tsx
import ImageWithFallback from '../ui/ImageWithFallback';

<ImageWithFallback
  src="/custom-template.jpg"
  fallbackSrc="/templates/default-preview.svg"
  alt="Custom template"
  width={400}
  height={300}
  onError={(error) => console.error('Image failed:', error)}
/>
```

### Using the Template Images Hook
```tsx
import { useTemplateImages } from '../../hooks/useTemplateImages';

function MyComponent() {
  const {
    loading,
    error,
    preloadImages,
    getImageStatus,
    retryFailedImages
  } = useTemplateImages({
    preload: true,
    templateIds: ['modern', 'professional', 'creative']
  });

  // Component logic...
}
```

## Error Handling

The system provides multiple levels of error handling:

1. **Image Level**: Individual images fall back to configured fallback
2. **Template Level**: Templates fall back to default preview
3. **System Level**: Default preview as final fallback
4. **User Feedback**: Visual indicators for failed images

## Performance Considerations

- SVG images for fast loading and scalability
- Image preloading for popular templates
- Lazy loading support through Next.js Image
- Optimized fallback chains to minimize requests

## Accessibility

- Proper alt text for all images
- Loading states with appropriate ARIA labels
- Keyboard navigation support
- High contrast support in template previews

## Testing

Tests are included for:
- TemplateCard component functionality
- ImageWithFallback error handling
- Template image utilities
- Hook behavior and state management

Run tests with:
```bash
npm test -- --testPathPattern=templates
```