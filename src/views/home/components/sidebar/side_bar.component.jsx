/* React */
import React from "react";

/* Constants */
import { CATEGORY } from "../../../../assets/constants/constants";

/* Plugins */
import { Link } from "react-router-dom";

/* Styles */
import "./side_bar.component.scss";

const SideBar = ({category, setCategory = () => {}}) => {
    return(
        <aside id="sidebar">
            <div className="header">
                <p className="header__title">Frontend Mentor</p>
                <p className="header__sub_title">Feedback Board</p>
            </div>

            <div className="suggestion_filter">
                <button 
                    className={category === CATEGORY.ALL ? "active" : ""} 
                    type="submit"
                    onClick={() => setCategory(CATEGORY.ALL)}
                >
                    All
                </button>
                <button 
                    className={category === CATEGORY.UI ? "active" : ""}
                    type="submit"
                    onClick={() => setCategory(CATEGORY.UI)}
                >
                    UI
                </button>
                <button 
                    className={category === CATEGORY.UX ? "active" : ""} 
                    type="submit"
                    onClick={() => setCategory(CATEGORY.UX)}
                >
                    UX
                </button>
                <button 
                    className={category === CATEGORY.ENHANCEMENT ? "active" : ""} 
                    type="submit"
                    onClick={() => setCategory(CATEGORY.ENHANCEMENT)}
                >
                    Enhancement
                </button>
                <button 
                    className={category === CATEGORY.BUG ? "active" : ""} 
                    type="submit"
                    onClick={() => setCategory(CATEGORY.BUG)}
                >
                    Bug
                </button>
                <button 
                    className={category === CATEGORY.FEATURE ? "active" : ""} 
                    type="submit"
                    onClick={() => setCategory(CATEGORY.FEATURE)}
                >
                    Feature
                </button>
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