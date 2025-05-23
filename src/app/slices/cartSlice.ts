import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../features/product/types";


interface CartItem extends Product {
  quantity: number;
  userName:string | null;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

interface AddToCartPayload {
  product: Product;
  userName: string | null;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
       const { product, userName } = action.payload;
      const existing = state.items.find((item) => item.id === product.id && item.userName===userName);
      console.log("dodajemo ahha")
      if (existing) {
        existing.quantity += 1;
      } else {
       
        state.items.push({ ...product, quantity: 1,userName: userName});
      }
    },
    removeFromCartByQuantity: (state, action: PayloadAction<number>) => {

      state.items = state.items.map((item) => {
  if (item.id === action.payload) {
    if (item.quantity > 1) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return null; 
  }
  return item;
}).filter((item): item is CartItem => item !== null);
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {

      state.items = state.items.filter((item): item is CartItem => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCartByQuantity,removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;