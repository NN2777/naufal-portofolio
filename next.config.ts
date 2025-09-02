import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  basePath: "/naufal-portofolio",     // 👈 repo name
  assetPrefix: "/naufal-portofolio", // 👈 needed for static files
  trailingSlash: true,

}

export default nextConfig;