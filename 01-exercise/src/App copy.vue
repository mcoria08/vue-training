<script setup>
  const myVar = "Miguel";
  const myNum = 10;
  const estoyActivo = false;

  //const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
  const arrayFrutas = [
        {
            name: "Manzana",
            price: "1.00",
            description: "Una manzana",
            icon: "🍎"
        },
        {
            name: "Pera",
            price: "2.00",
            description: "Una pera",
            icon: "🍌"
        },
        {
            name: "Naranja",
            price: "3.00",
            description: "Una naranja",
            icon: "🍉"
        },
    ];

const objetoFruta = {
  name: "Manzana",
  price: "$1.00",
  description: "Una manzana",
  icon: "🍎",
  id: 1
}
</script>

<template>
  <div v-if="myNum===10">
    Equal to 10
  </div>
  <div v-else-if="myNum>10">
    Grater than 10
  </div>
  <div v-else>
    Minor to 10
  </div>

  <p v-show="estoyActivo">Estoy activo</p>

  {{ arrayFrutas }}

   <!--<ul>
    <li v-for="(item,index) in arrayFrutas" :key="index">{{ item }}</li>
    <li
      v-for="(item, index) in arrayFrutas"
      :key="index">{{ item.icon }} {{ item.name }} - {{ item.price }} <br/> {{ item.description }}</li>
  </ul>-->

  <!--
  <ul>
    <li
      v-for="(value, propiedad, index) in objetoFruta"
      :key="value">
       [{{ index }}] {{ propiedad }} - {{   value  }}
      </li>
  </ul>
  -->

  <ul>
    <template v-for="(item) in arrayFrutas" :key="item.name">
      <li v-if="item.price>1">
            {{ item.name }} - {{ item.price }}
      </li>
    </template>
  </ul>
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
}
</style>
