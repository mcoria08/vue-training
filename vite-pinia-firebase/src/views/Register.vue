<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/userStore.js';

  const userStore = useUserStore();

  const email = ref('');
  const password = ref('');

  const handleSubmit = async() => {
    console.log(email.value);
    console.log(password.value);
    if (!email.value || !password.value){
      return alert('Llena los campos');
    }
    console.log('procesando formulario');

    //Tenemos que hacer una promesa porque estamos esperando
    //que la promesa del "registerUser" se cumpla primero
    //antes de redireccionar a la "raiz"
    //
    //De tra forma no esperaría a que la promesa se cumpla y
    //mandaría a la "raiz"
    //
    //No olvidar que JS es síncrono
    await userStore.registerUser(email.value, password.value);

  }
</script>

<template>
  <div>
  <h1>Register</h1>
  <!-- <button @click="userStore.registerUser('Miguel')">Ingresar</button> -->
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Correo" v-model.trim="email">
      <input type="password" placeholder="Password" v-model.trim="password">
      <button type="submit" :disabled="userStore.loadingUser">Crear</button>
    </form>
  </div>
</template>


<style lang="scss" scoped>

</style>