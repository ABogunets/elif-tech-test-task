// import PropTypes from "prop-types";
// import { useState } from "react";
import {
  Container,
  DishListWrapper,
} from "components/DishList/DishList.styled";
// import { Dish } from "components/Card/Card";

export const DishList = ({ dishSet }) => {
  return (
    <Container>
      <DishListWrapper>
        {/* {dishSet.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))} */}
      </DishListWrapper>
    </Container>
  );
};

// CardList.propTypes = {
//   usersSet: PropTypes.arrayOf(PropTypes.object),
// };
