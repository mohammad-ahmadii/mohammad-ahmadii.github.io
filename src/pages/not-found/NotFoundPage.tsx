import { Link } from 'react-router-dom';

import { ROUTES } from '../../shared/config/routes';

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-signal mb-4">
          ERR. 404 — PAGE NOT FOUND
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-ink mb-4">
          This page is off the blueprint.
        </h1>
        <p className="text-inkMuted leading-relaxed mb-8">
          The address you followed does not match any section of this site.
        </p>
        <Link
          to={ROUTES.home}
          className="inline-block px-5 py-2.5 bg-signal text-bg font-mono text-xs tracking-wider hover:bg-ink transition-colors"
        >
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}
