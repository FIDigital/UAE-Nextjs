/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
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
