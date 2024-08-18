import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
    test: {
        environment: 'jsdom',
        reporters: ['html'],
        coverage: {
            enabled: true,
            exclude: ['node_modules', '.nuxt', 'dist', 'html'],
        },
    },
});
