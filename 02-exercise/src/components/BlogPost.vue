<script setup>
  //Forma #1 - Arreglo
  //defineProps(['id', 'title', 'body', 'colorText' ]);

  //Forma #2
  //const myProps = defineProps(['id', 'title', 'body', 'colorText' ]);
  //console.log(myProps.body);

  //Forma #3 - Objeto con tipo de dato
  defineProps({
    title: String,
    id: Number,
    body: {
      type: String,
      default: "Without description",
    },
    colorText: String,
  })

  const myEmit = defineEmits(['cambiarFavoritoNombre']);
</script>

<template>
  <div class="card">
      <div class="card-body">
        <h5 class="card-title" :class="`text-${colorText}`">{{ id }} - {{ title }}</h5>
        <p>{{ body }}</p>
        <button @click="myEmit('cambiarFavoritoNombre', title)" class="btn btn-outline-primary">Favorito</button>
      </div>
  </div>
</template>

<style lang="scss" scoped>
</style>