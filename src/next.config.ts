/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SECRET_KEY: new TextEncoder().encode(process.env.SECRET_KEY),
  },
};

module.exports = nextConfig;
