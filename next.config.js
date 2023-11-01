/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.js-craft.io"],
  },
};

module.exports = nextConfig;
