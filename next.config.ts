// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//    images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    unoptimized: true,   // <-- ADD THIS
  },
   experimental: {
    turbo: false,
  },
  i18n: {
    locales: ["en", "fr", "es", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
