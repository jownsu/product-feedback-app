import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";

let product_requests;
let localstorage_product_request = localStorage.getItem("product_requests");

if(localstorage_product_request){
    product_requests = JSON.parse(localstorage_product_request);
}
else{
    product_requests = data.product_requests;
    localStorage.setItem("product_requests", JSON.stringify(data.product_requests));
}

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState: {
        current_user: data.current_user,
        product_requests: product_requests
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

            saveToLocalStorage(state.product_requests);
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

            saveToLocalStorage(state.product_requests);
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

            saveToLocalStorage(state.product_requests);
        },
        editFeedback: (state, action) => {
            state.product_requests = state.product_requests.map(feedback => {
                if(feedback.id === +action.payload.id){
                    return {
                        ...feedback,
                        ...action.payload
                    }
                }
                return feedback;
            });

            saveToLocalStorage(state.product_requests);
        },
        deleteFeedback: (state, action) => {
            let { id } = action.payload;
            state.product_requests = state.product_requests.filter(feedback => feedback.id !== +id);

            saveToLocalStorage(state.product_requests);
        },
        toggleVote: (state, action) => {
            let { id } = action.payload;

            state.product_requests = state.product_requests.map(feedback => {
                if(feedback.id == +id){
                    return {
                        ...feedback,
                        upvotes: feedback.is_upvoted ? feedback.upvotes - 1 : feedback.upvotes + 1,
                        is_upvoted: !feedback.is_upvoted
                    }
                }
                return feedback;
            });

            saveToLocalStorage(state.product_requests);
        }
    }
});


function generateRandomID() {
    return Math.floor(100 + Math.random() * 999999);
}

const saveToLocalStorage = (product_requests) => {
    localStorage.setItem("product_requests", JSON.stringify(product_requests));
}

export const { 
    createFeedback, 
    postComment, 
    postReply, 
    editFeedback,
    deleteFeedback,
    toggleVote 
} = feedbackSlice.actions;
export default feedbackSlice.reducer;