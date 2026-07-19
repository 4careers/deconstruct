"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      position: 'sticky', 
      top: '1rem', 
      zIndex: 50,
      margin: '1rem auto',
      maxWidth: '800px'
    }} className="glass-panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
        <Link href="/">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '32px', height: '32px',
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              borderRadius: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: '900', fontSize: '1.2rem', fontFamily: 'Outfit'
            }}>D</div>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'Outfit' }}>Deconstruct</span>
          </div>
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/blog" style={{ color: 'var(--text-secondary)', fontWeight: 500 }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Articles</Link>
          <Link href="/store" style={{ color: 'var(--text-secondary)', fontWeight: 500 }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Store</Link>
          <a href="https://youtube.com/@DeconstructOfficial" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontWeight: 500 }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>YouTube</a>
          <a href="https://youtube.com/@DeconstructOfficial?sub_confirmation=1" target="_blank" rel="noreferrer">
            <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', cursor: 'pointer' }}>Subscribe</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
