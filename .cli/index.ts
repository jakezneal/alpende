#!/usr/bin/env node

import { defineCommand, runMain } from 'citty';

const main = defineCommand({
    setup({ rawArgs }: any) {
        if (rawArgs.length) {
            return;
        }
    },

    subCommands: {
        'make:component': () => import('./commands/make-component').then((r) => r.default),
    },
});

runMain(main);
