<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-auto">
        <ImgLogo />
        <SearchLocation msg="Search your destination!" @search="handleFetchWeatherInfo" />
      </div>
    </div>

    <!-- Nearby places of the searched place -->
    <div class="row justify-content-center mt-4 w-100 p-3">
      <div class="col-auto w-100">
        <NearbyPlaces :nearbyPlaces="nearby_places" v-show="showNearby" />
        <NotShowNearby :showNearby="showNearby" :noNearby="noNearby" />
      </div>
    </div>

    <!-- Weather forecasts of the searched place -->
    <div class="row justify-content-center mt-4 w-100 p-3">
      <div class="col-auto w-100">
        <Forecasts :forecastArray="weather_info" v-show="showForecasts" />
        <NotShowForecast :showForecasts="showForecasts" :noCity="noCity" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getForecasts, getLocationNearby } from './http/location-api';

import SearchLocation from './components/SearchLocation.vue'
import Forecasts from './components/Forecasts.vue'
import NearbyPlaces from './components/NearbyPlaces.vue'
import ImgLogo from './components/ImgLogo.vue'
import NotShowNearby from './components/NotShowNearby.vue'
import NotShowForecast from './components/NotShowForecast.vue'

const city = ref([]);
const weather_info = ref([])
const nearby_places = ref([])
const showForecastDiv = ref(true)
const showNearbyDiv = ref(true)

const handleFetchWeatherInfo = async (searchText) => {

  const { data: location_nearby_places } = await getLocationNearby(searchText)

  if (Object.keys(location_nearby_places).length > 0) {
    nearby_places.value = Object.entries(location_nearby_places.data.results)
    // console.log(location_nearby_places.data.results)
    showNearbyDiv.value = true;
  } else {
    showNearbyDiv.value = false
  }

  const { data: weather_forecasts } = await getForecasts(searchText)

  if (Object.keys(weather_forecasts).length > 0 && Object.keys(weather_forecasts.data.city).length > 0) {
    city.value = weather_forecasts.data.city
    weather_info.value = weather_forecasts.data.weather_info
    showForecastDiv.value = true;
  } else {
    city.value = {}
    showForecastDiv.value = false
  }
}

const showNearby = computed(
  () => {
    return Object.keys(city.value).length > 0
  }
)

const showForecasts = computed(
  () => {
    return Object.keys(city.value).length > 0
  }
)

const noCity = computed(() => showForecastDiv.value == false)
const noNearby = computed(() => showNearbyDiv.value == false)
</script>

