export interface CarouselProps {
  images: string[];
  interval: number;
}

export interface GameData {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  provider: string;
}

export interface GameState {
  games: GameData[];
  filteredGames: GameData[];
  searchQuery: string;
  selectedCategory: string;
  selectedProvider: string;
}

export interface FavoriteData {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  provider: string;
}

export interface FavoriteState {
  favoriteList: FavoriteData[];
  loading: boolean;
  error: string | null;
}

export interface FavoriteListData {
  favoriteList: string[];
}

export interface Filters {
  categoryFilterHandler: (category: string) => void;
  providerFilterHandler: (provider: string) => void;
  searchChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
