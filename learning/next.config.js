/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      }
    ]
  },
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
