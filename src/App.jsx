import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const Shop = lazy(() => import("pages/Shop-page"));
const Cart = lazy(() => import("pages/Cart-page"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
