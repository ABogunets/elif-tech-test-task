// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Loader } from "components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchUsers } from "services/service-api.js";
import {
  Container,
  DishListWrapper,
} from "components/DishList/DishList.styled";
// import { Dish } from "components/Card/Card";

export const DishList = ({ page }) => {
  console.log("page :>> ", page);
  const [isLoading, setIsLoading] = useState(false);
  const [dishSet, setDishSet] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const dishData = await fetchUsers(page);
        console.log("dishData", dishData);
        setDishSet(dishData);

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
      <DishListWrapper>
        {/* {!isLoading && usersSet.length > 0 && <DishList usersSet={usersSet} />} */}
        {isLoading && <Loader />}
        <ToastContainer autoClose={3000} />
      </DishListWrapper>
    </Container>
  );
};

// CardList.propTypes = {
//   usersSet: PropTypes.arrayOf(PropTypes.object),
// };
