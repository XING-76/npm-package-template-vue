# npm-package-template-vue

> Boilerplate to kickstart creating a Node.js module

## Features

- [Vite](https://vitejs.dev/)
- [Vue](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting started

### Settings

1. Create a `.env` file for publishing
2. Set up a `personal access token (classic)` by following [the official documentation.](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)

```
// .env
NPM_AUTH_TOKEN={personal access token}
```

### Command Instructions

1. `npm run start`: Start developing with storybook
2. `npm run build`: Build the project
3. `npm run release`: Build and publish a new version
4. `npm run update`: Merge updates into `master` (run on the `develop` branch)

### Git Flow

1. Create a `feature` branch from `develop` to start development.
2. After development, merge the `feature` branch into `develop`.
3. Run `npm run release` (on the `develop` branch).
4. Run `npm run update` (on the `develop` branch).

### Stories Development

```ts
// index.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import <Component> from './index.vue'

const meta = {
  title: '<Tag Category>',
  component: <Component>,
  tags: ['autodocs'],
} satisfies Meta<typeof <Component>>

export default meta
type Story = StoryObj<typeof meta>

export const <StoryName>: Story = {
  render: (args) => ({
    components: { <Component> },
    setup: () => {
      function <Function>() {
        // Related logic
      }
      return { args, <Function> }
    },
    template: '<Component v-bind="args" :<Function>="<Function>" />'
  }),
  args: {
    <pass props>
  }
}
```

### Import

- Use `git url` as `devDependencies` for importing

```json
// package.json
{
  ...,
  "devDependencies": {
    ...,
    "<package-name>": "git+ssh://git@github.com/<owner>/<repo>.git"
  }
}
```

- To update the version, use: `npm update <package-name>`
