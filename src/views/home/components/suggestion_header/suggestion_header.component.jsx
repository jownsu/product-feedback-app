/* React */
import React from "react";

/* Plugins */
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

/* Styles */
import "./suggestion_header.component.scss";

const SuggestionHeader = () => {
    return (
        <div id="suggestion_header">
            <div className="suggestion">
                <span className="suggestion__icon"></span>
                <p className="suggestion__count">6 Suggestions</p>
            </div>

            <Dropdown className="suggestion_sort_dropdown">
                <Dropdown.Toggle>
                    Sort by :<span>Most Upvotes</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className="active">Most Upvotes</Dropdown.Item>
                    <Dropdown.Item>Least Upvotes</Dropdown.Item>
                    <Dropdown.Item>Most Comments</Dropdown.Item>
                    <Dropdown.Item>Least Comments</Dropdown.Item>
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