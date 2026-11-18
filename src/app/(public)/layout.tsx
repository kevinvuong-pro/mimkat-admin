'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { getAccessToken } from '@/lib/auth-token-storage';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      router.replace('/');
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsCheckingAuth(false); // Auth is stored in browser-only storage, so this effect completes client initialization.
  }, [router]);

  if (isCheckingAuth) return null;

  return children;
}
