import {
  Container,
  Wrapper,
  WrapperSubmit,
  TotalPrice,
  SubmitBtn,
} from "./Cart-page.styled";
import { CartList } from "components/Cart/CartList/CartList";
import { UserForm } from "components/Cart/UserForm/UserForm";

import { useContext } from "react";
import { Context } from "App";

const CartPage = () => {
  const context = useContext(Context);
  const totalPrice = () => {
    return context.cartData
      .reduce((total, card) => {
        return total + card.price * card.quantity;
      }, 0)
      .toFixed(2);
  };
  return (
    <Container>
      <Wrapper>
        <UserForm totalPrice={totalPrice()} />
        <CartList />
      </Wrapper>
      <WrapperSubmit>
        <TotalPrice>Total price: {totalPrice()}$</TotalPrice>
        <SubmitBtn type="submit" form="userForm">
          Submit
        </SubmitBtn>
      </WrapperSubmit>
    </Container>
  );
};

export default CartPage;
