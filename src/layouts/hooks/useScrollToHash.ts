import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Keeps in-page anchors working under the router.
 *
 * The browser only auto-scrolls to #hash on a real document load. With
 * client-side routing, "/#skills" arrives as a location change, so scrolling
 * has to be done manually once the target section is in the DOM.
 */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    // rAF gives the newly routed page a frame to render before we look it up.
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}
