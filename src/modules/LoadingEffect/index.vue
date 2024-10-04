<script setup lang="ts">
const props = defineProps({
  firstLoad: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const backgroundStyle = computed(() => (props.firstLoad ? 'opacity: 1' : 'opacity: .5'))
</script>

<template>
  <div
    v-show="loading"
    class="tc-loading-wrapper"
  >
    <div
      class="tc-loading-background"
      :style="backgroundStyle"
    ></div>

    <div class="tc-loading-container">
      <div
        class="spinner"
        role="status"
      ></div>
      <span class="loading-text">Loading...</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//
</style>
