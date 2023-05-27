import { DishWrapper, Image } from "components/Shop/DishCard/DishCard.styled";
import { useContext } from "react";
import { Context } from "App";
import defaultDishImg from "assets/default-dish.jpg";

export const DishCard = ({ id, imageURL, dishName, price }) => {
  const context = useContext(Context);
  const dishCard = [{ id, imageURL, dishName, price, quantity: 1 }];
  return (
    <DishWrapper>
      <Image src={imageURL ? imageURL : defaultDishImg} alt={dishName} />
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
