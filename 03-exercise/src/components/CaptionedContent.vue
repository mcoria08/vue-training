<script setup>
  const dataLink = 'https://facebook.com';
  const dataLink2 = 'https://facebook2.com';
</script>

<template>
  <div>
    <p>
      <slot name="linkSlot">
        <a href="https://google.com">Google.com</a>
      </slot>
      <slot name="textSlot" v-bind:dataLink="dataLink" v-bind:dataLink2="dataLink2">Hola mundo!</slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
</style>