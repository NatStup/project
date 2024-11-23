<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderForm from '@/widgets/header';

</script>

<template>
  <div id="wrapper">
    <header-form/>

    <main>
      <RouterView />
    </main>

    <footer>
      Помогите улучшить сервис отправляя обратную связь по почте
    </footer>
  </div>
</template>
