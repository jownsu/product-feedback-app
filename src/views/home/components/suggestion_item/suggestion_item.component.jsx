/* React */
import React from "react";

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
                <p className="product__title">{product.title}</p>
                <p className="product__description">{product.description}</p>
                <div className="product__category">{product.category}</div>
            </div>
            <div className="comment">
                <span className="comment__icon"></span>
                <p className="comment__count">{product?.comments?.length}</p>
            </div>
        </div>
    )
}

export default SuggestionItem