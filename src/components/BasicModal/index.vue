<script setup lang="ts">
import Button from '@/modules/Button/index.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonCenter: {
    type: Boolean,
    default: true
  },
  titleCenter: {
    type: Boolean,
    default: true
  },
  isModalShow: {
    type: Boolean,
    default: false
  },
  isButtonGroup: {
    type: Boolean,
    default: false
  },
  handleOnClose: {
    type: Function as PropType<(...args: any[]) => void>,
    default: () => {}
  }
})

const isShow = ref(props.isModalShow)

const headerClass = computed(() => {
  const center = props.titleCenter ? 'center' : ''
  const content = props.buttonText || props.isButtonGroup ? 'hasContent' : ''

  return content.length ? `${center} ${content}` : center
})

const slots = useSlots()
const hasBodySlot = computed(() => !!slots.modalBody)

const btnClass = computed(() => {
  const center = props.buttonCenter ? 'center' : ''
  const content = hasBodySlot.value ? 'hasBtn' : ''

  return content.length ? `${center} ${content}` : center
})

function _show() {
  isShow.value = true
}

function _hide() {
  isShow.value = false
}

defineExpose({ show: _show, hide: _hide })
</script>

<template>
  <div
    v-show="isShow"
    class="tc-mask-wrapper"
  >
    <div class="tc-modal-container">
      <div
        v-if="title"
        class="tc-modal-header"
        :class="headerClass"
      >
        {{ title }}
      </div>

      <div class="tc-modal-content">
        <slot name="modalBody" />

        <div
          v-if="buttonText"
          class="tc-modal-button-row"
          :class="btnClass"
        >
          <Button
            :button-text="buttonText"
            :style="{ width: '50%' }"
            :handle-on-click="handleOnClose"
          />
        </div>

        <template v-if="isButtonGroup">
          <slot name="buttonGroup" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//
</style>
