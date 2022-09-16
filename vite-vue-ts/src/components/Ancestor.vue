<template>
  <div>
    <h1>ancestor</h1>
    <div>count is: {{ store.count }}</div>
    <div>double is {{store.doubleCount}}</div>
    <Father />
  </div>
</template>

<script lang="ts" setup>
import Father from './Father.vue'
import { useCounterStore } from "../pinia/counterState";
const store = useCounterStore();
</script>
