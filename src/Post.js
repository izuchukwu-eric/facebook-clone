import { Avatar } from '@material-ui/core';
import React from 'react';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { AccountCircleOutlined, ExpandMoreOutlined } from "@material-ui/icons";
import './Post.css';
import { useStateValue } from './StateProvider';

function Post({ profilePic, image, username, timestamp, message }) {
    const [{ user }, dispatch ] = useStateValue();

    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={user.photoURL} className="post_avatar"/>
                <div className="post_topInfo">
                    <h3>{user.displayName}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
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
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                 <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                 <div className="post_option">
                    <AccountCircleOutlined />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
