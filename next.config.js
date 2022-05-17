const domain = "randy.ml";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    localeDetection: true,
    domains: [
      {
        domain: "en." + domain,
        defaultLocale: "en",
      },
      {
        domain: domain,
        defaultLocale: "es",
      },
    ],
  },
};

module.exports = nextConfig;
