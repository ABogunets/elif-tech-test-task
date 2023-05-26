// import PropTypes from 'prop-types';
import {
  CartListWrapper,
  Container,
} from "components/CartList/CartList.styled";
import { CartCard } from "components/CartCard/CartCard";

import { useContext } from "react";
import { Context } from "App";

export const CartList = () => {
  const context = useContext(Context);
  console.log("ContextData :>> ", context.cartData);
  return (
    <Container>
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
    </Container>
  );
};

// ImageGallery.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     })
//   ),
// };
