import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images : {
      domains : [
          "api.microlink.io",
          "cdn.dribbble.com", // Microlink Image Preview,
          "images.unsplash.com",
          "avatar.vercel.sh"
      ]
  }
};

export default nextConfig;
