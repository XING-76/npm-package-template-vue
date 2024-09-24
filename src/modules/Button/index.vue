<template>
    <button
      class="tc-button"
      :class="computedClass"
      :style="computedStyle"
      type="button"
      @click="handleOnClick"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      {{ buttonText }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
  primary: {
    type: Boolean,
    default: true
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonSize: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  style: {
    type: Object,
    default: () => ({})
  },
  hoverStyle: {
    type: Object,
    default: () => ({})
  },
  handleOnClick: {
    type: Function as PropType<(...args: any[]) => void>,
    default: () => {}
  }
})

const isHovered = ref(false)

const computedClass = computed(() => {
  return props.primary ? `primary ${props.class}` : `${props.class}`
})

const computedStyle = computed(() => {
  return isHovered.value ? { ...props.style, ...props.hoverStyle } : props.style
})
</script>

<style lang="scss" scoped>
//
</style>
