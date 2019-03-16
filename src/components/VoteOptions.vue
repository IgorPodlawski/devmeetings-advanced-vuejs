<template>
  <div class="vote-options">
    <slot
      v-for="option in voteOptions"
      name="item"
      :option="option"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    voteOptions: [
      {
        id: 0,
        text: 'Tak',
      },
      {
        id: 1,
        text: 'Nie wiem',
      },
      {
        id: 2,
        text: 'Nie',
      },
    ],
  }),
};
</script>