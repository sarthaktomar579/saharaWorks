import { defineConfig } from 'next';

export default defineConfig({
  swcMinify: true, // or false if you're not using SWC minification
  compiler: {
    react: {
      throwIfNamespace: false,
    },
  },
});

  