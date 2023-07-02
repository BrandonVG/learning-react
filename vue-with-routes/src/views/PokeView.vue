<script setup>
  import {ref} from 'vue';
  import {useRoute, useRouter} from 'vue-router';
  import axios from 'axios';
  import Pokemon from '../components/Pokemon.vue';
  import LoadingSpinner from '../components/LoadingSpinner.vue';
  const poke = ref({});
  const loading = ref(true);
  const route = useRoute();
  const router = useRouter();
  const getPokemon = async () => {
    try {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
      poke.value = data;
    } catch (error) {
      console.log(error);
      poke.value = null;
    }
    finally{
      loading.value = false;
    }
  }

  const volverALaLista = () => {
    router.push('/pokemons');
  }

  getPokemon();
</script>

<template>
  <h1>Name: {{ $route.params.name }}</h1>
  <LoadingSpinner v-if="loading" />
  <main class="container" v-else>
    <div class="row justify-content-center">
      <Pokemon 
        v-if="poke"
        :name="poke.name"
        :image="poke.sprites?.front_default"
        :types="poke.types"
      />
      <div v-else >
        <h2> No se encontro el pokemon :( </h2>
      </div>
      <div class="col-8">
        <button class="btn btn-primary" @click="volverALaLista">Volver a la lista</button>
      </div>
    </div>
  </main>
  
</template>