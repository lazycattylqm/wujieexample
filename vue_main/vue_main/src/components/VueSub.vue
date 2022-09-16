<template>
  <div>
    <WujieVue name="sub" :url=url :sync="true" />
  </div>
</template>

<script setup>
import WujieVue from 'wujie-vue3'
const url = "//localhost:9500/"
</script>

<style scoped>

</style>
