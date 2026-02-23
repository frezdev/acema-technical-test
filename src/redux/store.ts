import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../modules/auth/slices/auth.slice'
import usersReducer from '../modules/users/slices/users.slice'

// ...

export const store = configureStore({
  reducer: {
    authReducer,
    usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch