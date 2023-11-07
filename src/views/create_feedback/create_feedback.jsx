/* React */
import React from "react";

import { Link } from "react-router-dom";

/* Styles */
import "./create_feedback.scss";

const CreateFeedback = () => {
    return(
        <div className="create_feedback">
            <Link 
                to="/" 
                className="back"
            >
                <span className="back__icon"></span> 
                Go back
            </Link>
        </div>
    )
}

export default CreateFeedback;