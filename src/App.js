// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faMagnifyingGlass,
    faCompass,
    faPaperPlane,
    faClapperboard,
    faHeart,
    faCirclePlus,
    faComment,
    faBookmark,
    faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import img from "./img6.jpg";

function makeid(length) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
    }
    return result;
}

function App() {
    return (
        <div className="container">
            <Navbar />

            <div className="middle-section">
                <section className="stories">
                    <Story name="amine__" img={img} />
                    <Story name={makeid(8)} img={img} />
                    <Story name="amine__" img={img} />
                    <Story name="amine__" img={img} />
                    <Story name="amine__" img={img} />
                    <Story name="amine__" img={img} />
                    <Story name="amine__" img={img} />
                    <Story name="amine__" img={img} />
                </section>
                <section className="posts">
                    <Post
                        img={img}
                        name="amine"
                        date="10h"
                        likesCount="135"
                        commentsCount="54"
                    />
                    <Post
                        img={img}
                        name="amine"
                        date="10h"
                        likesCount="135"
                        commentsCount="54"
                    />
                    <Post
                        img={img}
                        name="amine"
                        date="10h"
                        likesCount="135"
                        commentsCount="54"
                    />
                </section>
                <Right
                    img={img}
                    name="amine_boukhriss1"
                    username="Mohamed Amine Boukhris"
                />
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div className="story">
            <a>
                <img src={props.img} />
            </a>
            <p>{props.name}</p>
        </div>
    );
}

function Right(props) {
    return (
        <div className="right-section">
            <div className="profile">
                <div className="image">
                    <img src={props.img} />
                </div>
                <div className="profile-names">
                    <p>{props.name}</p>
                    <p>{props.username}</p>
                </div>
                <a className="switch-button">Switch</a>
            </div>
            <div className="suggestions-section">
                <div className="suggestions-title">
                    <p>Suggested for you</p>
                    <p>See All</p>
                </div>
                <div className="suggestions">
                    <Suggestion
                        img={img}
                        name="battat batta"
                        followText="Followed by duckofile and mr.nig"
                    />
                    <Suggestion
                        img={img}
                        name="battat batta"
                        followText="Followed by duckofile and mr.nig"
                    />
                    <Suggestion
                        img={img}
                        name="battat batta"
                        followText="Followed by duckofile and mr.nig"
                    />
                    <Suggestion
                        img={img}
                        name="battat batta"
                        followText="Followed by duckofile and mr.nig"
                    />
                    <Suggestion
                        img={img}
                        name="battat batta"
                        followText="Followed by duckofile and mr.nig"
                    />
                </div>
            </div>
        </div>
    );
}

function Suggestion(props) {
    return (
        <div className="suggestion">
            <div className="image"><img src={props.img} /></div>
            <div>
                <p className="name">{props.name}</p>
                <p className="follow-txt">{props.followText}</p>
            </div>
            <button className="follow-button">Follow</button>
        </div>
    );
}

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="ig-logo">Instagram</h1>
            <NavItem icon={faHome} name="Home" />
            <NavItem icon={faMagnifyingGlass} name="Search" />
            <NavItem icon={faCompass} name="Explore" />
            <NavItem icon={faClapperboard} name="Reels" />
            <NavItem icon={faPaperPlane} name="Messages" />
            <NavItem icon={faHeart} name="Notifications" />
            <NavItem icon={faCirclePlus} name="Create" />
        </nav>
    );
}

function NavItem(props) {
    return (
        <a href="#" className="nav-item">
            <FontAwesomeIcon className="nav-item-icon" icon={props.icon} />
            {props.name}
        </a>
    );
}

function Post(props) {
    return (
        <div className="post">
            <PostHeader img={img} name={props.name} date={props.date} />
            <img src={props.img} className="post-content-img" />
            <PostFooter
                likesCount={props.likesCount}
                commentsCount={props.commentsCount}
            />
        </div>
    );
}

function PostHeader(props) {
    return (
        <div className="post-header">
            <img src={props.img}></img>
            <p>
                {props.name} - <span>{props.date}</span>
            </p>
            <FontAwesomeIcon className="more-options" icon={faEllipsisH} />
        </div>
    );
}

function PostFooter(props) {
    return (
        <div className="post-footer">
            <div className="footer-actions-icons">
                <FontAwesomeIcon className="action-icon" icon={faHeart} />
                <FontAwesomeIcon className="action-icon" icon={faComment} />
                <FontAwesomeIcon className="action-icon" icon={faPaperPlane} />
                <FontAwesomeIcon
                    className="action-icon bookmark-icon"
                    icon={faBookmark}
                />
            </div>
            <p className="footer-likes">{props.likesCount} likes</p>
            <a className="footer-comments">
                View all {props.commentsCount} coomments
            </a>
            <input className="footer-input" placeholder="Add a comment..." />
            <hr />
        </div>
    );
}

export default App;
