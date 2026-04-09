import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/delete_account.html",
        destination: "/data-deletion",
      },
    ];
  },
};

export default nextConfig;
