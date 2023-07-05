<template>
  <div class="input-container">
    <label :for="name" class="visually-hidden">{{ label }}</label>

    <input
      :id="name"
      :type="type"
      :placeholder="label"
      :name="name"
      v-model="value"
      @change="emitChange"
      class="input-field"
      :required="true"
      autocomplete="false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
  label: String,
  type: String,
});

const emit = defineEmits(['changeInput']);
const value = ref('');

const emitChange = () => {
  emit('changeInput', { [props.name]: value });
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
$input-background: rgba(57, 63, 84, 0.8);
$input-text-inactive: #7881a1;
$input-text-active: #bfd2ff;
.input-container {
  width: 100%;
  text-align: center;
}
input {
  border-style: none;
  outline: none;
  position: relative;
  width: inherit;
  max-width: 400px;
  margin: 0.5em auto;
  border-radius: 2px;
  padding: 1rem 2rem;
  background: $input-background;
  color: #bfd2ff;
  font-size: 1rem;
  font-family: poppins, sans-serif;
  &:focus {
    border: 1px solid $blue3;
  }
}
</style>
