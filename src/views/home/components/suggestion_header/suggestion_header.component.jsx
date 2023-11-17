/* React */
import React from "react";

/* Constants */
import { SORT } from "../../../../assets/constants/constants";

/* Plugins */
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

/* Styles */
import "./suggestion_header.component.scss";

const SuggestionHeader = ({sort, setSort = () => {}, requests_count}) => {
    return (
        <div id="suggestion_header">
            <div className="suggests">
                <span className="suggests__icon"></span>
                <p className="suggests__count">{requests_count} Suggestions</p>
            </div>

            <Dropdown className="suggestion_sort_dropdown">
                <Dropdown.Toggle>
                    Sort by :<span>{SORT[sort]}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item 
                        className={sort === SORT.MOST_UPVOTES ? "active" : ""}
                        onClick={() => setSort(SORT.MOST_UPVOTES)}
                    >
                        Most Upvotes
                    </Dropdown.Item>
                    <Dropdown.Item 
                        className={sort === SORT.LEAST_UPVOTES ? "active" : ""}
                        onClick={() => setSort(SORT.LEAST_UPVOTES)}
                    >
                        Least Upvotes
                    </Dropdown.Item>
                    <Dropdown.Item 
                        className={sort === SORT.MOST_COMMENTS ? "active" : ""}
                        onClick={() => setSort(SORT.MOST_COMMENTS)}
                    >
                        Most Comments
                    </Dropdown.Item>
                    <Dropdown.Item 
                        className={sort === SORT.LEAST_COMMENTS ? "active" : ""}
                        onClick={() => setSort(SORT.LEAST_COMMENTS)}
                    >
                        Least Comments
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Link 
                to="/create_feedback"
                type="button" 
                className="add_feedback_btn btn btn--primary"
            >
                + Add Feedback
            </Link>
        </div>
    )
}

export default SuggestionHeader;