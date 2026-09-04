/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    turbopack: {},
    async redirects() {
        return [
            { source: '/contact.html', destination: '/contact', permanent: true },
            { source: '/sales.html', destination: '/sales', permanent: true },
            { source: '/marketing-automation.html', destination: '/marketing-automation', permanent: true },
            { source: '/ai.html', destination: '/ai', permanent: true },
        ];
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'uxwing.com',
            },
            {
                protocol: 'https',
                hostname: 'deepchecks.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'n8n.io',
            },
        ],
    },
};

export default nextConfig;
