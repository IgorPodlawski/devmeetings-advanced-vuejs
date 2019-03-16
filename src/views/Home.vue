<template>
  <div class="home">
    <base-button :loading-state="false">Przycisk</base-button>
    <base-input
      v-model="inputData"
      label="Opis inputa"
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
