import React from "react";

const FriendItem = (props) => {
    console.log(props);
    return (
        <div className="friend-item">
            <img src = {props.imageUrl} alt={props.name +"'s"+ "  " + "Profile Pictures" }  />
            <div className="right">
                <h1> {props.name} </h1> 
                <p> {props.title} </p>                        
            </div>
        </div>
    );
};

export default FriendItem;