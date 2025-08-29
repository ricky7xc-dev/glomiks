import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave empty if no specific port
        pathname: "/**", // Match all paths
      },
    ],
  },
};

export default nextConfig;
