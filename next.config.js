/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "static.wikia.nocookie.net",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
