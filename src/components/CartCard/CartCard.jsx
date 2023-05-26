// import PropTypes from "prop-types";
import { CartWrapper, Image } from "components/CartCard/CartCard.styled";
import { useContext } from "react";
import { Context } from "App";

export const CartCard = ({ id, imageURL, dishName, price }) => {
  const context = useContext(Context);

  const deleteCartCard = (cardId) => {
    console.log("context.cartCard :>> ", context.cartData);
    return context.setCartData(
      context.cartData.filter((card) => card.id !== cardId)
    );
  };

  return (
    <CartWrapper>
      <Image src={imageURL} alt="" />
      <h2>{dishName}</h2>
      <p>{price}$</p>
      <button onClick={() => deleteCartCard(id)}>Remove from Cart</button>
    </CartWrapper>
  );
};

// ImageGalleryItem.propTypes = {
//   webImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };
