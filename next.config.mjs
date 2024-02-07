/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.globalsuzuki.com',
                port: '',
                pathname: '/automobile/**',
              },
        ]
    }
};

export default nextConfig;
