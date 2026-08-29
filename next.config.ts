import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/ideas",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/ideas/:slug",
        permanent: true,
      },
      {
        source: "/teaching",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/consulting",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/speaking",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/builds/logicsims",
        destination: "/logicsims",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
