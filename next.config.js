/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with your actual domain
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Add a block for each domain you had
      },
    ],
  },
  // Add any other configurations here
};

module.exports = nextConfig;
