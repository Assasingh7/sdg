import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function InteriorDesign() {
  const router = useRouter();
  useEffect(() => { router.replace('/projects'); }, [router]);
  return null;
}
