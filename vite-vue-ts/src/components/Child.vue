<template>
  <div>
    <h1>child</h1>
    <div><button @click=store.increment>+</button></div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../pinia/counterState";
const store = useCounterStore();

</script>