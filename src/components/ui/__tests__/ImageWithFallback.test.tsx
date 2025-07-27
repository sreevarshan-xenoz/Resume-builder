import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ImageWithFallback from '../ImageWithFallback';

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

describe('ImageWithFallback', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    width: 400,
    height: 300,
  };

  it('renders image with correct src and alt', () => {
    render(<ImageWithFallback {...defaultProps} />);
    
    const image = screen.getByAltText('Test image');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('shows loading state initially', () => {
    render(<ImageWithFallback {...defaultProps} />);
    
    expect(screen.getByRole('img')).toHaveClass('opacity-0');
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('switches to fallback image on error', async () => {
    const onError = jest.fn();
    render(
      <ImageWithFallback 
        {...defaultProps} 
        fallbackSrc="/fallback.jpg"
        onError={onError}
      />
    );
    
    const image = screen.getByAltText('Test image');
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(image).toHaveAttribute('src', '/fallback.jpg');
    });
  });

  it('calls onLoad when image loads successfully', async () => {
    const onLoad = jest.fn();
    render(<ImageWithFallback {...defaultProps} onLoad={onLoad} />);
    
    const image = screen.getByAltText('Test image');
    fireEvent.load(image);
    
    await waitFor(() => {
      expect(onLoad).toHaveBeenCalled();
      expect(image).toHaveClass('opacity-100');
    });
  });

  it('calls onError when fallback also fails', async () => {
    const onError = jest.fn();
    render(
      <ImageWithFallback 
        {...defaultProps} 
        fallbackSrc="/fallback.jpg"
        onError={onError}
      />
    );
    
    const image = screen.getByAltText('Test image');
    
    // First error - should switch to fallback
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(image).toHaveAttribute('src', '/fallback.jpg');
    });
    
    // Second error - should call onError
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(onError).toHaveBeenCalled();
    });
  });

  it('renders with fill prop correctly', () => {
    render(<ImageWithFallback {...defaultProps} fill />);
    
    const container = screen.getByAltText('Test image').parentElement;
    expect(container).toHaveClass('relative', 'w-full', 'h-full');
  });

  it('throws error when width/height not provided without fill', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<ImageWithFallback src="/test.jpg" alt="Test" />);
    }).toThrow('ImageWithFallback requires width and height when fill is false');
    
    consoleSpy.mockRestore();
  });

  it('uses default fallback when none provided', async () => {
    render(<ImageWithFallback {...defaultProps} />);
    
    const image = screen.getByAltText('Test image');
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(image).toHaveAttribute('src', '/templates/default-preview.svg');
    });
  });
});