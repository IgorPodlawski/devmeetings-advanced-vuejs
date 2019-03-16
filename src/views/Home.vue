<template>
  <div class="home">
    <base-button :loading-state="false" button-text="Przycisk" />
    <base-input
      v-model="inputData"
      label="Opis buttona"
      class="default-input"
      @input="checkChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: 'test'
    }
  },
  methods: {
    checkChange() {
      console.log('change');
    }
  }
}
</script>
