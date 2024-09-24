import type { Meta, StoryObj } from '@storybook/vue3'
import LoadingEffect from './index.vue'

const meta = {
  title: 'Modules/LoadingEffect',
  component: LoadingEffect,
  tags: ['autodocs']
} satisfies Meta<typeof LoadingEffect>

export default meta
type Story = StoryObj<typeof meta>

export const FirstLoad: Story = {
  decorators: [() => ({ template: '<div style="margin: 15rem auto;"><story/></div>' })],
  args: {
    firstLoad: true,
    loading: true
  }
}

export const NotFirstLoad: Story = {
  decorators: [() => ({ template: '<div style="margin: 15rem auto;"><story/></div>' })],
  args: {
    firstLoad: false,
    loading: true
  }
}

const pageStyle = `
  padding: 2rem;
  background-color: burlywood;
  color: darkred;
`

const textStyle = `
  margin: .5rem 0;
  line-height: 1.2;
`

export const NotFirstLoadPage: Story = {
  decorators: [() => ({ template: '<div style="margin: 0 auto;"><story/></div>' })],
  render: (args) => ({
    components: { LoadingEffect },
    setup: () => {
      return { args }
    },
    template: `
      <div style="${pageStyle}">
        <h1>Page</h1>
        <p style="${textStyle}">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi hendrerit egestas aptent nisl vehicula phasellus molestie. Etiam porttitor nullam odio erat, consectetur donec. Arcu condimentum faucibus morbi convallis venenatis eleifend; pharetra ligula a. Facilisi varius nisi fringilla mattis inceptos nunc eleifend feugiat. Ullamcorper gravida efficitur, volutpat nibh non fringilla. Posuere mollis hac nec dictumst et porta ac fusce. Mi tellus dui vivamus class justo class.
        </p>
        <p style="${textStyle}">
          Nulla ultricies inceptos, at tristique nullam vehicula. Imperdiet ultricies nostra enim non maecenas. Imperdiet egestas ullamcorper, nostra penatibus euismod viverra varius. Class diam natoque tempor nibh nulla dictum rutrum quis. Platea accumsan finibus curabitur per parturient fusce inceptos vulputate. Dictum per pretium mauris imperdiet fusce maximus justo. Natoque a accumsan himenaeos sit primis auctor per per ultricies. Inceptos quis dis per nec malesuada. Inceptos non quisque iaculis platea suscipit euismod accumsan. Integer aliquet commodo taciti quisque pulvinar felis.
        </p>
        <p style="${textStyle}">
          Dui parturient velit facilisis platea iaculis mauris non bibendum est. Nisi dolor fringilla est tortor pretium purus felis nullam facilisi. Scelerisque ex id habitasse eleifend scelerisque velit sapien curae. Tristique aenean augue nam iaculis facilisi tortor torquent sapien enim. Ex in venenatis varius eros venenatis efficitur faucibus vitae. Primis feugiat tellus phasellus vitae quisque varius. Turpis lacinia volutpat scelerisque natoque efficitur massa?
        </p>
      </div>
      <LoadingEffect v-bind="args" />
    `
  }),
  args: {
    firstLoad: false,
    loading: true
  }
}
