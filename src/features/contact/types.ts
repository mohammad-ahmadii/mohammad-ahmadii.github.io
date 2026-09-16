import type { RemixiconReactIconComponentType } from 'remixicon-react/dist/typings';

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  /** null renders as plain text rather than a link (e.g. location). */
  href: string | null;
  /**
   * Typed as the library's own component type. A hand-written
   * ComponentType<{ size?: number }> looks equivalent but is not: the icons
   * accept `size` as string | number, so the narrower version fails to match.
   */
  icon: RemixiconReactIconComponentType;
  external: boolean;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
