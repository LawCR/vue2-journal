<template>
  <button class="btn btn-primary" @click="$emit('on:click')" :disabled="disabled">
    <font-awesome-icon :icon="['fas', icon]" class="fa-2x" />
  </button>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'plus'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 56px;
  position: fixed;
  right: 20px;
  width: 56px;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: rotate(45deg);
  }
}
</style>