import Navbar from '../../components/Navbar';
import ArticleCard from '../../components/ArticleCard';
import { getSavedContent } from '../../lib/data';

export const dynamic = 'force-dynamic';

export default function BlogIndex() {
  const articles = getSavedContent();

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>All <span className="text-gradient">Articles</span></h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Explore our archives of philosophy, critical thinking, and actionable insights.
        </p>
        
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
      </main>
    </>
  );
}
