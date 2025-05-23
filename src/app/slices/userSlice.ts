import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../features/authentication/types';

interface UserState extends User {
  login:boolean
}

const initialState: UserState = {
  username: null,
  password: null,
   login: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ username: string | null; password: string | null }>) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.login    = true;
    },
    clearUser(state) {
      state.username = null;
      state.password = null;
      state.login    = false;

    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
