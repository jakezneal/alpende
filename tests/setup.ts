import { config, createWrapperError, DOMWrapper, type VueWrapper } from '@vue/test-utils';
import { beforeAll } from 'vitest';
import { render as testingLibraryRender } from '@testing-library/vue';
import { setProjectAnnotations } from '@storybook/vue3';
import * as previewAnnotations from '../.storybook/preview';

import test from '~~/src/directives/test';

const annotations = setProjectAnnotations([
    previewAnnotations,
    {
        testingLibraryRender,
    },
]);

beforeAll(annotations.beforeAll!);

// Add test directives to global config.
config.global.directives = {
    test,
};
