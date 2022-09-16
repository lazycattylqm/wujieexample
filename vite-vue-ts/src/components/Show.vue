<template>
  <h1>show</h1>
  <div>name is {{show.name}} and count is {{show.count}}</div>
  <ShowSub />
</template>

<script lang="ts" setup>
import { onUnmounted, provide } from 'vue';
import ShowSub from './ShowSub.vue';
import showStore from '../proinj/showStore';
provide('show', { ...showStore });
const { show } = showStore;
onUnmounted(() => {
  console.log('show unmounted', 'name is', show.name, 'count is', show.count);
  reset();
});
</script>