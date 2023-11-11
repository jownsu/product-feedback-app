/* React */
import React from "react";

/* Components */
import SuggestionItem from "../home/components/suggestion_item/suggestion_item.component";
import Comment from "./components/comment/comment.component";

/* Plugins */
import { useParams, Link } from "react-router-dom";

/* Redux */
import { useSelector } from "react-redux";

/* Styles */
import "./feedbacks.scss";

const Feedbacks = () => {

    const { feedback_id } = useParams();
    const { product_requests } = useSelector(state => state.feedback);

    const selected_feedback = product_requests.find(product => product.id == feedback_id)

    return(
        <div className="feedbacks">
            <div className="header">
                <Link 
                    to="/" 
                    className="back"
                >
                    <span className="back__icon"></span> 
                    Go back
                </Link>
                
                <Link 
                    to={`/edit_feedback/${feedback_id}`} 
                    className="btn btn--secondary"
                >
                    Edit Feedback
                </Link>
            </div>

            <SuggestionItem product={selected_feedback} />

            <div className="comments_container">
                <h3>{selected_feedback.comments.length} Comments</h3>
                {
                    selected_feedback.comments.map(comment => <Comment comment={comment} />)
                }
            </div>
         </div>
    )
}

export default Feedbacks;