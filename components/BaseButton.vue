<template>
  <button :type="type" @click="clickFunc">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
type ButtonType = 'submit' | 'reset' | 'button';
export interface BaseButtonProps {
  type: ButtonType;
  buttonText: string;
  clickFunc: () => void;
}

const props: BaseButtonProps = withDefaults(
  defineProps<{
    type: ButtonType;
    buttonText: string;
    clickFunc?: () => void;
  }>(),
  {
    // here we have default values
    type: 'button',
  },
);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
button {
  background-color: $blue2;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  outline: none;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
}
</style>
