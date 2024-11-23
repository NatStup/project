<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <div class="header-form">
      <h1>
        Natural Stupidity
      </h1>
      <nav>
        <RouterLink to="/">Домашняя</RouterLink>
         |
        <RouterLink to="/about">О нас</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-form{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
}
</style>
