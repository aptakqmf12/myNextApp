/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "blog.kakaocdn.net" },
    ],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*/",
        destination: "http://dev-api.riskzero.ai/:path*/",
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;
