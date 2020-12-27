import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutLineIcon from "@material-ui/icons/ChatBubbleOutline"
import NearMeIcon from "@material-ui/icons/NearMe"
import ExpandMoreOutLinedIcon from "@material-ui/icons/ExpandMoreOutlined"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

function Post({ profileimage, image, username, timestamp, message }) {

    var time = new Date().toLocaleString();

    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profileimage}
                    className="post_avatar" />
                <div className="post_topinfo">
                    <h3>{username}</h3>
                    <p>{time}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt="" />
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutLineIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutLinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
