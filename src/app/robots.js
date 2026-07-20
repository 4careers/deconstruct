export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://thedeconstruct.netlify.app/sitemap.xml',
  }
}
