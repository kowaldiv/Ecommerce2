import { products } from "@/src/data/products";
import { Dropdown } from "../components/Dropdown";
import { ProductCard } from "../components/ProductCard";
import { SideBar } from "../components/SideBar";

export function TvListing({
  setCart,
  cart,
}: {
  setCart: React.Dispatch<React.SetStateAction<Map<number, number>>>;
  cart: Map<number, number>;
}) {
  const filtered = products.filter((p) => p.category === "tv");

  return (
    <div className="max-w-360 flex-1 w-full h-full mx-auto my-8 px-8 flex flex-col lg:flex-row gap-6">
      <SideBar />
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <p className="text-grayText">{filtered.length} products</p>{" "}
          <div className="flex items-center gap-2">
            <p>Sort by:</p>
            <Dropdown className="w-44!" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => {
            return (
              <ProductCard
                setCart={setCart}
                cart={cart}
                key={product.id}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
