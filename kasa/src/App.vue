<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/A-Propos">About</RouterLink>
      </nav>
    </div>
  </header>

  <Header />
  <RouterView />
  <Footer />
</template>
