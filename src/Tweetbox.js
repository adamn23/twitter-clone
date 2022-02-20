import React from "react";
import "./Tweetbox.css";
import { Avatar, Button} from "@material-ui/core";

function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox;