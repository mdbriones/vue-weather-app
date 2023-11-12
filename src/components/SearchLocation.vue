<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <input type="text" class="form-control form-control-lg padding-right-lg" placeholder="e.g. Tokyo"
        @keydown.enter="searchLocation" />
    </h3>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const forecast= reactive({
  location: ''
})
const emit = defineEmits(['search'])

const searchLocation = event => {
  if (event.target.value.trim()) {
    forecast.location = event.target.value
    event.target.value = ""
    
    emit('search', forecast)
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.5rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
