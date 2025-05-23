<template>
  <section class="hero-banner">
    <v-container class="fill-height d-flex flex-column align-center justify-center text-center">
      <h1 class="hero-title">MovieBase</h1>
      <p class="hero-subtitle">Best for finding the right movie</p>
    </v-container>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-banner {
  height: 75vh;
  background: linear-gradient(180deg, #1a1a1a, #000000);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.8;
  margin-top: 16px;
}
</style>