<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import CaptionedContent from "@/components/CaptionedContent.vue";

  const sourceData = "hellooo";
</script>

<template>

  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logo.svg"
          alt="Bootstrap"
          class="d-inline-block align-text-top"
          width="30"
          height="24"/>
          PokerAPI
      </RouterLink>
      <div>
        <RouterLink class="btn btn-outline-primary me-2" to="/">Home</RouterLink>
        <RouterLink class="btn btn-outline-primary me-2" to="/pokemons">Pokemons</RouterLink>
        <RouterLink class="btn btn-outline-primary me-2" to="/favoritos">Favoritos</RouterLink>
      </div>
    </div>
  </nav>

  <div class="container text-center myCustomStyle">
    <CaptionedContent>
      <template v-slot:linkSlot>
        <a href="https://yahoo.com">Yahoo.com</a>
      </template>
      <template #textSlot="{ dataLink, dataLink2 }">
        {{ sourceData }} -  {{ dataLink }} - {{ dataLink2 }}
      </template>
      </CaptionedContent>
    <RouterView />
  </div>


</template>

<style scoped>

</style>
