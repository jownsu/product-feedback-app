import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState: {
        product_requests: data.product_requests
    },
    reducers: {
        createFeedback: (state, action) => {
            let new_feedback = {
                id: generateRandomID(),
                comments: [],
                upvotes: 0,
                ...action.payload
            }

            state.product_requests.unshift(new_feedback);
        }
    }
});


function generateRandomID() {
    return Math.floor(100 + Math.random() * 999999);
}

export const { createFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;