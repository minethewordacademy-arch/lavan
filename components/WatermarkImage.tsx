import Image from 'next/image';
import React from 'react';

interface WatermarkImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  watermarkSize?: number;
  watermarkPosition?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'center';
}

export default function WatermarkImage({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw', // Default for fill usage
  priority = false,
  fill = false,
  watermarkSize = 80,
  watermarkPosition = 'bottom-right',
}: WatermarkImageProps) {
  const positionClasses = {
    'bottom-left': 'bottom-2 left-2',
    'bottom-right': 'bottom-2 right-2',
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className={`relative ${fill ? 'w-full h-full' : 'inline-block'} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={fill ? 'object-cover object-center' : 'w-full h-auto object-cover'}
      />
      <div className={`pointer-events-none absolute ${positionClasses[watermarkPosition]} opacity-30 z-10`}>
        <Image
          src="/logo.JPG"
          alt="Lavan Solar Systems"
          width={watermarkSize}
          height={Math.round(watermarkSize * 0.4)}
          className="object-contain"
          style={{ width: 'auto', height: 'auto' }} // Fixes aspect ratio warning
        />
      </div>
    </div>
  );
}