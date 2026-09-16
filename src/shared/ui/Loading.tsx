import { asset } from '../lib/asset';

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="max-w-6xl mx-auto flex items-center justify-center gap-4 py-24"
    >
      <img src={asset('assets/images/spinner.gif')} alt="" width="40" height="40" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
