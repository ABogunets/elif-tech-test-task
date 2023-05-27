import axios from "axios";

axios.defaults.baseURL = "https://646e1a959c677e23218b15ff.mockapi.io";

export const fetchDishes = async (page) => {
  const response = await axios.get(`/dishes?limit=10&page=${page}`);
  return response.data;
};

export const addOrder = async (order) => {
  const response = await axios.post(`/cart`, order);
  return response.data;
};
