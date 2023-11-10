import { CatalogProducts } from "@/src/components/modules";
import { FilterByOrder } from "@/src/components/elements";

const Earn = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-11">Product catalog</h1>
      <FilterByOrder />
      <CatalogProducts />
    </div>
  );
};

export default Earn;
