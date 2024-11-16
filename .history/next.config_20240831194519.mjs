// next.config.mjs
export default {
    swcMinify: true, // or false if you're not using SWC minification
    compiler: {
      react: {
        throwIfNamespace: false,
      },
    },
  };
  