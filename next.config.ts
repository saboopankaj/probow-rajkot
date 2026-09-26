import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/menu.html", destination: "/menu", permanent: true },
      {
        source: "/contact_us.html",
        destination: "/contact_us",
        permanent: true,
      },
      {
        source: "/healthy-food-rajkot.html",
        destination: "/healthy-food-rajkot",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
