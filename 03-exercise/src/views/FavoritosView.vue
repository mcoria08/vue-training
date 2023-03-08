<script setup>
  import { useFavoritosStore } from '@/stores/favoritos.js';
  import { storeToRefs } from 'pinia';
  import { RouterLink } from 'vue-router';

  const useFavoritos = useFavoritosStore();
  const { favoritos } = storeToRefs(useFavoritos);

  const { remove } = useFavoritos;
</script>

<template>
  <h1>Favoritos</h1>
  <p v-if="favoritos.length === 0">Sin Favoritos</p>
  <ul v-else class="list-group">
    <li
      class="list-group-item"
      v-for="poke of favoritos"
      :key="poke.id"
      >
        <div>
          {{ poke.name }}
        </div>
        <div>
          <RouterLink :to="`/pokemons/${poke.name}`" class="btn btn-primary mx-2">Más Información</RouterLink>

          <button @click="remove(poke.id)" class="btn btn-danger mx-2">Eliminar</button>
        </div>
      </li>
  </ul>
</template>

<style lang="scss" scoped>
</style>