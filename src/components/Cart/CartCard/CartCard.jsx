// import PropTypes from "prop-types";
import { useState } from "react";
import {
  CartCardWrapper,
  ImageWrapper,
  DataWrapper,
  Input,
} from "components/Cart/CartCard/CartCard.styled";
import { useContext } from "react";
import { Context } from "App";

export const CartCard = ({ id, imageURL, dishName, price }) => {
  const context = useContext(Context);
  const [dishQuantity, setDishQuantity] = useState(1);

  const deleteCartCard = (cardId) => {
    return context.setCartData(
      context.cartData.filter((card) => card.id !== cardId)
    );
  };

  const handleChange = (e) => {
    const quantityValue = e.currentTarget.value;
    setDishQuantity(quantityValue);
    const updatedCartCard = context.cartData.map((card) => {
      if (card.id === id) {
        return { ...card, quantity: quantityValue };
      } else {
        return card;
      }
    });
    return context.setCartData(updatedCartCard);
  };

  return (
    <CartCardWrapper>
      <ImageWrapper>
        <img src={imageURL} alt="" />
        <button onClick={() => deleteCartCard(id)}>Remove from Cart</button>
      </ImageWrapper>
      <DataWrapper>
        <h2>{dishName}</h2>
        <p>{price}$</p>
        <Input
          type="number"
          name="quantity"
          step="1"
          min="1"
          max="10"
          value={dishQuantity}
          onChange={handleChange}
        />
      </DataWrapper>
    </CartCardWrapper>
  );
};

// ImageGalleryItem.propTypes = {
//   webImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };
