import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getSavedContent } from '../lib/data';

export const dynamic = 'force-dynamic';

export default function Home() {
  const articles = getSavedContent();


  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', letterSpacing: '-1px', marginBottom: '1.5rem' }}>
            Think <span className="text-gradient">Differently.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Deconstruct is a digital space dedicated to philosophy, secularism, and critical thinking in an age of noise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/blog">
              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read the Blog <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </section>
        
        {/* Latest Articles */}
        <section className="container" style={{ paddingBottom: '6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>Latest <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Writings</span></h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {articles.length > 0 ? (
              articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                <p style={{ color: 'var(--text-secondary)' }}>No articles found. Generate some in the dashboard!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
