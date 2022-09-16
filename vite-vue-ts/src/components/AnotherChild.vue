

<template>
  <div>
    <h1>Show sub</h1>
    <div><button @click=increment>+</button></div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
const { increment } = inject('show');
</script>