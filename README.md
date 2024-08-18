# Alpende

This is an opinionated starting point for full-stack, type-safe Nuxt apps.

## ✨ Features

-   ⛰️ [Nuxt](https://nuxt.com/)
-   ⚙️ [T3 Env](https://env.t3.gg/) — Type-safe environment variables
-   🧪 Testing
    -   [Vitest](https://vitest.dev/)
    -   [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/)
    -   [Vue Test Utils](https://vue-test-utils.vuejs.org/)
    -   [Nuxt Test Utils](https://nuxt.com/docs/getting-started/testing)

## 🧪 Testing

This template adds a `v-test` directive to make it easier to target elements in your unit tests, and to encourage targeting elements with testIds, which improves the resilience of our tests. For further reading, check out this [article by Kent C. Dodds](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change).

You can use the `v-test` directive in the following way:

```vue
<ul>
    <li>Some item I don't want to test</li>
    <li v-test:testableListItem>My testable element</li>
    <li>Another item I don't want to test</li>
</ul>
```
