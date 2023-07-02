<script setup>
const props = defineProps({
  buttonsStatus: Object
})
const emit = defineEmits(['next', 'prev'])
</script>

<template>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-outline-primary" @click="emit('prev')"
      :disabled="buttonsStatus.disablePrev">Previous</button>
    <button type="button" class="btn btn-outline-primary" @click="emit('next')"
      :disabled="buttonsStatus.disableNext">Next</button>
  </div>
</template>