/* React */
import React, { useState } from "react";

/* Component */
import RequestCard from "./components/request_card/request_card.component";

/* Plugins */
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

/* Reducer */
import { useDispatch, useSelector } from "react-redux";
import { toggleVote } from "../../redux/feedback_slice";

/* Constants */
import { STATUS, BP } from "../../assets/constants/constants";

/* Styles */
import "./roadmap.scss";

const Roadmap = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const is_mobile = useMediaQuery({query: `(max-width: ${BP.phone})`});

    const [active_status, setActiveStatus] = useState("Planned");
    const { product_requests } = useSelector(state => state.feedback);

    const planned_requests = product_requests.filter(request => STATUS[request.status] === "Planned");
    const in_progress_requests = product_requests.filter(request => STATUS[request.status] === "In-Progress");
    const live_requests = product_requests.filter(request => STATUS[request.status] === "Live");

    return (
        <div className="roadmap_page">
            <div className="header">
                <div className="header__left">
                    <button type="button" onClick={() => navigate(-1)}><span className="left_icon"></span> Go Back</button>
                    <h3>Roadmap</h3>
                </div>
                <Link to="/create_feedback" className="btn btn--primary">+ Add Feedback</Link>
            </div>

            {
                is_mobile && 
                    <div className="status_tab">
                        <button 
                            className={active_status === "Planned" ? "active active--planned" : ""}
                            type="button"
                            onClick={() => setActiveStatus("Planned")}
                        >
                            Planned ({planned_requests.length})
                        </button>
                        <button 
                            className={active_status === "In-Progress" ? "active active--in-progress" : ""}
                            type="button"
                            onClick={() => setActiveStatus("In-Progress")}
                        >
                            In-progress ({in_progress_requests.length})
                        </button>
                        <button 
                            className={active_status === "Live" ? "active active--live" : ""}
                            type="button"
                            onClick={() => setActiveStatus("Live")}
                        >
                            Live ({live_requests.length})
                        </button>
                    </div>
            }

            <div className="requests">
                {
                    (!is_mobile || (is_mobile && active_status === "Planned")) &&
                        <div className="requests__block">
                            <div className="requests__head">
                                <h4>Planned ({planned_requests.length})</h4>
                                <p>Ideas prioritized for research</p>
                            </div>
                            {
                                !!planned_requests.length && 
                                    planned_requests.map(request => {
                                        return (
                                            <RequestCard 
                                                key={request.id}
                                                request={request} 
                                                onUpVoteClick={(id) => dispatch(toggleVote({id}))}
                                            />
                                        )
                                    })
                            }
                        </div>
                }
                {
                    (!is_mobile || (is_mobile && active_status === "In-Progress")) &&
                        <div className="requests__block">
                            <div className="requests__head">
                                <h4>In-progress ({in_progress_requests.length})</h4>
                                <p>Currently being developed</p>
                            </div>
                            {
                                !!in_progress_requests.length && 
                                    in_progress_requests.map(request => {
                                        return (
                                            <RequestCard 
                                                request={request} 
                                                onUpVoteClick={(id) => dispatch(toggleVote({id}))}
                                            />
                                        )
                                    })
                            }
                        </div>
                }
                {
                    (!is_mobile || (is_mobile && active_status === "Live")) &&
                        <div className="requests__block">
                            <div className="requests__head">
                                <h4>Live ({live_requests.length})</h4>
                                <p>Released features</p>
                            </div>
                            {
                                !!live_requests.length && 
                                    live_requests.map(request => {
                                        return (
                                            <RequestCard 
                                                request={request} 
                                                onUpVoteClick={(id) => dispatch(toggleVote({id}))}
                                            />
                                        )
                                    })
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Roadmap;