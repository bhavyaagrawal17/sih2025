import { useState } from 'react';

export function ImageWithFallback({ src, alt, className }) {
  const [error, setError] = useState(false);

  return (
    <img
      src={
        error
          ? "https://via.placeholder.com/600x400?text=Image+Not+Available"
          : src
      }
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
