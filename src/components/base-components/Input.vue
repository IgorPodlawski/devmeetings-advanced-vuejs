<template>
  <label>
    {{ label }}
    <input 
      :value="content"
      type="text"
      v-bind="$attrs"
      @input="handleInput"
      v-on="listeners"
    >
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      content: this.value
    }
  },
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    listeners() {
      // eslint-disable-next-line
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
    }
  },
}
</script>
