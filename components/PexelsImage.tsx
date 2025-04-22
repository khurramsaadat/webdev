'use client';

import Image from 'next/image';
import { CSSProperties } from 'react';

type ImageVariant = 'hero' | 'card' | 'grid2' | 'grid4';

interface PexelsImageProps {
  src: string;
  alt: string;
  variant: ImageVariant;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}

const getImageDimensions = (variant: ImageVariant): { width: number; height: number } => {
  switch (variant) {
    case 'hero':
      return { width: 1920, height: 1080 }; // 16:9 aspect ratio for hero images
    case 'card':
      return { width: 800, height: 600 }; // 4:3 aspect ratio for cards
    case 'grid2':
      return { width: 960, height: 720 }; // 4:3 aspect ratio for 2-column grid
    case 'grid4':
      return { width: 480, height: 360 }; // 4:3 aspect ratio for 4-column grid
    default:
      return { width: 1920, height: 1080 };
  }
};

const getSizes = (variant: ImageVariant): string => {
  switch (variant) {
    case 'hero':
      return '100vw'; // Full width header images
    case 'card':
      return '(min-width: 768px) 50vw, 100vw'; // 2-column layout images
    case 'grid2':
      return '(min-width: 768px) 50vw, 100vw'; // 2-column grid images
    case 'grid4':
      return '(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw'; // 4-column grid images
    default:
      return '100vw';
  }
};

const PexelsImage = ({ 
  src, 
  alt, 
  variant, 
  priority = false, 
  className = '', 
  style 
}: PexelsImageProps) => {
  const { width, height } = getImageDimensions(variant);
  const defaultStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    ...style
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={getSizes(variant)}
      priority={priority}
      className={`object-cover ${className}`}
      style={defaultStyle}
    />
  );
};

export default PexelsImage; 