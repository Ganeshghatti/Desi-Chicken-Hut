// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Add font optimization if necessary
    experimental: {
        optimizeFonts: true,

    },
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
};

export default nextConfig;
