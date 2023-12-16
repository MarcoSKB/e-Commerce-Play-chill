/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.rawg.io",
      "i1.wp.com",
      "9to5toys.com",
      "www.cdprojekt.com",
      "steamuserimages-a.akamaihd.net",
      "media.rockstargames.com",
      "i.pinimg.com",
      "lh3.googleusercontent.com",
    ],
  },
  env: {
    NEXT_PUBLIC_RAWG_API_KEY: process.env.NEXT_PUBLIC_RAWG_API_KEY,
  },
};

module.exports = nextConfig;
