import Navbar from '../../components/Navbar';
import { getAllAffiliateProducts } from '../../lib/data';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function StorePage() {
  const products = await getAllAffiliateProducts();

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            The <span className="text-gradient">Store</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            A curated collection of every book, tool, and piece of gear we've recommended across our videos and deep dives.
          </p>
        </header>

        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
            <h2 style={{ color: 'var(--text-secondary)' }}>No products found yet.</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Check back later as we publish more content!</p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {products.map((product, index) => (
              <a 
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel store-card"
              >
                {/* Abstract Book/Product Cover or Real Cover */}
                <div style={{ 
                  height: '240px', 
                  width: '100%', 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                  borderBottom: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {product.coverUrl ? (
                    <img 
                      src={product.coverUrl} 
                      alt={product.title} 
                      style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <>
                      {/* Subtle decorative elements for the glass cover fallback */}
                      <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'conic-gradient(from 0deg at 50% 50%, rgba(59, 130, 246, 0.2) 0deg, rgba(236, 72, 153, 0) 60deg, rgba(59, 130, 246, 0.2) 360deg)',
                        animation: 'spin 10s linear infinite',
                        opacity: 0.5
                      }} />
                      <div style={{
                        width: '60px',
                        height: '80px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)' }}>📖</span>
                      </div>
                    </>
                  )}
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: 1.3, flexGrow: 1 }}>
                    {product.title.replace(' by ', ' - ')}
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Spotted in: <br/>
                      <span style={{ color: 'var(--accent-primary)' }}>{product.sourceArticle.title}</span>
                    </div>
                    <div className="btn-primary" style={{ padding: '0.6rem', textAlign: 'center', fontSize: '0.9rem', width: '100%' }}>
                      View on Amazon
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .store-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .store-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--glass-shadow), 0 0 20px rgba(59, 130, 246, 0.2);
        }
      `}} />
    </>
  );
}
