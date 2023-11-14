/* React */
import React, { useState } from "react";

/* Style */
import "./add_comment.component.scss";

const AddComment = ({onSubmit = () => {}}) => {
    
    const [content, setContent] = useState("");
    
    const handleContentChange = (event) => {
        let new_content = event.target.value;

        if(new_content.length <= 255){
            setContent(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(content);
        setContent("");
    }

    return(
        <form className="add_comment_form" onSubmit={handleSubmit}>
            <h3>Add Comment</h3>
            <textarea value={content} name="content" onChange={handleContentChange}></textarea>
            <div>
                <p>{255 - content.length} characters left</p>
                <button 
                    type="submit" 
                    className="btn btn--primary"
                    disabled={!content.length}
                >
                    Post Comment
                </button>
            </div>
        </form>
    )
}

export default AddComment;