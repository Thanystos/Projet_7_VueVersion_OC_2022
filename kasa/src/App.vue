<script setup>
import { ThemeProvider } from '@magister_zito/vue3-styled-components';
import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <ThemeProvider>
    <Header />
    <RouterView />
    <Footer />
  </ThemeProvider>
</template>
