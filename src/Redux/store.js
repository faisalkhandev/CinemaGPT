import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        gpt: gptSlice,
    }
});
