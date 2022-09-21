import { defineStore } from "pinia"
import { ref, reactive } from "vue"

export const useCounterStore = defineStore('counter', () =>{
  const count = reactive({
    count: 0
  })
  const doubleCount = () => {
    return count.count * 2
  }

  const increment = () => {
    count.count++
  }

  return {
    count,
    doubleCount,
    increment
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