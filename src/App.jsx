/* Plugins */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Pages */
import Home from "./views/home/home";
import CreateFeedback from "./views/create_feedback/create_feedback";
import Feedbacks from "./views/feedbacks/feedbacks";
import EditFeedback from "./views/edit_feedback/edit_feedback";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />                
                <Route path="/create_feedback" element={<CreateFeedback />} />
                <Route path="/feedbacks/:feedback_id" element={<Feedbacks />} />
                <Route path="/edit_feedback/:feedback_id" element={<EditFeedback />} />
            </Routes>        
        </BrowserRouter>
    )
}

export default App;
