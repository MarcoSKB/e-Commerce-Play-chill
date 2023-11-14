import { CatalogProducts, GameFilters } from "@/src/components/modules";
import { Container, FilterByOrder } from "@/src/components/elements";

const Earn = () => {
  return (
    <div className="pt-[80px]">
      <Container className="flex gap-5">
        <GameFilters />
        <div className="w-full">
          <div className="flex justify-between items-center max-w-full mb-10">
            <h1 className="font-bold text-4xl">Product catalog</h1>
            <FilterByOrder />
          </div>
          <CatalogProducts />
        </div>
      </Container>
    </div>
  );
};

export default Earn;
