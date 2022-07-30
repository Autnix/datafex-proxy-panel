<script setup lang="ts">
// @ts-ignore
import BaseTitle from "../components/BaseTitle.vue";
</script>

<template>
  <div class="container">
    <BaseTitle title="Fivem Proxy Containers" />

    <input
      type="text"
      class="flex w-full bg-primary border border-border-color mb-4 rounded-md p-4"
      placeholder="Search Proxy..."
    />

    <div class="bg-primary border border-border-color rounded-md w-full mb-4">
      <table class="table-fixed w-full">
        <thead class="text-left">
          <tr class="border-b border-border-color">
            <th class="p-4">Container ID</th>
            <th class="p-4">IP</th>
            <th class="p-4">Created At</th>
            <th class="p-4">Status</th>
            <th class="p-4">Ports</th>
            <th class="p-4">Proxy URI</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-secondary border" v-for="i in 20" :key="i">
            <td class="p-4 border border-border-color">asd</td>
            <td class="p-4 border border-border-color"></td>
            <td class="p-4 border border-border-color"></td>
            <td class="p-4 border border-border-color"></td>
            <td class="p-4 border border-border-color"></td>
            <td class="p-4 border border-border-color"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
