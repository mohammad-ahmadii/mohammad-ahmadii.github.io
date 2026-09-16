import { useEffect } from 'react';

export interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

/**
 * Full-screen image preview.
 *
 * The body scroll-lock lives here (in an effect with cleanup) rather than in
 * the open/close handlers, so the lock can never be left behind if the owner
 * unmounts while the lightbox is open.
 */
export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="fixed top-1 right-2 text-white text-4xl hover:text-gray-300 transition-colors"
      >
        ×
      </button>
      <div
        className="relative max-w-5xl max-h-[90vh] p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
