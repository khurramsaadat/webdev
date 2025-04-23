import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type ImageVariant = 'hero' | 'project' | 'testimonial' | 'background' | 'team' | 'client';

interface OptimizedImageProps {
  src: string;
  alt: string;
  variant: ImageVariant;
  priority?: boolean;
  className?: string;
}

const variantConfig = {
  hero: {
    width: 1920,
    height: 1080,
    className: 'object-cover',
    sizes: '100vw',
  },
  project: {
    width: 800,
    height: 600,
    className: 'object-cover',
    sizes: '(max-width: 768px) 100vw, 50vw',
  },
  testimonial: {
    width: 64,
    height: 64,
    className: 'object-cover rounded-full',
    sizes: '64px',
  },
  background: {
    width: 1920,
    height: 1080,
    className: 'object-cover',
    sizes: '100vw',
  },
  team: {
    width: 400,
    height: 400,
    className: 'object-cover rounded-lg',
    sizes: '(max-width: 768px) 100vw, 400px',
  },
  client: {
    width: 80,
    height: 80,
    className: 'object-contain',
    sizes: '80px',
  },
};

const OptimizedImage = ({ src, alt, variant, priority = false, className }: OptimizedImageProps) => {
  const config = variantConfig[variant];

  return (
    <Image
      src={src}
      alt={alt}
      width={config.width}
      height={config.height}
      className={twMerge(config.className, className)}
      sizes={config.sizes}
      priority={priority}
      quality={90}
    />
  );
};

export default OptimizedImage; 