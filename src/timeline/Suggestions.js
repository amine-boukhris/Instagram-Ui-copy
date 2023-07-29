import { Avatar } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Suggestions.css";

function Suggestions() {
    const [suggestions, setSuggestions] = useState([
        {
            username: "CaptainCookie",
            relation: "followed by JohnDoe",
        },
        {
            username: "NinjaNoodle",
            relation: "followed by AliceSmith",
        },
        {
            username: "FuzzyPanda",
            relation: "followed by MichaelJohnson",
        },
        {
            username: "SneakySloth",
            relation: "followed by EmilyBrown",
        },
        {
            username: "DancingDinosaur",
            relation: "followed by WilliamDavis",
        },
    ]);

    const pages = [
        "About",
        "Help",
        "Press",
        "API",
        "Jobs",
        "Privacy",
        "Terms",
        "Locations",
        "Language",
        "Meta",
        "Verified",
    ];
    return (
        <div className="suggestions">
            <div className="profile-suggestions__username">
                <div className="profile-username__left">
                    <span>
                        <Avatar className="profile-avatar">M</Avatar>
                    </span>
                    <div className="profile-username__info">
                        <span className="profile-username">amin_boukhriss1</span>
                        <span className="profile-name">Med Amine Boukhris</span>
                    </div>
                </div>
                <button className="switch__button">switch</button>
            </div>
            <div className="suggestions__title">Suggestions for you</div>
            <div className="suggestions__usernames">
                {suggestions.map((suggestion) => (
                    <Suggestion username={suggestion.username} relation={suggestion.relation} />
                ))}
            </div>
            <div className="footer__pages">
                {pages.map((page, index) => (
                    <React.Fragment key={index}>
                        <a>{page}</a>
                        {index !== pages.length - 1 && <span className="unselectable"> &#183; </span>}
                    </React.Fragment>
                ))}
            </div>
            <div className="footer_rights">
                Instagram ui from amine
            </div>
        </div>
    );
}

function Suggestion({ username, relation }) {
    return (
        <div className="suggestions__username">
            <div className="username__left">
                <span className="avatar">
                    <Avatar>{username[0].toUpperCase()}</Avatar>
                </span>
                <div className="username__info">
                    <span className="username">{username}</span>
                    <span className="relation">{relation}</span>
                </div>
            </div>
            <button className="follow__button">follow</button>
        </div>
    );
}

export default Suggestions;
