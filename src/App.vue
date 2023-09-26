<template>
  <main
    class="h-screen w-screen flex flex-col items-center justify-center bg-gray-900"
  >
    <div
      v-for="(item, index) in ['a', 'b', 'c']"
      :key="index"
      class="h-24 w-24 resize flex items-center justify-center overflow-scroll p-2 bg-gray-700 text-gray-300 rounded"
      :ref="getRef(index)"
    >
      <!-- Use @ts-ignore to suppress TypeScript warning -->
      <!-- This line is commented out, but keeps the variable for clarity -->
      <!-- @ts-ignore -->
      {{ item }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { useDimension } from "./useDimension";

const getRef = useDimension("width");
</script>
