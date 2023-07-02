<script setup>
import { computed, onMounted, ref } from 'vue';

import Blog from './components/Blog.vue';
import PaginateBlog from './components/PaginateBlog.vue';
import LoadingSpinner from './components/LoadingSpinner.vue'

const favorito = ref('');
const posts = ref([]);
const postPerPage = 10;
const inicio = ref(0);
const fin = ref(postPerPage);
const loading = ref(true);

const setFavorito = (title) => {
  favorito.value = title;
}

const obtenerBlogs = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    posts.value = data;
  } catch (error) {
    console.log(error);
  } 
  loading.value = false; 
}

const nextPage = () =>{
  inicio.value += postPerPage;
  fin.value += postPerPage;
}

const prevPage = () => {
  inicio.value -= postPerPage;
  fin.value -= postPerPage;
}

const disableButtons = computed(() => {
  let response = {
    disablePrev: false,
    disableNext: false
  };
  if (inicio.value === 0){
    response.disablePrev = true;
  }
  if (fin.value >= posts.value.length){
    response.disableNext = true;
  }
  return response;
})
onMounted(() => {
  obtenerBlogs();
});
</script>

<template>
  <LoadingSpinner v-if="loading"/>
  <main class="container mt-5" v-else >
    <h1>Mi favorito {{ favorito }}</h1>
    <PaginateBlog 
      @next="nextPage"
      @prev="prevPage"
      :buttonsStatus="disableButtons"
    />
    <Blog 
      v-for="post in posts.slice(inicio, fin)" 
      :title="post.title" 
      :id="post.id" 
      :body="post.body" 
      @setFavorito="setFavorito"
      :favorito="favorito" 
    />
  </main>
</template>
