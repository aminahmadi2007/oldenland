<!-- /layouts/default.vue -->
<template>
    <div>
      <Navbar />
      <Nuxt />
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '~/components/Navbar.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer,
    },
  };
  </script>
  
  <style>
  /* استایل‌های کلی برای Layout پیش‌فرض */
  </style>
  