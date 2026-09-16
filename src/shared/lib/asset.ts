/**
 * Builds a URL for a file in /public that is correct under any deploy base.
 *
 * Previously asset paths were hardcoded as '/assets/...',
 * which breaks on localhost and on any other base path. Vite injects the
 * configured base as import.meta.env.BASE_URL, so derive it from there.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
