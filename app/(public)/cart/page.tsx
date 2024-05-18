import React from "react";
import { Section } from "@/src/components/modules";
import { Container } from "@/src/components/elements";

import { CartQtty, CartItem } from "./components";

const CartPage = () => {
  return (
    <Container>
      <Section title={<CartQtty />}>
        {[...Array(5)].map((_, idx) => (
          <CartItem
            key={idx}
            id={529}
            slug={"grand-theft-auto-v"}
            previewImageURL={
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
            }
            price={529}
            title={"Grand Theft Auto V"}
            store={[
              {
                id: 290375,
                store: {
                  id: 3,
                  name: "PlayStation Store",
                  slug: "playstation-store",
                  domain: "store.playstation.com",
                  games_count: "7935",
                  image_background:
                    "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
                },
              },
            ]}
            qtty={0}
          />
        ))}
      </Section>
    </Container>
  );
};

export default CartPage;
