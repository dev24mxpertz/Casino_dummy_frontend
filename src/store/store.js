import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import DataSlice from "./Slices/DataSlice";
import AdminSlice from "./Slices/AdminSlice";
import GameSlice from "./Slices/GameSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice,
    Data: DataSlice,
    admin: AdminSlice,
    game: GameSlice,
  },
});
 