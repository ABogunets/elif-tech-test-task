// import PropTypes from 'prop-types';
import { DishListWrapper } from "components/DishList/DishList.styled";
import { DishCard } from "components/DishCard/DishCard";

export const DishList = ({ dishData, onClick }) => {
  return (
    <DishListWrapper>
      {dishData.map(({ id, imageURL, dishName, price }) => (
        <DishCard
          key={id}
          imageURL={imageURL}
          dishName={dishName}
          price={price}

          // onClick={onClick}
        />
      ))}
    </DishListWrapper>
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
