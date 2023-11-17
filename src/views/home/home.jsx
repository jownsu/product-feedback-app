/* React */
import React, { useState, useEffect } from "react";

/* Redux */
import { useSelector } from "react-redux";

/* Constants */
import { CATEGORY, SORT } from "../../assets/constants/constants";

/* Components */
import SideBar from "./components/sidebar/side_bar.component";
import SuggestionHeader from "./components/suggestion_header/suggestion_header.component";
import SuggestionItem from "./components/suggestion_item/suggestion_item.component";
import NoSuggestion from "./components/no_suggestion/no_suggestion.component";

/* Styles */
import "./home.scss";

function Home() {

    const { product_requests } = useSelector(state => state.feedback);
    const [category, setCategory] = useState(CATEGORY.ALL);
    const [requests, setRequests] = useState(product_requests);
    const [sort, setSort] = useState(SORT.MOST_UPVOTES);

    useEffect(() => {
        let copy_product_requests = [...requests];

        switch (sort) {
            case SORT.MOST_UPVOTES:
                copy_product_requests.sort((a, b) => b.upvotes - a.upvotes);
                break;
            case SORT.LEAST_UPVOTES:
                copy_product_requests.sort((a, b) => a.upvotes - b.upvotes);
                break;
            case SORT.MOST_COMMENTS:
                copy_product_requests.sort((a, b) =>  b.comments.length - a.comments.length);
                break;
            case SORT.LEAST_COMMENTS:
                copy_product_requests.sort((a, b) =>  a.comments.length - b.comments.length);
                break;
            default:
                copy_product_requests.sort((a, b) => b.upvotes - a.upvotes);
        }

        setRequests(copy_product_requests);
    }, [sort, category]);


    const onChangeCategory = (category) => {
        setCategory(category);
        let filtered_product_request;
        if(category === CATEGORY.ALL){
            filtered_product_request = product_requests;
        }
        else{
            filtered_product_request = product_requests.filter(product => product.category == category);
        }
        setRequests(filtered_product_request);
    }

    return (
        <div id="home">
            <SideBar 
                category={category}
                setCategory={onChangeCategory}
            />
            <main>
                <SuggestionHeader 
                    sort={sort}
                    setSort={(sort) => setSort(sort)}
                    requests_count={requests.length}
                />
                <div id="suggestions_container">
                    {
                        !!requests.length &&
                            requests.map(product => <SuggestionItem key={product.id} product={product} />)
                    }
                    {
                        !requests.length &&
                            <NoSuggestion />
                    }
                </div>
            </main>
        </div>
    )
}

export default Home;