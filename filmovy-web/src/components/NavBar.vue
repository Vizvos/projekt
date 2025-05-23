<template>
  <v-app-bar flat height="64" class="glass-navbar">
    <v-container fluid class="pa-6">
      <v-row align="center" justify="space-between" no-gutters>
        <!-- Levá část -->
        <v-col cols="auto" class="d-flex align-center ga-4">
          
          <v-btn-toggle v-model="type" mandatory class="switch-toggle rounded-pill">
  <v-btn
    to="/"
    value="filmy"
    class="switch-btn"
    :class="{ active: type === 'filmy' }"
    rounded
    router
  >
    Filmy
  </v-btn>
  <v-btn
    to="/serialy"
    value="serialy"
    class="switch-btn"
    :class="{ active: type === 'serialy' }"
    rounded
    router
  >
    Seriály
  </v-btn>
</v-btn-toggle>

         
        </v-col>
        <v-col cols="auto" class="d-flex align-center ga-0">
               <v-text-field
            v-model="search"
            placeholder="Hledej"
            hide-details
            density="comfortable"
            variant="solo"
            rounded
            prepend-inner-icon="mdi-magnify"
            style="min-width: 200px; background-color: rgba(1, 1, 1,0); color: white;"
            class="text-white"
          />
          </v-col>
        <!-- Pravá část -->
        <v-col cols="auto" class="d-flex align-center ga-4 justify-end">
          <v-btn variant="text" class="text-white">Nové</v-btn>
          <v-btn to="/oblibene" variant="text" class="text-white" router>Oblíbené</v-btn>
          <v-switch hide-details inset color="success" density="comfortable" />
          <v-btn icon>
            <v-icon class="text-white">mdi-account</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const type = ref('filmy')
const search = ref('')
</script>

<style scoped>
.glass-navbar {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.switch-toggle {
  background-color: #333;
  padding: 2px;
  transition: background-color 0.3s ease;
}

.switch-btn {
  background-color: transparent;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
  min-width: 90px;
}

.switch-btn.active {
  background-color: #00ff88;
  color: black;
}
</style>
