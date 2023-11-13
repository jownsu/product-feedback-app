/* React */
import React from "react";

/* Component */
import Reply from "../reply/reply.component";
import PostReply from "../post_reply/post_reply.component";

/* Style */
import "./comment.component.scss";

const Comment = ({comment}) => {
    return(
        <div className={`comment ${(comment?.replies && comment?.replies.length) ? "comment--reply" : "" }`}>
            <div className="comment__head">
                <img 
                    src={comment.user.image} 
                    alt={comment.user.username} 
                    className="comment__avatar"
                />
                <div className="comment__user">
                    <p className="comment__user--fullname">{comment.user.name}</p>
                    <p className="comment__user--username">@{comment.user.username}</p>
                </div>
                <button type="button" className="comment__reply">Reply</button>
            </div>
            <p className="comment__content">{comment.content}</p>

            {
                comment?.replies && comment.replies.length && 
                    <div className="replies_container">
                        { comment.replies.map(reply => <Reply reply={reply} />) }
                        <PostReply />
                    </div>
            }

            <PostReply />
        </div>
    )
}

export default Comment;