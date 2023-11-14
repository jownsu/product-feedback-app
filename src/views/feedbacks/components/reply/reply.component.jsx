/* React */
import React from "react";

/* Style */
import "./reply.component.scss";

const Reply = ({reply, onReplyClick = () => {}}) => {
    return(
        <div className="reply">
            <div className="reply__head">
                <img 
                    src={reply.user.image} 
                    alt={reply.user.username} 
                    className="reply__avatar"
                />
                <div className="reply__user">
                    <p className="reply__user--fullname">{reply.user.name}</p>
                    <p className="reply__user--username">@{reply.user.username}</p>
                </div>
                <button 
                    type="button" 
                    className="reply__reply"
                    onClick={() => onReplyClick(reply.user.username)}
                >
                    Reply
                </button>
            </div>
            <p className="reply__content"><span className="reply__tag">@{reply.replying_to}</span> {reply.content}</p>
        </div>
    )
}

export default Reply;