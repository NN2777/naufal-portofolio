import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',  // your repo name
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, // 👈 disables lint errors in build
  },
}

exports = nextConfig;
