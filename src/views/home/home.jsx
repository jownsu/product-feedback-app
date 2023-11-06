/* React */
import React from "react";

/* Redux */
import { useSelector } from "react-redux";

/* Components */
import SideBar from "./components/sidebar/side_bar.component";
import SuggestionHeader from "./components/suggestion_header/suggestion_header.component";
import SuggestionItem from "./components/suggestion_item/suggestion_item.component";
import NoSuggestion from "./components/no_suggestion/no_suggestion.component";

/* Styles */
import "./home.scss";

function Home() {

    const { product_requests } = useSelector(state => state.feedback);

    return (
        <div id="home">
            <SideBar />
            <main>
                <SuggestionHeader />
                <div id="suggestions_container">
                    {
                        !!product_requests.length &&
                            product_requests.map(product => <SuggestionItem product={product} />)
                    }

                    {
                        !product_requests.length &&
                            <NoSuggestion />
                    }
                </div>
            </main>
        </div>
    )
}

export default Home;