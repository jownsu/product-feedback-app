/* React */
import React from "react";

/* Styles */
import "./no_suggestion.component.scss";

const NoSuggestion = () => {
    return(
        <div className="no_suggestion">
            <div className="no_suggestion__icon"></div>
            <p className="no_suggestion__title">There is no feedback yet.</p>
            <p className="no_suggestion__description">Got a suggestion? Found a bug that needs to be squashed?</p>
            <p className="no_suggestion__description">We love hearing about new ideas to improve our app.</p>
            <button type="button" className="btn btn--primary">+ Add Feedback</button>
        </div>
    )
}

export default NoSuggestion;