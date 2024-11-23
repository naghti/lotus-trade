import { configureStore } from '@reduxjs/toolkit';
import {counterReducer} from "./counterReducer";
import {biddersReducer} from "./biddersReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bidders: biddersReducer,
  },
});
