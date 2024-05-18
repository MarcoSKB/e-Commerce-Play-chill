import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";

type quantityProduct = {
  qtty: number;
};
type GameProductType = quantityProduct &
  Pick<GamePreviewInfo, "id" | "slug" | "name" | "background_image" | "stores">;

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
    increaseQttyProduct(state, action: PayloadAction<number>) {
      state = state.map((product) => {
        if (product.id === action.payload) {
          product.qtty++;
        }
        return product;
      });
    },
    decreaseQttyProduct(state, action: PayloadAction<number>) {
      state = state.map((product) => {
        if (product.id === action.payload && product.qtty >= 0) {
          product.qtty--;
        }
        return product;
      });
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseQttyProduct,
  decreaseQttyProduct,
} = productsCartSlice.actions;
export default productsCartSlice.reducer;
