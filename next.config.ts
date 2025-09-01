import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/naufal-portofolio',  // your repo name
  trailingSlash: true,   
};

module.exports = nextConfig;
