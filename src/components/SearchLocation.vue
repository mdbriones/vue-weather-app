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
import { reactive } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const searchText= reactive({
  location: ''
})
const emit = defineEmits(['search'])

const searchLocation = event => {
  if (event.target.value.trim()) {
    searchText.location = event.target.value
    event.target.value = ""
    
    emit('search', searchText)
  }
}
</script>