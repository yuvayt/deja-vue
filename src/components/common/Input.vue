<script setup lang="ts">
import { ref } from "vue";

const model = defineModel();
</script>

<template>
  <input
    class="w-full rounded-md border border-slate-300 outline-none p-3 leading-5 text-gray-900 focus:ring focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-blue-300"
    v-model="model"
  />
</template>

<style scoped></style>
