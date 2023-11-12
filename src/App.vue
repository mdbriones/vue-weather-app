<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <img alt="Vue logo" class="logo" src="./assets/travel.png" width="150" height="150" />
    <div class="wrapper">
      <SearchLocation msg="Search your destination!" @search="handleSearchLocation"/>
    </div>
  </header>

  <main>
    
    <TheWelcome />
  </main>
</template>

<script setup>
import SearchLocation from './components/SearchLocation.vue'
import TheWelcome from './components/TheWelcome.vue'
import { forecasts } from './http/location-api';

const handleSearchLocation = async (forecast) => {

  const { data: response } = await forecasts(forecast)

  console.log(response.data)
}

</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
