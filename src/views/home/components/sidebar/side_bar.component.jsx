/* React */
import React from "react";

/* Plugins */
import { Link } from "react-router-dom";

/* Styles */
import "./side_bar.component.scss";

const SideBar = () => {
    return(
        <aside id="sidebar">
            <div className="header">
                <p className="header__title">Frontend Mentor</p>
                <p className="header__sub_title">Feedback Board</p>
            </div>

            <div className="suggestion_filter">
                <button className="active" type="submit">All</button>
                <button type="submit">UI</button>
                <button type="submit">UX</button>
                <button type="submit">Enhancement</button>
                <button type="submit">Bug</button>
                <button type="submit">Feature</button>
            </div>

            <div className="roadmap">
                <div className="roadmap__header">
                    <p>Roadmap</p>
                    <Link to="/">View</Link>
                </div>

                <div className="roadmap__list">
                    <div className="roadmap__item">
                        <p className="roadmap__item--title">Planned</p>
                        <p className="roadmap__item--count">2</p>
                    </div>
                    <div className="roadmap__item">
                        <p className="roadmap__item--title">In-Progress</p>
                        <p className="roadmap__item--count">3</p>
                    </div>
                    <div className="roadmap__item">
                        <p className="roadmap__item--title">Live</p>
                        <p className="roadmap__item--count">1</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SideBar;