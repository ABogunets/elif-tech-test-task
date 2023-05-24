// import PropTypes from "prop-types";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ShopListWrapper,
  Link,
  Title,
} from "components/ShopList/ShopList.styled";

export const ShopList = () => {
  const location = useLocation();
  return (
    <ShopListWrapper>
      <Title>Shops</Title>
      <Link to={`/big-burger`} state={{ from: location }}>
        Big-Burger
      </Link>
      <Link to={`/tasty-chicks`} state={{ from: location }}>
        Tasty-Chicks
      </Link>
      <Link to={`/pizza-pasta`} state={{ from: location }}>
        Pizza-Pasta
      </Link>
      <Link to={`/sushi-bar`} state={{ from: location }}>
        Sushi-Bar
      </Link>
      <Link to={`/super-pastry`} state={{ from: location }}>
        Super-Pastry
      </Link>
    </ShopListWrapper>
  );
};

// CardList.propTypes = {
//   usersSet: PropTypes.arrayOf(PropTypes.object),
// };
