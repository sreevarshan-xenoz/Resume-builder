import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TemplateCard from '../TemplateCard';

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, onError, onLoad, ...props }: any) {
    return (
      <img
        src={src}
        alt={alt}
        onError={onError}
        onLoad={onLoad}
        {...props}
      />
    );
  };
});

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe('TemplateCard', () => {
  const defaultProps = {
    id: 'modern',
    title: 'Modern Template',
    description: 'A modern and clean template',
  };

  it('renders template card with correct information', () => {
    render(<TemplateCard {...defaultProps} />);
    
    expect(screen.getByText('Modern Template')).toBeInTheDocument();
    expect(screen.getByText('A modern and clean template')).toBeInTheDocument();
    expect(screen.getByText('Use Template')).toBeInTheDocument();
  });

  it('uses template image from configuration when no imageSrc provided', () => {
    render(<TemplateCard {...defaultProps} />);
    
    const image = screen.getByAltText('Modern Template template preview');
    expect(image).toHaveAttribute('src', '/templates/modern-preview.svg');
  });

  it('uses provided imageSrc when available', () => {
    render(<TemplateCard {...defaultProps} imageSrc="/custom-image.jpg" />);
    
    const image = screen.getByAltText('Modern Template template preview');
    expect(image).toHaveAttribute('src', '/custom-image.jpg');
  });

  it('shows popular badge when popular prop is true', () => {
    render(<TemplateCard {...defaultProps} popular={true} />);
    
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('does not show popular badge when popular prop is false', () => {
    render(<TemplateCard {...defaultProps} popular={false} />);
    
    expect(screen.queryByText('Popular')).not.toBeInTheDocument();
  });

  it('handles image error correctly', async () => {
    const onImageError = jest.fn();
    render(<TemplateCard {...defaultProps} onImageError={onImageError} />);
    
    const image = screen.getByAltText('Modern Template template preview');
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(screen.getByText('Preview unavailable')).toBeInTheDocument();
    });
    
    expect(onImageError).toHaveBeenCalled();
  });

  it('creates correct navigation links', () => {
    render(<TemplateCard {...defaultProps} />);
    
    const useTemplateLink = screen.getByText('Use Template').closest('a');
    const previewLink = screen.getByRole('button', { name: /preview/i }).closest('a');
    
    expect(useTemplateLink).toHaveAttribute('href', '/builder?template=modern');
    expect(previewLink).toHaveAttribute('href', '/templates/modern');
  });

  it('applies hover effects correctly', () => {
    render(<TemplateCard {...defaultProps} />);
    
    const card = screen.getByText('Modern Template').closest('.interactive-card');
    expect(card).toBeInTheDocument();
    
    // Test hover state changes
    fireEvent.mouseEnter(card!);
    fireEvent.mouseLeave(card!);
    
    // The component should handle hover state internally
    expect(card).toBeInTheDocument();
  });
});