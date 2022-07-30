<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{ title: string }>();
</script>

<template>
  <h1 class="font-semibold mb-4 pb-2 border-b border-b-border-color text-lg">
    {{ title }}
  </h1>
</template>
