import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState: {
        current_user: data.current_user,
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
        },
        postComment: (state, action) => {
            let { id, content } = action.payload;

            let new_comment = {
                id: generateRandomID(),
                content,
                user: {...state.current_user}
            };

            state.product_requests = state.product_requests.map(feedback => {
                if(feedback.id === +id){
                    return {
                        ...feedback,
                        comments: [...feedback.comments, new_comment]
                    }
                }
                return feedback;
            });
        },
        postReply: (state, action) => {
            let { id, comment_id, content, replying_to } = action.payload;

            let new_reply = {
                id: generateRandomID(),
                content,
                replying_to,
                user: {...state.current_user}
            };

            state.product_requests = state.product_requests.map(feedback => {
                if(feedback.id === +id){
                    return {
                        ...feedback,
                        comments: feedback.comments.map(comment => {

                            if(comment.id === +comment_id){
                                let replies_list = comment.replies ?? [];

                                return {
                                    ...comment,
                                    replies: [...replies_list, new_reply]
                                };
                            }

                            return comment;
                        })
                    }
                }
                return feedback;
            });
        }
    }
});


function generateRandomID() {
    return Math.floor(100 + Math.random() * 999999);
}

export const { createFeedback, postComment, postReply } = feedbackSlice.actions;
export default feedbackSlice.reducer;