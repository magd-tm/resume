/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/resume-mag' : '',
  assetPrefix: isProd ? '/resume-mag/' : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
