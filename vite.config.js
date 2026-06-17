import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  base: '/fem-social-links-profile/',
  publicDir: true,
  root: './',
  build: {
    outDir: 'dist'
  },
  plugins: [
    eslint({
      cache: false,
      fix: true
    })
  ]
});
