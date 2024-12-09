<template>
  <Header />
  <main>
    <section>
      <Navigation />
      <section class="routing">
        <router-view></router-view>
      </section>
    </section>
  </main>
  <Footer />
</template>

<script setup>
import Header from "../../components/header/index.vue";
import Navigation from "../../components/navigation/index.vue";
import Footer from "../../components/footer/index.vue";
</script>

<style lang="scss" src="./_style.scss" scoped></style>
