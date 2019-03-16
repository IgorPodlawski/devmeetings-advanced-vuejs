<template>
  <button :disabled="disabledValue" class="button" :class="{'button--disabled': disabledValue}">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loadingState: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    disabledValue: function () {
      return this.loadingState || this.disabled
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  &--disabled {
    opacity: .5;
  }
}
</style>
