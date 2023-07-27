import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import landscape from "./landscape.jpeg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerAuthor">
                    <Avatar>R</Avatar>
                    batta_ • <span>10h</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="post__image">
                <img src={landscape} alt="land" />
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__footerIconsMain">
                        <FavoriteBorderIcon className="postIcon" />
                        <ChatBubbleOutlineIcon className="postIcon" />
                        <TelegramIcon className="postIcon" />
                    </div>
                    <div className="post__footerIconsSave">
                      <BookmarkBorderIcon className="postIcon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
