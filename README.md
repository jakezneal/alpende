# Alpende

This is an opinionated starting point for full-stack, type-safe Nuxt apps.

## ✨ Features

-   ⛰️ [Nuxt](https://nuxt.com/)
-   🅿️ [Prettier](https://prettier.io/)
-   ⚙️ [T3 Env](https://env.t3.gg/) — Type-safe environment variables
-   🧪 Testing
    -   [Vitest](https://vitest.dev/)
    -   [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/)
    -   [Vue Test Utils](https://vue-test-utils.vuejs.org/)
    -   [Nuxt Test Utils](https://nuxt.com/docs/getting-started/testing)
-   📖 [Storybook](https://storybook.js.org/)

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

## 🪄 Component generation

This template includes a CLI for generating components. This outputs a `.vue`, `.spec.ts`, and a `.stories.ts` file for each component in the given path.

Generating a component:

```bash
pnpm make:component <path>
```

e.g.

```bash
pnpm make:component src/components/ui/AppLogo
```

## 🗣️ Commands

### 👷 Build

```bash
pnpm build
```

### 🚀 Dev

```bash
pnpm dev
```

### 🪄 Format

```bash
pnpm format
```

### 🧪 Test

```bash
pnpm test
```

To generate a coverage report:

```bash
pnpm test:coverage
```

To run Vitest UI:

```bash
pnpm test:ui
```

### 📖 Storybook

```bash
pnpm storybook
```
