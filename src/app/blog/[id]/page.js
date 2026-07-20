import Navbar from '../../../components/Navbar';
import { getArticleById, getSavedContent } from '../../../lib/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import AdUnit from '../../../components/AdUnit';


export const dynamic = 'force-dynamic';

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  const article = getArticleById(resolvedParams.id);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
          <h2>Article not found</h2>
          <Link href="/blog" style={{ color: 'var(--accent-primary)' }}>Return to Blog</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="content-container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <Link href="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', width: 'fit-content' }}>
          <ArrowLeft size={16} /> Back to Articles
        </Link>
        
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="text-gradient" style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>{article.category}</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ color: 'var(--text-secondary)' }}>{article.date}</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '2rem' }}>{article.title}</h1>
          
          {article.imageUrl && (
            <div style={{ width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem', boxShadow: 'var(--glass-shadow)' }}>
              <img src={article.imageUrl} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
        </header>

        {/* Top Ad Unit */}
        <AdUnit format="horizontal" id="blog-top-ad" />

        {/* Affiliate / Ad Injector */}
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '3rem', borderLeft: '4px solid var(--accent-primary)' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>Support Deconstruct:</strong> If you find value in these deep dives, consider checking out <a href="https://amazon.com/Daily-Stoic-366-Meditations-Perseverance/dp/0735211736/?tag=deconstruct-21" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>The Daily Stoic</a> or exploring our recommended <a href="https://www.amazon.com/s?k=minimalist+desk+accessories&tag=deconstruct-21" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>Minimalist Workspace Gear</a>.
          </p>
        </div>

        <article className="markdown-body" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          <ReactMarkdown 
            components={{
              a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '4rem 0 2rem' }} />
        
        {/* Bottom Ad Unit */}
        <AdUnit format="horizontal" id="blog-bottom-ad" />

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Watch the Full Video</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--glass-shadow)' }}>
            <iframe 
              src={`https://www.youtube.com/embed/${article.videoId}`} 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title={article.title}
            ></iframe>
          </div>
        </div>
      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        .markdown-body h2 { font-size: 2rem; margin-top: 3rem; margin-bottom: 1rem; color: var(--text-primary); }
        .markdown-body h3 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--text-primary); }
        .markdown-body p { margin-bottom: 1.5rem; color: var(--text-secondary); }
        .markdown-body blockquote { border-left: 4px solid var(--accent-secondary); padding-left: 1.5rem; margin-left: 0; font-style: italic; color: var(--text-primary); }
        .markdown-body ul, .markdown-body ol { margin-bottom: 1.5rem; padding-left: 1.5rem; color: var(--text-secondary); }
        .markdown-body li { margin-bottom: 0.5rem; }
        .markdown-body strong { color: var(--text-primary); }
        .markdown-body a { color: var(--accent-primary); text-decoration: underline; text-underline-offset: 4px; font-weight: 500; transition: color 0.2s ease; }
        .markdown-body a:hover { color: var(--accent-secondary); }
      `}} />
    </>
  );
}
