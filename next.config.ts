import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // ضع خياراتك التجريبية هنا إذا كانت هناك
  },
  basePath: '/my-project-name', // استبدل '/my-project-name' باسم المشروع الذي ستنشره
  images: {
    loader: 'default',
    path: '/my-project-name/', // المسار الأساسي للصور
  },
};

export default nextConfig;
