

<template>
  <h1>Show sub</h1>
  <div><button @click=increment>+</button></div>
  <input :value=msg @input=updateMsg />
</template>

<script lang="ts" setup>
import { inject, ref } from "vue";
const { increment, changeShow } = inject('show');
const msg = ref('')
const updateMsg = (e: any) => {
  msg.value = e.target.value
  changeShow(msg.value)
}
</script>