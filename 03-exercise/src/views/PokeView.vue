<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { useGetData } from '@/composables/useGetData';
  import { useFavoritosStore } from '@/stores/favoritos.js';

  const route = useRoute();
  const router = useRouter();

  const useFavoritos = useFavoritosStore();
  const { add, findPoke } = useFavoritos;

  const back = () => {
    router.push('/pokemons');
  }

  const { data, getData, loading, errorData } =  useGetData();

  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`);
</script>

<template>
  <p v-if="loading">Cargando información...</p>

  <div class="alert alert-danger mt-2" v-if="errorData">{{  errorData }}</div>

  <div v-if="data">
    <img :src="data.sprites?.front_default" alt=""/>
    <h1>Pokemon name: {{ data.name }}</h1>
    <button :disabled="findPoke(data.name)" @click="add(data)" class="btn btn-outline-primary mb-2">Agregar Favoritos</button>

  </div>


  <button @click="back" class="btn btn-outline-primary">Regresar</button>

</template>

<style scoped>
  img{
    width:120px;
  }
</style>