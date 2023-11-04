import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../redux/feedback_slice";

export const store = configureStore({
    reducer: {
        feedback: feedbackReducer
    }
});