const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/blog/website-updates/:path",
        destination: "/blog/development/:path",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
