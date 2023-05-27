import { useState, useEffect } from "react";
import { Loader } from "components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchDishes } from "services/service-api.js";
import { Container } from "components/Shop/DishLayout/DishLayout.styled";
import { DishList } from "components/Shop/DishList/DishList";

export const DishLayout = ({ page }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dishCards, setDishCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const dishData = await fetchDishes(page);
        setDishCards(dishData);
        if (dishData.length === 0) {
          toast.info(`Sorry, there are no dishes in this shop at the moment!`);
        }
      } catch (err) {
        console.log(err.message);
        toast.error(
          `Sorry, something went wrong with the server, please try again.`
        );
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [page]);

  return (
    <Container>
      {!isLoading && dishCards.length > 0 && <DishList dishData={dishCards} />}
      {isLoading && <Loader />}
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
