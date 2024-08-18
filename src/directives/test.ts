import type { DirectiveBinding } from 'vue';

export default {
    created(el: HTMLElement, context: DirectiveBinding<any>) {
        if (typeof process === 'undefined' || !process.env.VITEST) {
            return;
        }

        el.setAttribute('data-testid', context.arg!);
    },
};
