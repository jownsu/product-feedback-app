/* React */
import React from "react";

/* Plugins */
import { Link } from "react-router-dom";

/* Constants */
import { STATUS, CATEGORY } from "../../../../assets/constants/constants";

/* Styles */
import "./request_card.component.scss"

const RequestCard = ({request, onUpVoteClick = () => {}}) => {
    const { title, status, description, category } = request;
  
    return(
        <div className={`request_card request_card--${STATUS[status]}`}>
            <p className="request_card__status">{STATUS[status]}</p>
            <Link to={`/feedbacks/${request.id}`} className="request_card__title">{title}</Link>
            <p className="request_card__description">{description}</p>
            <div className="request_card__category">{CATEGORY[category]}</div>
            <div className="request_card__foot">
                <button 
                    type="button" 
                    className={`upvotes ${request.is_upvoted ? "upvotes--active" : ""}`}
                    onClick={() => onUpVoteClick(request.id)}
                >
                    <span className="upvotes__icon"></span>
                    <p className="upvotes__count">{request.upvotes}</p>
                </button>
                <div className="comment_count">
                    <span className="comment_count__icon"></span>
                    <p className="comment_count__count">{request?.comments?.length}</p>
                </div>
            </div>
        </div>
    )
}

export default RequestCard;