/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  resourceHints: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
