
<template>
  <v-app>
    <NavBar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.v-main {
  background-color: #181818; /* tmavé pozadí */
  min-height: calc(100vh - 64px); /* výška obsahu bez AppBaru a Footeru */
}
template{
  background-color: #181818;
}
</style>