import test from '../src/directives/test.ts';
import { createApp } from 'vue';

const app = createApp({});

const directives = {
    test,
};

Object.entries(directives).forEach(([name, directive]) => {
    app.directive(name, directive);
});
