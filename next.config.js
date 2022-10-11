/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // The locales you want to support in your app
    locales: ["ar", "en", "fr", "nl-NL"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
