/* React */
import React from "react";

/* Plugins */
import { Link, useNavigate } from "react-router-dom";

/* Reducer */
import { useDispatch, useSelector } from "react-redux";

/* Constants */
import { STATUS } from "../../assets/constants/constants";

/* Styles */
import "./roadmap.scss";

const Roadmap = () => {

    const navigate = useNavigate();
    const { product_requests } = useSelector(state => state.feedback);

    const planned_requests = product_requests.filter(request => STATUS[request.status] === "Planned");
    const in_progress_requests = product_requests.filter(request => STATUS[request.status] === "In-Progress");
    const live_requests = product_requests.filter(request => STATUS[request.status] === "Live");

    return (
        <div className="roadmap">
            <div className="header">
                <div className="header__left">
                    <button type="button" onClick={() => navigate(-1)}><span className="left_icon"></span> Go Back</button>
                    <h3>Roadmap</h3>
                </div>
                <Link to="/create_feedback" className="btn btn--primary">+ Add Feedback</Link>
            </div>

            <div className="status">
                <div className="status__head">
                    <h4>Planned ({planned_requests.length})</h4>
                    <p>Ideas prioritized for research</p>
                </div>
                <div className="status__head">
                    <h4>In-progress ({in_progress_requests.length})</h4>
                    <p>Currently being developed</p>
                </div>
                <div className="status__head">
                    <h4>Live ({live_requests.length})</h4>
                    <p>Released features</p>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;