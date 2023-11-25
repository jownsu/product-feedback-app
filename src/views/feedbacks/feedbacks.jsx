/* React */
import React from "react";

/* Redux */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postComment, postReply, toggleVote } from "../../redux/feedback_slice";

/* Components */
import SuggestionItem from "../home/components/suggestion_item/suggestion_item.component";
import Comment from "./components/comment/comment.component";
import AddComment from "./components/add_comment/add_comment.component";
import FeedbackNotFound from "./components/feedback_not_found/feedback_not_found.component";

/* Plugins */
import { useParams, Link } from "react-router-dom";

/* Redux */
import { useSelector } from "react-redux";

/* Styles */
import "./feedbacks.scss";

const Feedbacks = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { feedback_id } = useParams();
    const { product_requests } = useSelector(state => state.feedback);

    const selected_feedback = product_requests.find(product => product.id == feedback_id);

    const handleReply = (data) => {
        dispatch(postReply({
            id: selected_feedback.id,
            ...data
        }));
    }

    const handleUpVoteClick = (id) => {
        dispatch(toggleVote({id}));
    }

    return(
        <div className="feedbacks">
            <div className="header">
                <button 
                    type="button"
                    onClick={() => navigate(-1)}
                    className="back"
                >
                    <span className="back__icon"></span> 
                    Go back
                </button>
                {
                    selected_feedback &&
                        <Link 
                            to={`/edit_feedback/${feedback_id}`} 
                            className="btn btn--secondary"
                        >
                            Edit Feedback
                        </Link>
                }
            </div>
            {
                selected_feedback
                    ? <>
                        <SuggestionItem 
                            product={selected_feedback} 
                            onUpVoteClick={handleUpVoteClick}    
                        />
                        <div className="comments_container">
                            <h3>{selected_feedback.comments.length} Comments</h3>
                            { selected_feedback.comments.map(comment => <Comment comment={comment} onReply={handleReply} />) }
                        </div>
                        <AddComment onSubmit={(content) => dispatch(postComment({id: feedback_id, content}))} />
                    </>
                    : <FeedbackNotFound />
            }
        </div>
    )
}

export default Feedbacks;