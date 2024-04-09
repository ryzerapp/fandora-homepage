export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://ryzer.app/sitemap.xml',
    }
  }