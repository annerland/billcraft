<script setup lang="ts">
import NavBar from '../navbar/NavBar.vue';
</script>

<template>
  <main class="flex h-[100vh]">
    <NavBar />
    <div class="p-12 w-[100%] flex flex-col items-start">
      <router-view />
    </div>
  </main>
</template>