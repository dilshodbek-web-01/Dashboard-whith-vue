<template>
  <aside>
    <a href="#">Dashboard</a>

    <ul class="list" v-if="navLinks.length">
      <li class="list-item" v-for="el in navLinks">
        <router-link :to="el.path" class="list-item-link">
          <span v-html="el.icon"></span>

          {{ el.name }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { navLinks } from "../../constants/index.js";
</script>

<style lang="scss" src="./_style.scss" scoped></style>
