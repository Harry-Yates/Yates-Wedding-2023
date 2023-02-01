/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-GB", "sv-SE", "it-IT"],
    defaultLocale: "en-GB"
  }
};

module.exports = nextConfig;
