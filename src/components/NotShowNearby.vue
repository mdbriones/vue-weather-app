<template>
    <div v-show="!showNearby" class="text-center">
        <p v-if="noNearby">Enter valid place!</p>
        <p v-else><i>Enter your destination</i></p>
    </div>
</template>

<script setup>
defineProps({
    showNearby: Boolean,
    noNearby: Boolean
})
</script>