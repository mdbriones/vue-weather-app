<template>
    <div class="container text-center w-100">
        <div class="row align-items-start">
            <div class="col-lg-4">
                City Name
            </div>
            <div class="col-lg-2">
                :
            </div>
            <div class="col-lg-6">
                {{ city.name }}
            </div>
        </div>
        <div class="row align-items-start">
            <div class="col-lg-4">
                Sunrise
            </div>
            <div class="col-lg-2">
                :
            </div>
            <div class="col-lg-6">
                {{ city.sunrise }}
            </div>
        </div>
        <div class="row align-items-start">
            <div class="col-lg-4">
                Sunset
            </div>
            <div class="col-lg-2">
                :
            </div>
            <div class="col-lg-6">
                {{ city.sunset }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    city: Object
})

</script>