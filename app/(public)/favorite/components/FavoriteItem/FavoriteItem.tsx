"use client";
import { Store } from "@/src/types/StoreType";
import { useAppDispatch } from "@/src/hooks/reduxHooks";
import { addProductToCart } from "@/src/libs/redux/slices/productsCartSlice";
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
  const dispatch = useAppDispatch();

  const addToCart = () => {
    const productData = {
      id,
      slug,
      name: title,
      background_image: backgroundImage,
      stores,
    };
    dispatch(addProductToCart(productData));
  };

  const removeProductFromCart = () => {
    dispatch(removeProductFromFavorite(id));
  };

  return (
    <div className="relative flex justify-between w-full pt-7 gap-3 border-t-[1px] border-white border-opacity-10 z-0">
      <div className="flex gap-7 w-full">
        <img
          className="max-w-[200px] h-[240px] rounded-md object-cover"
          src={backgroundImage}
          alt="Game preview image"
        />
        <FavoriteItemInfo title={title} stores={stores} slug={slug} />
      </div>
      <div className="flex flex-col items-end gap-6 w-full">
        <span className="opacity-30">Added {addedAt}</span>
        <div className="flex justify-end items-center gap-6 w-full">
          <span className="text-3xl font-bold">{price} $</span>
          <FavoriteItemAction
            id={id}
            addToCart={addToCart}
            removeProductFromCart={removeProductFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
