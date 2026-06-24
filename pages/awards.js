import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Awards() {
  const router = useRouter();
  useEffect(() => { router.replace('/studios'); }, [router]);
  return null;
}
