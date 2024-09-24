import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'TShop Storybook',
    brandImage: '/logo.svg',
    brandTarget: '_self'
  })
})
