import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameData, GameState } from "../../interfaces/InterFaces";

const initialState: GameState = {
  games: [],
  filteredGames: [],
  searchQuery: "",
  selectedCategory: "",
  selectedProvider: "",
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<GameData[]>) => {
      state.games = action.payload;
      state.filteredGames = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredGames = state.games.filter((game) =>
        game.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      // Filter games based on category and search query by name
      state.filteredGames =
        state.selectedCategory === "all"
          ? state.games
          : state.games.filter(
              (game) =>
                game.category
                  .toLowerCase()
                  .includes(state.selectedCategory.toLowerCase()) &&
                game.name
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
            );
    },
    setProviderFilter: (state, action: PayloadAction<string>) => {
      state.selectedProvider = action.payload;
      // Filter games based on provider, category, and search query by category
      state.filteredGames =
        state.selectedProvider === "all"
          ? state.games
          : state.games.filter(
              (game) =>
                game.provider
                  .toLowerCase()
                  .includes(state.selectedProvider.toLowerCase()) &&
                game.category
                  .toLowerCase()
                  .includes(state.selectedCategory.toLowerCase()) &&
                game.name
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
            );
    },
    clearFilters: (state) => {
      state.selectedCategory = "";
      state.selectedProvider = "";
      state.searchQuery = "";
      state.filteredGames = state.games;
    },
  },
});

export const {
  setGames,
  setSearchQuery,
  setCategoryFilter,
  setProviderFilter,
  clearFilters,
} = gameSlice.actions;
export default gameSlice.reducer;
