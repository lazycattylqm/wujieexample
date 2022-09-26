import { defineStore, storeToRefs } from "pinia"
import { ref, reactive, computed } from "vue"

export const useCounterStore = defineStore('counter', () => {
  const count = reactive({
    count: 0
  })
  const doubleCount = computed(() => count.count * 2)

  const increment = () => {
    count.count++
  }

  const $reset = () => {
    count.count = 0
  }

  return {
    count,
    doubleCount,
    increment,
    $reset
  }

});

/* {
  state: () => {
    return {
      count: 0
    }
  },
    getters: {
    doubleCount: (state) => {
      return state.count * 2
    },
      value: (state) => state.count
  },
  actions: {
    increment() {
      this.count++
    }
  }
} */