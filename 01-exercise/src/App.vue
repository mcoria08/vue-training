<script setup>
  import { ref, computed } from 'vue';

  const count = ref(0);
  const arreglo = ref([]);

  const bloquearBtnAdd = computed(() => {
    const numSearch = arreglo.value.find((num) => num === count.value);
    // if (numSearch===0) return true;
    // return numSearch ? true: false;
    return numSearch || numSearch === 0;
  });

  const increment = () => {
    count.value ++;
  }
  const decrement = () => {
    count.value --;
  }
  const reset = () => {
    count.value = 0;
    arreglo.value = [];
  }

  const add = () => {
    arreglo.value.push(count.value);
  }

  const classCounter = computed(() => {
    if(count.value === 0){
      return 'zero';
    }
    if(count.value > 0){
      return 'positive';
    }else{
      return 'negative';
    }
  });
</script>

<template>
  <div class="container text-center mt-5">
    <h1>Hola</h1>

    <h2 :class="classCounter">{{ count }}</h2>

    <br/>
    <div class="btn-group">
      <button @click="decrement" class="btn btn-danger">Decrementar</button>
      <button @click="reset" class="btn btn-secondary">Reset</button>
      <button @click="increment" class="btn btn-success">Incrementar</button>
      <button @click="add" :disabled="bloquearBtnAdd" class="btn btn-primary">Add</button>
    </div>

    <h2 class="mt-3">Mis Favoritos</h2>
    <ul class="list-group mt-2">
      <li
        class="list-group-item"
        v-for="(num, index) in arreglo"
        :key="index">
        {{ num }}
        </li>
    </ul>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .positive{
    color:green;
  }
  .negative{
    color:red;
  }
  .neutral{
    color:black;
  }
}
</style>
