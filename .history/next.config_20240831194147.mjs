const nextConfig = {
    // Your existing config options
    swcMinify: true, // or false if you're not using SWC minification
    compiler: {
      react: {
        throwIfNamespace: false,
      },
    },
  };
  
  module.exports = nextConfig;
  