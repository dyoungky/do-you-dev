import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/work", destination: "/solutions", permanent: true },
      { source: "/work/:slug", destination: "/solutions/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
