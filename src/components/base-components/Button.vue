<template>
  <button :disabled="disabledValue" class="button" :class="{'button--disabled': disabledValue}">
    {{ buttonText }}
  </button>
</template>

<script>
const minTextLength = 1, maxTextLength = 10;
const properLength = (passedLength) => (passedLength >= minTextLength && passedLength <= maxTextLength);

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
    buttonText: {
      type: String,
      required: true,
      validator: val => properLength(val.length),
    }
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
