<script setup>
  import { useUserStore } from '../stores/userStore.js';
  const userStore = useUserStore();
</script>

<template>
  <div>
    <h1>Home - {{ userStore.userData?.email }}</h1>
  </div>
</template>


<style lang="scss" scoped>
</style>