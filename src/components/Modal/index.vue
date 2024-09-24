<template>
  <div
    v-show="isShow"
    class="tc-mask-wrapper"
  >
    <template v-if="isBasicSize">
      <div
        class="tc-modal-container"
      >
      <div
        class="tc-modal-header"
        :class="titleCenter ? 'center' : ''"
        v-if="title"
      >
        {{ title }}
      </div>

        <div class="tc-modal-content">
          <slot name="modalBody" />
        </div>
      </div>
    </template>

    <template v-if="!isBasicSize">
      <slot name="modalBody" />
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  titleCenter: {
    type: Boolean,
    default: true
  },
  isModalShow: {
    type: Boolean,
    default: false
  },
  isBasicSize: {
    type: Boolean,
    default: false
  },
  handleOnClose: {
    type: Function as PropType<(...args: any[]) => void>,
    default: () => {}
  }
})

const isShow = ref(props.isModalShow)

function _show() {
  isShow.value = true
}

function _hide() {
  isShow.value = false
}

defineExpose({ show: _show, hide: _hide })
</script>

<style lang="scss" scoped>
//
</style>
