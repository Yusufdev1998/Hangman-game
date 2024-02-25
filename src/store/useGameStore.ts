import { create } from "zustand";
// import { persist } from "zustand/middleware";
import { ICategories } from "../types/types";
import data from "../data/data";
import randomPhrase from "../utils/randomPhrase";

type gameStatusT = "playing" | "win" | "lose" | "idle";

interface gameState {
  categories: ICategories;
  gameStatus: gameStatusT;
  modalTitle: string | null;
  category: string;
  found: string[];
  health: number;
  phrase: string | null;
  setFound: (key: string) => void;
  setPhrase: (phrase: string) => void;
  setHealth: (by: number) => void;
  setCategory: (category: string) => void;
  setModalTitle: (title: string) => void;
  setGameStatus: (status: gameStatusT) => void;
  playAgain: () => void;
  resetGame: () => void;
}

const useGameStore = create<gameState>()(set => ({
  found: [],
  modalTitle: "",
  gameStatus: "idle",
  health: 8,
  category: "",
  categories: data,
  phrase: null,
  setPhrase: phrase => set({ phrase }),
  setFound: key => set(state => ({ found: [...state.found, key] })),
  setHealth: by => set(state => ({ health: state.health + by })),
  setCategory: category => set({ category, gameStatus: "playing" }),
  setModalTitle: title => set({ modalTitle: title }),
  setGameStatus: (status: gameStatusT) => set({ gameStatus: status }),
  resetGame: () =>
    set({
      gameStatus: "idle",
      health: 8,
      category: "",
      phrase: null,
      found: [],
    }),
  playAgain: () =>
    set(state => ({
      health: 8,
      found: [],
      phrase: randomPhrase(state.categories[state.category]).name,
    })),
}));

export default useGameStore;
