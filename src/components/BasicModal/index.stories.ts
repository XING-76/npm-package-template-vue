import type { Meta, StoryObj } from '@storybook/vue3'
import BasicModal from './index.vue'
import Button from '@/modules/Button/index.vue'

const meta = {
  title: 'Components/BasicModal',
  component: BasicModal,
  subcomponents: { Button },
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin: 15rem auto;"><story/></div>' })],
  render: (args) => ({
    components: { BasicModal },
    setup: () => {
      function handleOnClose() {
        console.log('Close')
      }
      return { args, handleOnClose }
    },
    template: '<BasicModal v-bind="args" :handleOnClose="handleOnClose" />'
  }),
  args: {
    isModalShow: true,
    isButtonGroup: false
  }
} satisfies Meta<typeof BasicModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'ModalTitle',
    buttonText: 'ModalButtonText'
  }
}

export const NoButton: Story = {
  args: {
    title: 'NoButtonModalTitle',
    isModalShow: true,
    buttonCenter: false,
    isButtonGroup: false
  }
}

export const Empty: Story = {}

const btnRowStyle = `
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const Custom: Story = {
  decorators: [() => ({ template: '<div style="margin: 50rem auto;"><story/></div>' })],
  render: (args) => ({
    components: { BasicModal, Button },
    setup: () => {
      return { args }
    },
    template: `
      <BasicModal v-bind="args">
        <template #modalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies augue sed urna congue, ac tristique lectus commodo. Morbi ullamcorper mauris non mattis convallis. Etiam eget mattis arcu. Suspendisse libero felis, tristique et mi eu, rhoncus fermentum eros. Morbi eu odio sed ipsum commodo ultrices at eget leo. Fusce elementum semper nulla eu vehicula. Donec vitae urna non mi lobortis molestie. Donec id turpis laoreet, vulputate metus vel, sagittis sapien.

          In consectetur orci orci, sit amet ultrices nisl condimentum dignissim. Praesent tempus id neque ac elementum. Maecenas sit amet posuere neque. Curabitur vitae tortor eu ligula tempor rhoncus in sit amet ipsum. Proin lobortis lacus congue quam hendrerit tempus. Sed nec viverra magna, id iaculis eros. Aliquam tempor tortor tristique, tempus tellus in, pellentesque orci. In quis tellus commodo, gravida magna nec, imperdiet arcu. Nam volutpat lacus nunc, id mollis nisl malesuada sed. Ut efficitur est sit amet enim ornare, ac vulputate arcu malesuada. Donec efficitur diam a tellus aliquet, a molestie purus aliquet. Aenean lacinia consectetur elit at vehicula. Cras eget sodales nunc.
        </template>

        <template #buttonGroup>
          <div
            style="${btnRowStyle}"
          >
            <Button
              button-text="Click"
              :style="{ width: '50%' }"
              :handle-on-click="() => console.log('Click')"
            />
            
            <Button
              button-text="Cancel"
              :primary="false"
              :style="{ width: '50%' }"
              :handle-on-click="() => console.log('Cancel')"
            />
          </div>
        </template>
      </BasicModal>
    `
  }),
  args: {
    isModalShow: true,
    isButtonGroup: true
  }
}
