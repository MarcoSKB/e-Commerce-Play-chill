import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";

type quantityProduct = {
  qtty: number;
};
type GameProductType = quantityProduct &
  Pick<
    GamePreviewInfo,
    "id" | "slug" | "name" | "background_image" | "platforms"
  >;

const initialState: GameProductType[] = [];

const productsCartSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<GameProductType>) {
      state.push(action.payload);
    },
    removeProductFromCart(state, action: PayloadAction<number>) {
      state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart } =
  productsCartSlice.actions;
export default productsCartSlice.reducer;
