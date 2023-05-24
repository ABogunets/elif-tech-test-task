import { Container } from "./Shop-page.styled";
import { ShopList } from "components/ShopList/ShopList";
import { DishList } from "components/DishList/DishList";

const Shop = () => {
  return (
    <Container>
      <ShopList />
      <DishList />
    </Container>
  );
};

export default Shop;
