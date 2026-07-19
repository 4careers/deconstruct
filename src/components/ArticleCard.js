"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ArticleCard({ id, title, excerpt, imageUrl, date, category }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass-panel"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Link href={`/blog/${id}`} style={{ display: 'block', flex: 1, textDecoration: 'none' }}>
        {imageUrl ? (
          <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
            <img 
              src={imageUrl} 
              alt={title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
              onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
        ) : (
          <div style={{ width: '100%', height: '200px', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--text-muted)' }}>No Image</span>
          </div>
        )}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="text-gradient" style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{category}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{date}</span>
          </div>
          <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
