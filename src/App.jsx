/* Plugins */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Pages */
import Home from "./views/home/home";
import CreateFeedback from "./views/create_feedback/create_feedback";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />                
                <Route path="/create_feedback" element={<CreateFeedback />} />                
            </Routes>        
        </BrowserRouter>
    )
}

export default App;
