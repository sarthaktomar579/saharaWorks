// next.config.mjs
const nextConfig = {
  swcMinify: true,
  compiler: {},
  images: {
    domains: ['tse4.mm.bing.net'], // ✅ Add allowed image domain here
  },
};

export default nextConfig;
