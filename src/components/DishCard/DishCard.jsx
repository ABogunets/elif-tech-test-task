// import PropTypes from "prop-types";
import { DishWrapper, Image } from "components/DishCard/DishCard.styled";
import { useContext } from "react";
import { Context } from "App";

export const DishCard = ({ id, imageURL, dishName, price }) => {
  const context = useContext(Context);
  const dishCard = [{ id, imageURL, dishName, price }];
  return (
    // <DishWrapper onClick={() => onClick(largeImage)}>
    <DishWrapper>
      <Image src={imageURL} alt="" />
      <h2>{dishName}</h2>
      <p>{price}$</p>
      <button
        onClick={() =>
          context.setCartData((prevCartData) => [...prevCartData, ...dishCard])
        }
      >
        Add to Cart
      </button>
    </DishWrapper>
  );
};

// ImageGalleryItem.propTypes = {
//   webImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };
