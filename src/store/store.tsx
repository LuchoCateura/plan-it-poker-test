import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users/userSlice";
import roomReducer from "./rooms/roomSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    rooms: roomReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
