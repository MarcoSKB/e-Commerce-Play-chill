import React from "react";
import { Section } from "@/src/components/modules";
import { Container } from "@/src/components/elements";

import { CartQtty, CartList } from "./components";

const CartPage = () => {
  return (
    <Container className="pt-[50px]">
      <Section title={<CartQtty />}>
        <CartList />
      </Section>
    </Container>
  );
};

export default CartPage;
