<template>
  <div class="dropdown-container" v-show="parentHovered">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ parentHovered: boolean }>();
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.dropdown-container {
  position: absolute;
  z-index: 1;
  background-color: $grey2;
  top: 4em;
  right: -1em;
  border: 1px solid $blue2;
  border-radius: 2px;
  min-width: 10em;
  ul {
    padding: 0;
    padding: 1em 2em;
  }
  li {
    // padding: 1em 2em;
    // list-style: none;
    // cursor: pointer;
    // color: white;
  }
  p {
    color: white;
  }
}
</style>
