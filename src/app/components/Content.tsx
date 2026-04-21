import type { PageType } from "./Container";
import { TvListing } from "../pages/TvListing";
import { PhoneListing } from "../pages/PhoneListing";
import { LaptopListing } from "../pages/LaptopListing";

export function Content({
  pageType,
  setCart,
  cart,
}: {
  pageType: PageType;
  setCart: React.Dispatch<React.SetStateAction<Map<number, number>>>;
  cart: Map<number, number>;
}) {
  return (
    <main className="flex-1">
      {pageType === "tv" ? (
        <TvListing setCart={setCart} cart={cart} />
      ) : pageType === "phone" ? (
        <PhoneListing setCart={setCart} cart={cart} />
      ) : pageType === "laptop" ? (
        <LaptopListing setCart={setCart} cart={cart} />
      ) : (
        ""
      )}
    </main>
  );
}
