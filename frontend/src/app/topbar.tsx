'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Topbar() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('Topbar module loaded');
    return () => {
      console.log('Topbar module unloaded');
    };
  }, []);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const linkStyle = (href: string) => ({
    margin: '0 10px',
    padding: '6px 8px',
    borderRadius: '4px',
    backgroundColor: isActive(href) ? '#cfe8ff' : 'transparent',
    color: isActive(href) ? '#003366' : 'inherit',
    textDecoration: 'none'
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <div>
        <Link href="/" style={linkStyle('/')}>Home</Link>
        <Link href="/retail-space" style={linkStyle('/retail-space')}>Retail Space</Link>
        <Link href="/contact" style={linkStyle('/contact')}>Contact</Link>
      </div>
      <div>
        <Link href="/login" style={linkStyle('/login')}>Login</Link>
      </div>
    </div>
  );
}