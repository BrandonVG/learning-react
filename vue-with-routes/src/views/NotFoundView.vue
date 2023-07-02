<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <h1>Error 404</h1>
  <button class="btn btn-primary" @click="goHome"> Go back home </button>
</template>