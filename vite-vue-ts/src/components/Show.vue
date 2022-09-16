<template>
  <div>
    <h1>show</h1>
    <div>name is {{show.name}} and count is {{show.count}}</div>
    <AnotherChild />
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, provide } from 'vue';
import AnotherChild from './AnotherChild.vue';
import { show, changeShow, increment, reset } from '../proinj/showStore';
provide('show', { show, changeShow, increment, reset });
onUnmounted(() => {
  console.log('show unmounted', 'name is', show.name, 'count is', show.count);
  reset();
});
</script>