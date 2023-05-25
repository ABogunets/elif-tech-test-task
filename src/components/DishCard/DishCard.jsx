// import PropTypes from "prop-types";
import { DishWrapper, Image } from "components/DishCard/DishCard.styled";

export const DishCard = ({ imageURL, dishName, price, onClick }) => {
  return (
    // <DishWrapper onClick={() => onClick(largeImage)}>
    <DishWrapper>
      <Image src={imageURL} alt="" />
      <h2>{dishName}</h2>
      <p>{price}$</p>
      <button>Add to Cart</button>
    </DishWrapper>
  );
};

// ImageGalleryItem.propTypes = {
//   webImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };
