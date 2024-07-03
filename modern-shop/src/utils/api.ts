import { selector } from "recoil";
import axios from "axios";

const API_KEY = {
  key: import.meta.env.VITE_FAKE_STORE_API,
};

export const fetchProductsSelector = selector({
  key: "fetchProductsSelector",
  get: async () => {
    try {
      const response = await axios.get(`${API_KEY.key}/products`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products: ", error);
      throw error;
    }
  },
});
