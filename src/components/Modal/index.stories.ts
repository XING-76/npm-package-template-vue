import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from './index.vue'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin: 15rem auto;"><story/></div>' })],
  render: (args) => ({
    components: { Modal },
    setup: () => {
      function handleOnClose() {
        console.log('Click')
      }
      return { args, handleOnClose }
    },
    template: '<Modal v-bind="args" :handleOnClose="handleOnClose" />'
  }),
  args: {
    isModalShow: true,
    isBasicSize: true
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Modal },
    setup: () => {
      return { args }
    },
    template: `
      <Modal v-bind="args">
        <template #modalBody></template>
      </Modal>
    `
  }),
  args: {
    title: 'ModalTitle',
    isModalShow: true,
    isBasicSize: true
  }
}

export const Empty: Story = {}

const boxStyle = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  min-height: 700px;
  background: #ffffff;
  border: 1px solid #C7C7C7;
  box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.2), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

const headerStyle = `
  background: linear-gradient(90deg, rgba(105,104,108,1) 0%, rgba(109,110,111,0) 60%, rgba(214,219,221,1) 100%);
  font-weight: 700;
  font-size: 2.0625rem;
  line-height: 130%;
  letter-spacing: 0.04em;
  color: #292929;
  padding: 38px 40px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid #C7C7C7;
`

const contentStyle = `
  display: flex;
  flex: 1;
`

export const Custom: Story = {
  decorators: [() => ({ template: '<div style="margin: 50rem auto;"><story/></div>' })],
  render: (args) => ({
    components: { Modal },
    setup: () => {
      return { args }
    },
    template: `
      <Modal v-bind="args">
        <template #modalBody>
          <div style="${boxStyle}">
            <div style="${headerStyle}">
              custom header
            </div>
            <div style="${contentStyle}">
            </div>
          </div>
        </template>
      </Modal>
    `
  }),
  args: {
    isModalShow: true,
    isBasicSize: false
  }
}
