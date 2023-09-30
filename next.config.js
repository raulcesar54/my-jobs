/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  ...withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
  }),
};

module.exports = nextConfig;
