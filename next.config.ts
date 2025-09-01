import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 enables static export
  images: {
    unoptimized: true, // 👈 disable Next.js image optimization for GitHub Pages
  },
  basePath: '/naufal-portofolio', // 👈 replace with your GitHub repo name
};

export default nextConfig;
