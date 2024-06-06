"use client";
import { Store } from "@/src/types/StoreType";
import { useAppDispatch, useAppSelector } from "@/src/hooks/reduxHooks";
import {
  addProductToCart,
  removeProductFromCart,
} from "@/src/libs/redux/slices/productsCartSlice";
import { removeProductFromFavorite } from "@/src/libs/redux/slices/productsFavoriteSlice";

import FavoriteItemInfo from "./FavoriteItemInfo";
import FavoriteItemAction from "./FavoriteItemAction";

interface Props {
  id: number;
  title: string;
  slug: string;
  price: number;
  backgroundImage: string;
  stores: Store[];
  addedAt: string;
}

const FavoriteItem: React.FC<Props> = (props) => {
  const { id, slug, title, price, backgroundImage, stores, addedAt } = props;
  const isProductInCart = useAppSelector(
    (state) => !!state.productsCart.find((product) => product.id === id)
  );
  const dispatch = useAppDispatch();

  const onClickCartHandler = (): void => {
    const productData = {
      id,
      slug,
      name: title,
      background_image: backgroundImage,
      stores,
    };

    isProductInCart
      ? dispatch(removeProductFromCart(id))
      : dispatch(addProductToCart(productData));
  };

  const removeProductHandler = () => {
    dispatch(removeProductFromFavorite(id));
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between w-full pt-7 gap-3 border-t-[1px] border-white border-opacity-10 z-0">
      <div className="flex gap-4 md:gap-7 w-full">
        <img
          className="max-w-[120px] md:max-w-[200px] h-[160px] md:h-[240px] rounded-md object-cover"
          src={backgroundImage}
          alt="Game preview image"
        />
        <FavoriteItemInfo
          title={title}
          price={price}
          stores={stores}
          slug={slug}
        />
      </div>
      <div className="flex md:flex-col md:items-end justify-between md:justify-normal gap-6 w-full">
        <span className="opacity-30 order-2 md:order-none">
          Added {addedAt}
        </span>
        <FavoriteItemAction
          id={id}
          onClickCartHandler={onClickCartHandler}
          removeProductHandler={removeProductHandler}
        />
      </div>
    </div>
  );
};

export default FavoriteItem;
