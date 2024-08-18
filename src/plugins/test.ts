import test from '~~/src/directives/test';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('test', test);
});
