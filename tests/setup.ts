import { config, createWrapperError, DOMWrapper, type VueWrapper } from '@vue/test-utils';
import test from '~~/src/directives/test';

// Add test directives to global config.
config.global.directives = {
    test,
};

export interface TestWrapper extends VueWrapper {
    findByTestId: (id: string) => DOMWrapper<Element>;
    findAllByTestId: (id: string) => DOMWrapper<Element>[];
    findComponentByTestId: (component: string, id: string) => object;
}

// Set up test helpers.
const addTestIdHelpers = (wrapper: VueWrapper<any>) => {
    const selector = (id: string) => `[data-testid="${id}"]`;

    const findByTestId = (id: string) => wrapper.find(selector(id));

    const findAllByTestId = (id: string) => wrapper.findAll(selector(id));

    const findComponentByTestId = (component: string, id: string) =>
        wrapper.findAllComponents(component)?.find((w) => w.attributes('data-testid') === id) ||
        createWrapperError('DOMWrapper');

    return {
        findByTestId,
        findAllByTestId,
        findComponentByTestId,
    };
};

config.plugins.VueWrapper.install(addTestIdHelpers as any);
