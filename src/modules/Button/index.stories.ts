import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './index.vue'

const meta = {
  title: 'Modules/Button',
  tags: ['autodocs'],
  render: (args) => ({
    components: { Button },
    setup: () => {
      function handleOnClick() {
        console.log('Click')
      }
      return { args, handleOnClick }
    },
    template: '<Button v-bind="args" :style={style} :handleOnClick="handleOnClick" />'
  }),
  args: {
    primary: true,
    buttonText: 'buttonText',
    buttonSize: '',
    style: {},
    hoverStyle: {}
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    buttonText: 'buttonText',
    buttonSize: ''
  }
}

export const Secondary: Story = {
  args: {
    primary: false,
    buttonText: 'buttonText',
    buttonSize: ''
  }
}

export const Custom: Story = {
  args: {
    primary: false,
    buttonText: 'buttonText',
    buttonSize: '',
    style: {
      color: '#FF3A40'
    },
    hoverStyle: {
      color: '#292929'
    }
  }
}
