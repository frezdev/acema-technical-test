import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UsersResult } from "../interfaces/users";

interface UsersSliceState {
  users: UsersResult[]
}
const initialState: UsersSliceState = {
  users: [],
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UsersResult[]>) => {
      state.users = action.payload;
    },
    editUser: (state, action: PayloadAction<{ sha256: string, data: Partial<User> }>) => {
      const { sha256, data } = action.payload;
      const userIndex = state.users.findIndex((user) => user.user.sha256 === sha256);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], user: { ...state.users[userIndex].user, ...data } };
      }
    },
    deleteUser: (state, action: PayloadAction<{ sha256: string }>) => {
      const { sha256 } = action.payload;
      state.users = state.users.filter(user => user.user.sha256 !== sha256);
    }
  }
})

export const { setUsers, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;