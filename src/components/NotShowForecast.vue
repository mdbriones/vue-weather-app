<template>
    <div v-show="!showForecasts" class="text-center">
        <p v-if="noCity">Weather information not available!</p>
    </div>
</template>

<script setup>
defineProps({
    showForecasts: Boolean,
    noCity: Boolean
})
</script>