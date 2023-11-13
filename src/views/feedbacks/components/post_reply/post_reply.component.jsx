/* React */
import React, { useState } from "react";

/* Styles */
import "./post_reply.component.scss";

const PostReply = () => {
    
    const [content, setContent] = useState("");


    const handleChange = (event) => {
        let new_content = event.target.value;

        if(new_content.length <= 255){
            setContent(event.target.value);
        }
    }

    return(
        <form className="reply_form">
            <textarea value={content} onChange={handleChange} name="content"></textarea>
            <button 
                type="submit" 
                className="btn btn--primary"
                disabled={!content.length}
            >
                Post Reply
            </button>
        </form>
    )
}

export default PostReply;