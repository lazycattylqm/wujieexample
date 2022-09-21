import { reactive } from "vue";

const show = reactive({
  count: 0,
  name: "show",
})

const changeShow = (name: string) => {
  show.name = name
}

const increment = () => {
  show.count++
}

const reset = () => {
  show.count = 0
  show.name = 'show'
}

export default {
  show,
  changeShow,
  increment,
  reset
}