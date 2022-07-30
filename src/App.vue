<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheSidebar from "./components/TheSidebar.vue";
</script>

<template>
  <div class="h-full flex flex-col">
    <TheHeader />
    <div class="flex w-full h-full">
      <TheSidebar />
      <div class="flex-1 p-8 flex flex-col items-center overflow-auto">
        <router-view></router-view>
        <div class="p-8"></div>
      </div>
    </div>
  </div>
</template>
