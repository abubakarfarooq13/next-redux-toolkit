const { configureStore } = require("@reduxjs/toolkit");
import usersReducers from "@/app/redux/slice";
import todoReducers from "./todoSlice";
export const store = configureStore({
  reducer: {
    usersData: usersReducers,
    todosData: todoReducers,
  },
});
