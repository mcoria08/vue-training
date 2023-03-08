<script setup>
  import { storeToRefs } from 'pinia';
  import { useCounterStore } from '@/stores/counter.js';

  import counterMixin from '@/mixins/counter.js';

  mixins: [counter]

  const useCounter = useCounterStore();

  //No funciona
  //Rompe la reactividad
  //const { increment, double, count } = useCounter;

  const { increment } = useCounter;

  //Esto si funciona
  const { double, count } = storeToRefs(useCounter);
</script>

<template>
  <main>
    <h1>Home counter: {{ count }} </h1>
    <h2>Double: {{ double }}</h2>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="increment">Increment</button>
  </main>
</template>
