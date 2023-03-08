<script setup>
  const myProps = defineProps(['inicio', 'fin', 'maxLength']);
  console.log(myProps.fin);
  const emit = defineEmits(['next', 'prev']);
</script>

<template>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button"
    @click="emit('prev')"
    :disabled="myProps.inicio <= 0"
    class="btn btn-outline-primary">Previous {{ myProps.inicio }}</button>

  <button type="button"
    @click="emit('next')"
    :disabled="myProps.fin >= myProps.maxLength"
    class="btn btn-outline-primary">Next {{ myProps.fin }}</button>
</div>
</template>


<style lang="scss" scoped>
</style>