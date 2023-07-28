import React from "react";
import { useState } from "react";
import Post from "./posts/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";



function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "CaptainCookie",
            postImage: require("./images/img5.jpg"),
            likes: "33",
            timestamp: "2d",
        },
        {
            user: "NinjaNoodle",
            postImage: require("./images/img2.jpg"),
            likes: "33",
            timestamp: "14h",
        },
        {
            user: "FuzzyPanda",
            postImage: require("./images/img3.jpg"),
            likes: "2283",
            timestamp: "yesterday",
        },
        {
            user: "SneakySloth",
            postImage: require("./images/img4.jpg"),
            likes: "326",
            timestamp: "34min",
        },
        {
            user: "DancingDinosaur",
            postImage: require("./images/img1.jpg"),
            likes: "203",
            timestamp: "2h",
        },
    ]);
// I am trying to use photos from online resources in a react project but when fetching the image I get "the connection used to fetch this resource is not secure"
    return (
        <div className="timeline">
            <div className="timeline__left">
                <div className="timeline__posts">
                    {posts.map((post) => (
                        <Post
                            user={post.user}
                            postImage={post.postImage}
                            likes={post.likes}
                            timestamp={post.timestamp}
                        />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Suggestions />
            </div>
        </div>
    );
}

export default Timeline;
