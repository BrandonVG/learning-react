<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Pokemon from '../components/Pokemon.vue';


const pokemons = ref([]);

const getData = async () => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
    pokemons.value = data.results;
  } catch (error) {
    console.log(error);
  }
}

getData();
</script>

<template>
  <h1>Pokemons</h1>
  <main class="container">
    <div class="row justify-content-center">
      <Pokemon
        class="mb-2"
        v-for="pokemon in pokemons"
        :name="pokemon.name"
      />
    </div>
  </main>
</template>