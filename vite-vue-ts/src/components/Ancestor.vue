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
import { onUnmounted } from 'vue';
const store = useCounterStore();
onUnmounted(() => {
  console.log('ancestor unmounted', 'count is', store.count, 'double is', store.doubleCount);
  store.$reset();
});
</script>
