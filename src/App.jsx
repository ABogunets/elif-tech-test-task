import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { DishList } from "components/DishList/DishList";

const ShopPage = lazy(() => import("pages/Shop-page"));
const CartPage = lazy(() => import("pages/Cart-page"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/shop" />} />
        <Route path="shop" element={<ShopPage />}>
          <Route path="big-burger" element={<DishList page={1} />} />
          <Route path="tasty-chicks" element={<DishList page={2} />} />
          <Route path="pizza-pasta" element={<DishList page={3} />} />
          <Route path="sushi-bar" element={<DishList page={4} />} />
          <Route path="super-pastry" element={<DishList page={5} />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default App;
