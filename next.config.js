/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-GB", "sv-SE", "it-IT"],
    defaultLocale: "en-GB"
  }
};

module.exports = nextConfig;
