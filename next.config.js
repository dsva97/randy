/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    localeDetection: false,
  },
  trailingSlash: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
