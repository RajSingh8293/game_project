import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/gameSlice";
import favoriteSlice from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    games: gameSlice,
    favorites: favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
