/* React */
import React from "react";

/* Styles */
import "./feedback_not_found.component.scss";

const FeedbackNotFound = () => {
    return(
        <div className="feedback_not_found">
            <div className="feedback_not_found__icon"></div>
            <p className="feedback_not_found__title">Feedback not found.</p>
            <p className="feedback_not_found__description">Oops! It seems like we couldn't locate the feedback you're looking for.</p>
        </div>
    )
}

export default FeedbackNotFound;