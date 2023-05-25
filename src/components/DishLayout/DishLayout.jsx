// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Loader } from "components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchUsers } from "services/service-api.js";
import { Container } from "components/DishLayout/DishLayout.styled";
import { DishList } from "components/DishList/DishList";

export const DishLayout = ({ page }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dishCards, setDishCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const dishData = await fetchUsers(page);
        console.log("dishData", dishData);
        setDishCards(dishData);

        if (dishData.length === 0) {
          toast.info(`Sorry, there are no users in the collection!`);
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

// CardList.propTypes = {
//   usersSet: PropTypes.arrayOf(PropTypes.object),
// };
