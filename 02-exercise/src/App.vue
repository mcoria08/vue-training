<script setup>
  import { ref, onMounted } from "vue";
  import BlogPost from "@/components/BlogPost.vue";
  import PaginatePost from "@/components/PaginatePost.vue";
  import LoadingSpinner from "@/components/LoadingSpinner.vue"

  const posts = ref([]);
  const postXpages = 10;
  const inicio = ref(0);
  const maxLength = ref(0);
  const loading = ref(true);

  const fin = ref(postXpages);

  const favorito = ref('');

  const cambiarFavorito = (title) => {
    favorito.value = title;
  }

  const next = () => {
    inicio.value = inicio.value + postXpages;
    fin.value = fin.value + postXpages;
  }

  const prev = () => {
    inicio.value = inicio.value - postXpages;
    fin.value = fin.value - postXpages;
  }


  // Option  #1
  const fetchData = async() => {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
      posts.value = await resp.json();
    } catch(e) {
      console.log(e);
    } finally {
          loading.value = false;
    }
  }
  fetchData();

  // Option  #2
  // onMounted(async() => {
  //   //loading.value = true;
  //   try {
  //     const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     posts.value = await resp.json();
  //   } catch(e) {
  //     console.log(e);
  //   } finally {
  //         loading.value = false;
  //   }
  // });

  // Option  #3
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data => {
  //     posts.value = data;
  //   })
  //   .catch(e => console.log(2))
  //   .finally(() => {
  //       loading.value = false
  //   });
</script>

<template>
  <LoadingSpinner v-if="loading"/>

  <div class="container" v-else>
    <h1>Hello World!! Post: {{ favorito }}</h1>

    <PaginatePost
      class="mb-2"
      :inicio="inicio"
      :fin="fin "
      :maxLength="posts.length"
      @next="next"
      @prev="prev"
      />

    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @cambiarFavoritoNombre="cambiarFavorito"
      />

  </div>
</template>

<style scoped>

</style>
