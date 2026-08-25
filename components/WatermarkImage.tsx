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
  loading?: 'eager' | 'lazy';
  watermarkSize?: number;
  watermarkPosition?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'center';
  watermarkStyle?: 'corner' | 'seal';
}

export default function WatermarkImage({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  fill = false,
  loading,
  watermarkSize = 80,
  watermarkPosition = 'bottom-right',
  watermarkStyle = 'corner',
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
        loading={loading}
        className={fill ? 'object-cover object-center' : 'w-full h-auto object-cover'}
      />
      
      {watermarkStyle === 'corner' ? (
        <div className={`pointer-events-none absolute ${positionClasses[watermarkPosition]} opacity-30 z-10`}>
          <Image
            src="/logo.JPG"
            alt="Lavan Solar Systems"
            width={watermarkSize}
            height={Math.round(watermarkSize * 0.4)}
            className="object-contain"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      ) : (
        <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-10">
          <div className="border-4 border-white/30 rounded-full p-4">
            <Image
              src="/logo.JPG"
              alt="Lavan Solar Systems"
              width={watermarkSize * 1.5}
              height={Math.round(watermarkSize * 0.6)}
              className="object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}