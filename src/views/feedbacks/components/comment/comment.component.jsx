/* React */
import React, { useState } from "react";

/* Component */
import Reply from "../reply/reply.component";
import PostReply from "../post_reply/post_reply.component";

/* Style */
import "./comment.component.scss";

const Comment = ({comment, onReply = () => {}}) => {

    const [show_reply, setShowReply] = useState(false);
    const [replying_to, setReplyingTo] = useState(null);

    const onReplyClick = (replying_to = null) => {
        let username = replying_to ?? comment.user.username;

        setShowReply(prev_state => {
            setReplyingTo(prev_state ? null : username);
            return !prev_state;
        });
    }

    const handleCommentReply = (content) => {
        onReply({
            comment_id: comment.id,
            content,
            replying_to
        });
        setShowReply(false);
        setReplyingTo(null);
    }

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
                <button 
                    type="button" 
                    className="comment__reply"
                    onClick={() => onReplyClick()}
                >
                    Reply
                </button>
            </div>

            <p className={`comment__content ${comment?.replies && comment.replies.length ? "comment__content--with_reply" : ""}`}>{comment.content}</p>

            {
                comment?.replies && comment.replies.length && 
                    <div className="replies_container">
                        { 
                            comment.replies.map(reply => (
                                <Reply 
                                    onReplyClick={onReplyClick} 
                                    reply={reply}
                                />
                            )) 
                        }
                    </div>
            }
            { show_reply && <PostReply onSubmit={handleCommentReply} /> }
        </div>
    )
}

export default Comment;