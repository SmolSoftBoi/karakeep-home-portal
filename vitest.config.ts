import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        lines: 90,
        branches: 90,
        statements: 90,
        functions: 90,
      },
      exclude: [
        '**/layout.tsx',
        '**/page.tsx',
        'next.config.ts',
        'postcss.config.mjs',
        '.eslintrc.cjs',
        '.pnp.cjs',
        '.pnp.loader.mjs',
      ],
    },
  },
});
