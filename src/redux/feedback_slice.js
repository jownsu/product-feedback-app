import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState: {
        product_requests: data.product_requests
    },
    reducers: {}
});

export const {} = feedbackSlice.actions;
export default feedbackSlice.reducer;