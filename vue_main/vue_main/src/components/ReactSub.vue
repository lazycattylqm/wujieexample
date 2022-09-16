<template>
  <div>
    <WujieVue name="react_sub" :url=url :sync="true" />
  </div>

</template>

<script setup>
import WujieVue from 'wujie-vue3'
const url = "//localhost:7600/"
</script>