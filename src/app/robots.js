export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://thedeconstruct.vercel.app/sitemap.xml',
  }
}
