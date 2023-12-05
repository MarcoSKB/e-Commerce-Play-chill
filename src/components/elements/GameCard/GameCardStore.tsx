import { Store } from "@/src/types/StoreType";

interface Props {
  store: Store[];
}

const hasStoreData = [
  {
    id: 0,
    storeSlug: "steam",
    name: "Steam",
  },
  {
    id: 1,
    storeSlug: "gog",
    name: "GOG",
  },
  {
    id: 2,
    storeSlug: "epic-games",
    name: "Epic Games",
  },
];

const GameCardStore: React.FC<Props> = ({ store }) => {
  const hasStorePlatform = (storesData: Store[], storePlatform: string) => {
    const hasSteam = storesData?.find(
      (stores) => stores.store.slug == storePlatform
    );
    return !!hasSteam;
  };

  return (
    <div className="flex gap-5 flex-wrap">
      {hasStoreData.map(
        (hasStore) =>
          hasStorePlatform(store, hasStore.storeSlug) && (
            <div
              key={hasStore.id}
              className="flex items-center gap-2 text-[#747474] text-sm font-medium"
            >
              <div className="w-[14px] h-[14px] rounded-full bg-[#3D394A]" />
              {hasStore.name}
            </div>
          )
      )}
    </div>
  );
};

export default GameCardStore;
