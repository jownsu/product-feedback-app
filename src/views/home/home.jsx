/* React */
import React from "react";

/* Components */
import SideBar from "./components/sidebar/side_bar.component";
import SuggestionHeader from "./components/suggestion_header/suggestion_header.component";

/* Styles */
import "./home.scss";

function Home() {
    return (
        <div id="home">
            <SideBar />
            <main>
                <SuggestionHeader />
            </main>
        </div>
    )
}

export default Home;