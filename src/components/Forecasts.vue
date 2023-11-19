<template>
  <div class="w-100" v-if="forecastArray && forecastArray.length">
    <div class="card mb-5 card-weather-div">
      <div class="card-header">
        <h4><strong>5 Days (3-hour forecasts)</strong></h4>
      </div>
      <div class="card-body">
        <div class="row mb-5 justify-content-center" v-for="(item, index) in forecastArray" :key="index">
          <h5>
            <IconCalendar />
            {{ item['dt_txt'] }}
          </h5>
          <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-2" v-for="(info, x) in item['info']">
            <div class="card cardWeather">
              <div class="card-body card-body-mh-w">
                <h5 class="card-header">
                  <IconTime />
                  {{ info['dt_txt'] }}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  <img :src="`https://openweathermap.org/img/wn/${info['weather_icon']}@2x.png`" alt="">
                </h6>
                <div v-for="(value, key) in Object.keys(info)" :key="key">
                  <p class="card-text" v-if="value != 'weather_icon' && value != 'dt_txt'">
                    <label class="identifier">{{ translateKeys(value) }}</label> : <label class="values">{{ info[value]
                    }}</label>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCalendar from './icons/IconCalendar.vue';
import IconTime from './icons/IconTime.vue';
defineProps({
  forecastArray: Array,
  show: Boolean
})

const translateKeys = (key) => {
  const translations = {
    weather_temp: "Temperature",
    humidity: "Humidity",
    weather_label: "Condition",
    weather_description: "Description",
    weather_icon: "",
    wind_direction: "Wind Direction",
    wind_speed: "Wind speed",
    dt_txt: "Date / Time",
  }

  return translations[key];
}

</script>