import React from "react";
import { Section } from "@/src/components/modules";
import { Container } from "@/src/components/elements";

import { CartQtty, CartList, CartSumPrice } from "./components";

const CartPage = () => {
  return (
    <Container className="py-[50px]">
      <Section title={<CartQtty />}>
        <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-4 lg:gap-x-12">
          <div className="flex flex-col w-full">
            <CartList />
          </div>
          <div className="relative md:max-w-xs min-w-[30%] w-full z-0">
            <CartSumPrice />
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default CartPage;
