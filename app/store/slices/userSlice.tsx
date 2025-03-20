import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the user state
interface UserState {
  user: {
    name: string | null;
    email: string | null;
    password: string | null;
    googleId: string | null;
    isVerified: boolean;
  };
  token:string | null;

}

// Initial state for the user
const initialState: UserState = {
  user:{
    name: null,
    email: null,
    password: null,
    googleId: null,
    isVerified:false,
  },
  token: null,
};

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set user details
    setUser: (
      state,
      action: PayloadAction<{ user: UserState['user'] , token:string}>
    ) => {
      const {user,token } = action.payload;
      state.user = user;
      state.token = token;
    },
  },
});

export const { setUser } = userSlice.actions;

// Export the reducer to be added to the store
export default userSlice.reducer;
