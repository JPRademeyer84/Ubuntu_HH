/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Assuming no changes, you can adjust this as needed
      },
    ];
  },
};

module.exports = nextConfig;
