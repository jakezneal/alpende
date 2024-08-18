import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
    test: {
        environment: 'jsdom',
        reporters: ['html', 'verbose'],
        coverage: {
            enabled: true,
            include: ['**/src/components/**'],
            allowExternal: true,
        },
        setupFiles: ['./tests/setup.ts'],
    },
});
