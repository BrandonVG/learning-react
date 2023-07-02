<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/logo.svg" alt="Bootstrap" width="30" height="24">
          PokeAPI
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="navbar-item"><RouterLink to="/" class="nav-link" >Home</RouterLink></li>
            <li class="navbar-item"><RouterLink to="/about" class="nav-link">About</RouterLink></li>
            <li class="navbar-item"><RouterLink to="/pokemons" class="nav-link">Pokemons</RouterLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>
