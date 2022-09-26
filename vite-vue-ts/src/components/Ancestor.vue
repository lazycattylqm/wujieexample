<template>
  <div>
    <h1>ancestor</h1>
    <div>count is: {{ count.count }}</div>
    <div>double is {{doubleCount}}</div>
    <Father />
  </div>
</template>

<script lang="ts" setup>
import Father from './Father.vue'
import { useCounterStore } from "../pinia/counterState";
import { onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);
onUnmounted(() => {
  console.log('ancestor unmounted', 'count is', store.count, 'double is', store.doubleCount);
  store.$reset();
});
</script>
