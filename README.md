# Alpende

This is an opinionated starting point for full-stack, type-safe Nuxt apps.

## ✨ Features

-   ⛰️ [Nuxt](https://nuxt.com/)
-   ⚙️ [T3 Env](https://env.t3.gg/) — Type-safe environment variables
-   🧪 [Vitest](https://vitest.dev/) — Unit testing

## 🧪 Testing

This template exposes some helper functions for testing to improve the DX and resilience of our tests. For further reading, check out this [article by Kent C. Dodds](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change).

We can use the `v-test` directive to target components using one of the below methods:

### `findByTestId`

For targeting a single testId:

```js
const button = wrapper.findByTestId('button');
```

### `findAllByTestId`

For targeting multiple testIds:

```js
const buttons = wrapper.findAllByTestId('button');
```

### `findComponentByTestId`

If you have multiple of the same component and can't easily target it with a `findComponent`, you can use the `findComponentByTestId` method to do this. For example:

```vue
<Button v-test:buttonOne />
<Button v-test:buttonTwo />
<Button v-test:buttonThree />
```

You can differentiate and access the individual components using the following:

```js
// Returns a single wrapper
const buttonOne = wrapper.findComponentByTestId(
    {
        name: 'Button',
    },
    'buttonOne',
);
// Returns a single wrapper
const buttonTwo = wrapper.findComponentByTestId(
    {
        name: 'Button',
    },
    'buttonTwo',
);
```

### `findAllComponentsByTestId`

If you need to access multiple components, for example to access a repeated collection, you can use this helper to return a wrapper array.

```vue
<Button v-for="i in 5" v-test:repeatedComponents />
```

You can differentiate and access the collection of components using the following:

```js
// Returns a wrapper array
const repeatedButtons = wrapper.findAllComponentsByTestId(
    {
        name: 'Button',
    },
    'repeatedButtons',
);
```
