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
    addProductToCart(
      state,
      action: PayloadAction<Omit<GameProductType, "qtty">>
    ) {
      if (!state.find((product) => product.id == action.payload.id)) {
        const productPayload = {
          ...action.payload,
          qtty: 1,
        };
        state.push(productPayload);
      }
    },
    removeProductFromCart(state, action: PayloadAction<number>) {
      return state.filter((product) => product.id !== action.payload);
    },
    increaseQttyProduct(state, action: PayloadAction<number>) {
      const item = state.find((product) => product.id === action.payload);
      if (item) {
        item.qtty++;
      }
    },
    decreaseQttyProduct(state, action: PayloadAction<number>) {
      const item = state.find((product) => product.id === action.payload);
      if (item && item.qtty > 1) {
        item.qtty--;
      }
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
