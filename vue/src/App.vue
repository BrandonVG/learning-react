<script setup>
import { ref, computed } from 'vue';
const counter = ref(0);
const array = ref([]);
const handlePressSum = () => counter.value++;

const handlePressLess = () => counter.value--;

const handleReset = () => counter.value = 0;

const handleAdd = () => array.value.push(counter.value);

const getClass = computed(() => {
  switch(counter.value){
    case 0:
      return 'peru';
    default:
      return counter.value > 0 ? 'green-color' : 'red-color';
   }
})

const canAdd = computed(() => {
  return array.value.indexOf(counter.value) === -1 ? false : true;
});
</script>


<template>
  <h1 :class="getClass">{{ counter }}</h1>
  <button @click="handlePressSum">Incrementar</button>
  <button v-on:click="handlePressLess" >Decrementar</button>
  <button v-on:click="handleReset" >Reset</button>
  <button v-on:click="handleAdd" :disabled="canAdd">Add</button>
  <ul>
    <li v-for="number in array" :key="number">{{ number }}</li>
  </ul>
</template>

<style>
.peru{
  color: peru;
}

.green-color{
  color: green;
}

.red-color{
  color: red;
}
</style>