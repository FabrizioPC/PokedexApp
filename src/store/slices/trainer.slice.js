import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   name: localStorage.getItem("nameTrainer") ?? "",
};
const trainerSlice = createSlice({
   initialState,
   name: "trainer",
   reducers: {
      loginTrainer: (state, action) => {
         const newName = action.payload;
         localStorage.setItem("nameTrainer", newName);
         state.name = newName;
      },
      logoutTrainer: (state) => {
         state.name = "";
         localStorage.removeItem("nameTrainer");
      },
   },
});
export const { loginTrainer, logoutTrainer } = trainerSlice.actions;
export default trainerSlice.reducer;
