import { Container } from "./Shop-page.styled";
import { ShopList } from "components/Shop/ShopList/ShopList";
import { Outlet } from "react-router-dom";

const ShopPage = () => {
  return (
    <Container>
      <ShopList />
      <Outlet />
    </Container>
  );
};

export default ShopPage;
