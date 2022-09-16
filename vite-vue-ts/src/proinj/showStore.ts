import { reactive } from "vue";

export const show = reactive({
  count: 0,
  name: "show",
})

export const changeShow = (name: string) => {
  show.name = name
}

export const increment = () => {
  show.count++
}

export const reset = () => {
  show.count = 0
  show.name = 'show'
}