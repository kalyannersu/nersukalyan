const SitemapGenerator = require('sitemap-generator');

// Create generator
const generator = SitemapGenerator('https://nersukalyan.vercel.app', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml'
});

// Register event listeners
generator.on('done', () => {
  console.log('Sitemap generated!');
});

// Start the crawler
generator.start();
