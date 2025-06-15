const nextConfig = {
  swcMinify: true,
  compiler: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tse4.mm.bing.net',
      },
    ],
  },
};

export default nextConfig;
