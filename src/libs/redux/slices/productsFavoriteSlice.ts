import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";

type requireProperties = "id" | "slug" | "name" | "background_image" | "stores";

interface GameProductType extends Pick<GamePreviewInfo, requireProperties> {
  addedAt: string;
}

const initialState: GameProductType[] = [];

const productsFavoriteSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    addProductToFavorite(state, action: PayloadAction<GameProductType>) {
      if (!state.find((product) => product.id == action.payload.id)) {
        const productPayload = {
          ...action.payload,
          qtty: 1,
        };
        state.push(productPayload);
      }
    },
    removeProductFromFavorite(state, action: PayloadAction<number>) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProductToFavorite, removeProductFromFavorite } =
  productsFavoriteSlice.actions;
export default productsFavoriteSlice.reducer;
