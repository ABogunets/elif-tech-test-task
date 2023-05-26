import { CartList } from "components/CartList/CartList";
import { Container } from "./Cart-page.styled";

// import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = () => {
  return (
    <Container>
      {/* <Form></Form> */}
      <CartList />
    </Container>
  );
};

export default ShoppingCart;
