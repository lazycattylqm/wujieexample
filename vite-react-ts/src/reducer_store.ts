import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/show_sub/reducer/counter_reducer";
export default configureStore({
  reducer: {
    counter: counterReducer
  },
})