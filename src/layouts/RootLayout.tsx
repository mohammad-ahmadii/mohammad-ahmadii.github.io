import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loading from '../shared/ui/Loading';
import Navbar from './components/Navbar';
import { useScrollToHash } from './hooks/useScrollToHash';
import Footer from './components/Footer';

export default function RootLayout() {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-bg bg-grid text-ink font-body selection:bg-signal">
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
