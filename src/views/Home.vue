<template>
  <div class="home">
    <base-button :loading-state="true">Przycisk</base-button>
    <base-input
      v-model="inputData"
      label="Opis inputa"
      class="default-input"
      @input="checkChange"
    />
    <VoteOptions />
    <VoteOptions>
      <template v-slot:item="{ option }">
        <base-button>{{ option.text }}</base-button>
      </template>
    </VoteOptions>
  </div>
</template>

<script>
import VoteOptions from '@/components/VoteOptions.vue'

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
  },
  components: {
    VoteOptions
  }
}
</script>
