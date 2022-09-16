<template>
  <div>
    count: {{count}}
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const count = ref(1)
const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
watch(count, (val) => {
  console.log('count changed', val)
})
</script>