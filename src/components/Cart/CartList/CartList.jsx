import {
  CartListWrapper,
  Container,
  Wrapper,
} from "components/Cart/CartList/CartList.styled";
import { CartCard } from "components/Cart/CartCard/CartCard";

import { useContext } from "react";
import { Context } from "App";

export const CartList = () => {
  const context = useContext(Context);
  return (
    <Container>
      <Wrapper>
        <CartListWrapper>
          {context.cartData.map(({ id, imageURL, dishName, price }) => (
            <CartCard
              key={id}
              id={id}
              imageURL={imageURL}
              dishName={dishName}
              price={price}
            />
          ))}
        </CartListWrapper>
      </Wrapper>
    </Container>
  );
};
