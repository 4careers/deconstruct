import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import AdUnit from '../components/AdUnit';
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
        <section className="container" style={{ paddingTop: '3rem', paddingBottom: '2rem', textAlign: 'center' }}>
          <Link href="/blog" className="hero-link" style={{ display: 'inline-block' }}>
            <h1 style={{ fontSize: '3.5rem', letterSpacing: '-1px', margin: '0 0 1rem 0' }}>
              Think <span className="text-gradient">Differently.</span>
            </h1>
          </Link>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Philosophy, secularism, and critical thinking in an age of noise.
          </p>
        </section>

        {/* Homepage Ad Unit */}
        <section className="container" style={{ paddingBottom: '3rem' }}>
          <AdUnit format="horizontal" id="homepage-mid-ad" />
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
