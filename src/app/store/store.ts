import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
 import themeReducer from "../slices/themeSlice";
 import userReducer from "../slices/userSlice";
 import languageReducer from "../slices/languageSlice";


export const store = configureStore({
  reducer: {
    cart:cartReducer,
    theme: themeReducer,
    user:userReducer,
    language:languageReducer
   
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;