import { createSlice } from "@reduxjs/toolkit";
import { FavoriteState } from "../../interfaces/InterFaces";

const initialState: FavoriteState = {
  favoriteList: localStorage.getItem("favoriteList")
    ? JSON.parse(localStorage.getItem("favoriteList") as string)
    : [],
  loading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    addFavorateList: (state, action) => {
      const Items = action.payload;
      const existItem = state.favoriteList.find((item) => item.id === Items.id);
      if (!existItem) {
        state.favoriteList.push(action.payload);
        // state.favoriteList.push({
        //   ...action.payload,
        // });
      }
      localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
      state.loading = false;
    },
    removeFavorateList: (state, action) => {
      const removeData = state.favoriteList.filter(
        (item) => item.id !== action.payload.id
      );
      state.favoriteList = removeData;
      localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addFavorateList, removeFavorateList, setLoading } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
