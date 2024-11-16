// next.config.mjs
export default {
    swcMinify: true,
    compiler: {
      react: {
        throwIfNamespace: false,
      },
    },
  };