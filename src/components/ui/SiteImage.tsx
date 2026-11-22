/* eslint-disable @next/next/no-img-element */
interface SiteImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Plain <img> wrapper (the site uses `output: 'export'` with unoptimized images).
 * To use a real photo instead of the bundled illustration, drop a file into
 * /public/images/ and point `src` at it.
 */
export default function SiteImage({ src, alt, className = '', priority = false }: SiteImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  );
}
