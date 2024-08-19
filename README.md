# Alpende

This is an opinionated starting point for full-stack, type-safe Nuxt apps.

## 🚀 Getting started

There are two ways to get started with this template:

-   [Use this template](https://github.com/new?template_name=alpende&template_owner=jakezneal) to create a new project
-   Initialise a new Nuxt project with this template:

```bash
pnpm dlx nuxi@latest init -t https://codeload.github.com/jakezneal/alpende/tar.gz/refs/heads/main <project-name>
```

## 🔄 Updating

This template contains a GitHub Action that will periodically check for updates in this template and create a PR in your repository if there are any updates.

If you want to ignore specific files or folders from being updated, you can create a `.github/.templatesyncignore` file, which is similar to `.gitignore`. I'd recommend ignoring the GitHub workflows folder as this will cause issues with the GitHub Action.

You can update the frequency of the GitHub Action by updating `.github/workflows/template_sync.yml`, or removing it completely if you don't want to keep up to date with this template.

## ✨ Features

-   ⛰️ [Nuxt](https://nuxt.com/)
-   🅿️ [Prettier](https://prettier.io/)
-   ⚙️ [T3 Env](https://env.t3.gg/) — Type-safe environment variables
-   🧪 Testing
    -   [Vitest](https://vitest.dev/)
    -   [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/)
    -   [Testing Library Selector](https://github.com/domasx2/testing-library-selector/)
    -   [Vue Test Utils](https://vue-test-utils.vuejs.org/)
    -   [Nuxt Test Utils](https://nuxt.com/docs/getting-started/testing)
-   📖 [Storybook](https://storybook.js.org/)
-   🍃 [Tailwind CSS](https://tailwindcss.com/)
-   🍍 [Pinia](https://pinia.vuejs.org/)

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
