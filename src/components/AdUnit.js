export default function AdUnit({ format = 'horizontal', id = 'ad-slot-1' }) {
  // Placeholder for Google AdSense or similar display ads
  // You would replace this with actual AdSense <ins> tags and push ad scripts later.
  
  const styles = {
    horizontal: {
      width: '100%',
      minHeight: '120px',
      margin: '2rem 0',
    },
    vertical: {
      width: '100%',
      minHeight: '600px',
      margin: '0 0 2rem 0',
    },
    square: {
      width: '100%',
      aspectRatio: '1 / 1',
      minHeight: '250px',
      margin: '0 0 2rem 0',
    },
    'small-banner': {
      width: '100%',
      minHeight: '60px',
      margin: '1.5rem 0',
    }
  };

  const adStyle = styles[format] || styles.horizontal;

  return (
    <div 
      id={id}
      style={{
        ...adStyle,
        background: 'var(--bg-tertiary)',
        border: '1px dashed var(--glass-border)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}
    >
      <span style={{ marginBottom: '0.5rem' }}>Advertisement Space</span>
      <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>Ready for Google AdSense</span>
    </div>
  );
}
