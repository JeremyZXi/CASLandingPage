
const sitemap = require('sitemap');
const hostname = 'https://www.keycas.cn';

const urls = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/casguide', changefreq: 'monthly', priority: 0.8 },
    { url: '/editor', changefreq: 'monthly', priority: 0.8 },
    // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
    hostname,
    urls,
});


const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
