import {
  ShopListWrapper,
  Link,
  Title,
} from "components/Shop/ShopList/ShopList.styled";

export const ShopList = () => {
  return (
    <ShopListWrapper>
      <Title>Shops:</Title>
      <Link to={"big-burger"}>Big-Burger</Link>
      <Link to={"tasty-chicks"}>Tasty-Chicks</Link>
      <Link to={"pizza-pasta"}>Pizza-Pasta</Link>
      <Link to={"sushi-bar"}>Sushi-Bar</Link>
      <Link to={"super-pastry"}>Super-Pastry</Link>
    </ShopListWrapper>
  );
};
