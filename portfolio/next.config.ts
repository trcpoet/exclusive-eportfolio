import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "cdn.iconscout.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/classic",
        destination: "/classic/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
