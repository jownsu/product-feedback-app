/* React */
import React from "react";

/* Plugins */
import { Link } from "react-router-dom";

/* Constants */
import { CATEGORIES } from "../../../../assets/constants/constants";

/* Styles */
import "./suggestion_item.component.scss";

const SuggestionItem = ({product}) => {
    return(
        <div className="suggestion">
            <button type="button" className="upvotes">
                <span className="upvotes__icon"></span>
                <p className="upvotes__count">{product.upvotes}</p>
            </button>
            <div className="product">
                <Link to={`/feedbacks/${product.id}`} className="product__title">{product.title}</Link>
                <p className="product__description">{product.description}</p>
                <div className="product__category">{CATEGORIES[product.category]}</div>
            </div>
            <div className="comment">
                <span className="comment__icon"></span>
                <p className="comment__count">{product?.comments?.length}</p>
            </div>
        </div>
    )
}

export default SuggestionItem