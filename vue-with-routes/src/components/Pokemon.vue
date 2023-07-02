<script setup>
  import { RouterLink } from 'vue-router';
  const props = defineProps({
    name: String,
    image: String,
    types: Array,
  });
</script>

<template>  
  <div class="col-8">
    <div class="card">
      <img :src="image" class="card-img-top">
      <div class="card-body">
        <h1 class="card-title"><RouterLink :to="`/pokemons/${name}`">{{ name }}</RouterLink></h1>
        <span v-for="type in types" class="badge rounded-pill text-bg-success">{{ type.type.name }}</span>
      </div>
    </div>
  </div>
</template>