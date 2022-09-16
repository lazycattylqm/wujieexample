import { defineStore } from "pinia"
import { ref } from "vue"

export const useCounterStore = defineStore('counter', {
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
    increment () {
      this.count++
    }
  }
});