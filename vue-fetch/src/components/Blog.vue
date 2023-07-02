<script setup>
import { computed } from 'vue';

  const props = defineProps({
    title: String,
    body: {
      type: String,
      default: 'No hay descripción'
    },
    id: Number,
    favorito: String
  });

  const emit = defineEmits(['setFavorito']);

  const checkFavorito = computed(() => {
    return props.title === props.favorito;
  })
</script>

<template>
  <div class="row mt-3">
    <div class="col-8">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{ title }}</h4>
          <h5 class="card-subtitle">id: {{ id }}</h5>
          <p class="card-text">{{ body }}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" @click="emit('setFavorito',title)" :disabled="checkFavorito"> Favorito</button>
        </div>
      </div>
    </div>
  </div>
</template>