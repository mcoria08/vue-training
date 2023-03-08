<script setup>
  import { RouterLink } from 'vue-router';
  import { useGetData } from '@/composables/useGetData';
  import { useCounterStore } from '@/stores/counter.js';

  const useCounter = useCounterStore();

  const { data, getData, loading, errorData } =  useGetData();
  getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando información...</p>

    <h1>Home counter: {{ useCounter.count }} </h1>
    <h2>Double: {{ useCounter.double }}</h2>
    <button class="btn btn-primary" @click="useCounter.increment">Increment</button>

    <div class="alert alert-danger mt-2" v-if="errorData">{{  errorData }}</div>
    <div v-if="data">
      <ul class="list-group">
        <li class="list-group-item"
          v-for="(poke, index) of data.results"
          :key="index"
          >
            <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
        </li>
      </ul>
      <div class="mt-2">
        <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data.next" class="btn btn-primary me-2" @click="getData(data.next)">Next</button>
      </div>
    </div>
</template>
