import {
  Wrapper,
  DishListWrapper,
} from "components/Shop/DishList/DishList.styled";
import { DishCard } from "components/Shop/DishCard/DishCard";

export const DishList = ({ dishData }) => {
  return (
    <Wrapper>
      <DishListWrapper>
        {dishData.map(({ id, imageURL, dishName, price }) => (
          <DishCard
            key={id}
            id={id}
            imageURL={imageURL}
            dishName={dishName}
            price={price}
          />
        ))}
      </DishListWrapper>
    </Wrapper>
  );
};
