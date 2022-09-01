/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  env: {
    REACT_APP_1: process.env.REACT_APP_1,
    REACT_APP_2: process.env.REACT_APP_2,
  },
};

module.exports = nextConfig;
