/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export the app as static HTML/CSS/JS for GitHub Pages.
  output: 'export',
  images: {
    // GitHub Pages does not run the Next.js image optimization server.
    unoptimized: true,
  },
  // Emit routes as /route/index.html for static hosting.
  trailingSlash: true,
};

module.exports = nextConfig;
