<template>
    <div class="mt-5 w-100" v-if="nearbyPlaces && nearbyPlaces.length">
        <div class="card">
            <div class="card-header">
                <h4><strong>Nearby Places</strong></h4>
            </div>
            <div class="card-body">
                <div class="row mb-5 justify-content-center">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-2" v-for="(place, index) in nearbyPlaces" :key="index">
                        <div class="card cardNearby">
                            <div class="card-header mh aligned">
                                <div>
                                    <strong>{{ place[1]['name'] }}</strong>
                                </div>
                                <div class="closedBucket">
                                    ( {{ equivalentvalues(place[1]['closed_bucket']) }} )
                                </div>
                            </div>
                            <em class="mb-1"><small class="smallText">Categories</small></em>
                            <div class="row justify-content-center">
                                <div class="col-3" v-for="(category, x) in place[1]['categories']">
                                    <img class="iconImg"
                                        :src="`${category['icon']['prefix']}` + '64' + `${category['icon']['suffix']}`"
                                        :title="`${category['name']}`" alt="">
                                </div>
                            </div>
                            <div class="card-body card-mh">
                                <p class="card-title ct mt-0 mb-0">{{ place[1]['location']['formatted_address'] }}</p>
                                <p class="card-text ct mt-0 mb-0">Country : {{ place[1]['location']['country'] }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    nearbyPlaces: Array
})

const equivalentvalues = (val) => {
    const translations = {
        LikelyOpen: "Likely open",
        VeryLikelyOpen: "Very likely open"
    }

    return translations[val];
}
</script>